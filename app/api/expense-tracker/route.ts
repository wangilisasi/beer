import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/auth';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const session = await auth();
    
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get expense tracker for the authenticated user
    const tracker = await prisma.expenseTracker.findFirst({
      where: {
        userId: session.user.id
      },
      include: {
        expenses: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!tracker) {
      return NextResponse.json({ 
        tracker: null, 
        expenses: [] 
      });
    }

    return NextResponse.json({
      tracker,
      expenses: tracker.expenses
    });
  } catch (error) {
    console.error('Error fetching expense tracker:', error);
    return NextResponse.json(
      { error: 'Failed to fetch expense tracker' },
      { status: 500 }
    );
  }
}

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
    const { totalMoney, endDate } = body;

    // Check if tracker already exists for this user
    const existingTracker = await prisma.expenseTracker.findFirst({
      where: {
        userId: session.user.id
      }
    });
    
    if (existingTracker) {
      // Update existing tracker
      const updatedTracker = await prisma.expenseTracker.update({
        where: { id: existingTracker.id },
        data: {
          totalMoney: parseFloat(totalMoney),
          endDate,
          updatedAt: new Date()
        },
        include: {
          expenses: {
            orderBy: {
              createdAt: 'desc'
            }
          }
        }
      });

      return NextResponse.json(updatedTracker);
    } else {
      // Create new tracker for this user
      const newTracker = await prisma.expenseTracker.create({
        data: {
          totalMoney: parseFloat(totalMoney),
          endDate,
          userId: session.user.id
        },
        include: {
          expenses: {
            orderBy: {
              createdAt: 'desc'
            }
          }
        }
      });

      return NextResponse.json(newTracker);
    }
  } catch (error) {
    console.error('Error creating/updating expense tracker:', error);
    return NextResponse.json(
      { error: 'Failed to create/update expense tracker' },
      { status: 500 }
    );
  }
} 