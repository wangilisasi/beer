import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, description, date } = body;

    // Get the tracker (we'll use the first one)
    const tracker = await prisma.expenseTracker.findFirst();
    
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