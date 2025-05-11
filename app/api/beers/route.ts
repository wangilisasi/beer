import { NextResponse } from 'next/server';
import { db } from '@/prisma';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const { name, type, region, alcoholContent } = await request.json();

    // Validate required fields
    if (!name || !type || !region || !alcoholContent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new beer
    const newBeer = await db.beer.create({
      data: {
        name,
        type,
        region,
        alcoholContent: parseFloat(alcoholContent),
        isTested: false,
      },
    });

    revalidatePath('/');
    return NextResponse.json(newBeer, { status: 201 });
  } catch (error) {
    console.error('Failed to create beer:', error);
    return NextResponse.json(
      { error: 'Failed to create beer' },
      { status: 500 }
    );
  }
} 