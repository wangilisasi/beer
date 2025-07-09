import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { amount, description, date } = body;

    // Get the tracker for the authenticated user
    const tracker = await prisma.expenseTracker.findFirst({
      where: {
        userId: session.user.id
      }
    });
    
    // Handle case where user doesn't have an expense tracker yet
    if (!tracker) {
      return NextResponse.json(
        { 
          error: 'No expense tracker found. Please set up your budget first.',
          code: 'NO_TRACKER',
          message: 'You need to create a budget before you can add expenses. Please go back to the main page and set up your budget first.'
        },
        { status: 400 }
      );
    }

    // Create the expense
    const expense = await prisma.expense.create({
      data: {
        amount: parseFloat(amount),
        description,
        date,
        trackerId: tracker.id
      }
    });

    return NextResponse.json(expense);
  } catch (error) {
    console.error('Error creating expense:', error);
    return NextResponse.json(
      { error: 'Failed to create expense' },
      { status: 500 }
    );
  }
} 