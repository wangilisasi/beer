import { NextResponse } from 'next/server';
import prisma  from '@/prisma'; // Adjust the import path based on your project structure



export async function GET() {
  try {
    const beers = await prisma.beer.findMany({
      orderBy: {
        isTested: 'desc', // Sort by isTested status, false (untested) first
      },
    });
    return NextResponse.json(beers);
  } catch (error) {
    console.error("Failed to fetch beers:", error);
    return NextResponse.json({ error: 'Failed to fetch beers' }, { status: 500 });
  }
}
