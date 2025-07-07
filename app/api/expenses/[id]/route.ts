import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/auth';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the id from the URL
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop();

    if (!id) {
      return NextResponse.json(
        { error: 'Expense ID is required' },
        { status: 400 }
      );
    }

    // First, verify that the expense belongs to the user's tracker
    const expense = await prisma.expense.findUnique({
      where: { id },
      include: {
        expenseTracker: {
          select: {
            userId: true
          }
        }
      }
    });

    if (!expense) {
      return NextResponse.json(
        { error: 'Expense not found' },
        { status: 404 }
      );
    }

    if (expense.expenseTracker.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Forbidden: You can only delete your own expenses' },
        { status: 403 }
      );
    }

    // Delete the expense
    await prisma.expense.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Error deleting expense:', error);
    return NextResponse.json(
      { error: 'Failed to delete expense' },
      { status: 500 }
    );
  }
} 