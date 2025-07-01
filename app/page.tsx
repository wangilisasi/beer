import BeerList from '@/components/BeerList';
import type { Beer } from "../src/generated/prisma";
import { db } from "@/prisma";
import Link from 'next/link';

//fetch data directly from page
async function getBeers(): Promise<Beer[]> {
  // Fetch data directly from the database
  const beers = await db.beer.findMany({
    orderBy: {
      isTested: 'desc', // Optional: Order beers alphabetically by name
    },
  });
  return beers;
}
 
export default async function Home() {
  const beers = await getBeers(); // Fetch beers from the API route

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:px-24 bg-white">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-pacifico tracking-tight pb-4 mb-4 bg-gradient-to-r from-[#462400] to-[#8B4513] text-transparent bg-clip-text">
            German Beer Explorer
          </h1>
          <Link 
            href="/tracker" 
            className="inline-block px-6 py-3 bg-[#daa520] text-white rounded-lg hover:bg-[#c99510] transition-colors font-medium"
          >
            To Tracker
          </Link>
        </div>
        <BeerList initialBeers={beers} />
      </div>
    </main>
  );
}
