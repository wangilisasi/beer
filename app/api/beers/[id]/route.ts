import { NextResponse } from 'next/server';
import { db } from '@/prisma'; // Adjust the import path based on your project structure
import { revalidatePath } from 'next/cache'; // Import revalidatePath

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { isTested } = await request.json();

  if (typeof isTested !== 'boolean') {
    return NextResponse.json({ error: 'Invalid isTested value' }, { status: 400 });
  }

  try {
    const updatedBeer = await db.beer.update({
      where: { id },
      data: { isTested },
    });

    revalidatePath('/'); // Revalidate the home page cache

    return NextResponse.json(updatedBeer);
  } catch (error) {
    console.error(`Failed to update beer ${id}:`, error);
    // Handle potential errors, e.g., record not found
    if (error instanceof Error && 'code' in error && error.code === 'P2025') { // Prisma error code for record not found
        return NextResponse.json({ error: 'Beer not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update beer' }, { status: 500 });
  }
}