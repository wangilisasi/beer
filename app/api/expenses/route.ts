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
    
    // TODO: Fix bug - New users get 400 error when trying to create expenses
    // because they don't have an expense tracker yet. Need to either:
    // 1. Auto-create a default tracker for new users, OR
    // 2. Return a more helpful error message directing them to set up budget first
    // 3. Handle this gracefully in the UI to guide new users through setup
    if (!tracker) {
      return NextResponse.json(
        { error: 'No expense tracker found. Please set up your budget first.' },
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