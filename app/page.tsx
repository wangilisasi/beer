import BeerList from '@/components/BeerList';
import type { Beer } from "@prisma/client";
import { db } from "@/prisma";

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
          {/* Progress bar and count are in BeerList */}
        </div>
        <BeerList initialBeers={beers} />
      </div>
    </main>
  );
}
