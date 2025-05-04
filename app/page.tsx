import BeerList from '@/components/BeerList';
; // Keep type import
import  type {Beer} from "@prisma/client";

async function getBeers(): Promise<Beer[]> {
  // Fetch data from the API route
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/beers`, {
    cache: 'no-store', // Ensure fresh data on each request
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
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
