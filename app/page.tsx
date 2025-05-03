"use client";

import { germanBeers, Beer } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [beers, setBeers] = useState<Beer[]>(germanBeers);

  const toggleBeerTested = (beerId: number) => {
    setBeers(prev => prev.map(beer => 
      beer.id === beerId 
        ? { ...beer, isTested: !beer.isTested }
        : beer
    ));
  };

  const testedCount = beers.filter(beer => beer.isTested).length;
  const progressPercentage = (testedCount / beers.length) * 100;

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:px-24 bg-white">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-pacifico tracking-tight mb-4 bg-gradient-to-r from-[#462400] to-[#8B4513] text-transparent bg-clip-text">
            German Beer Explorer
          </h1>
          <div className="relative w-full h-2.5 bg-[#f5e6c9] rounded-full overflow-hidden mb-2">
            <div 
              className="absolute left-0 top-0 h-full bg-[#e6b800] transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-[#8B4513]">
            {testedCount} of {beers.length} beers tasted ({Math.round(progressPercentage)}%)
          </p>
        </div>

        <div className="space-y-4">
          {beers.map(beer => (
            <div 
              key={beer.id} 
              className={`
                p-4 rounded-lg border transition-all duration-200
                ${beer.isTested 
                  ? 'bg-white border-[#e6b800] shadow-lg shadow-[#e6b800]/10' 
                  : 'bg-white hover:bg-[#fbfbfb] hover:border-[#daa520] hover:shadow-md'}
              `}
            >
              <div className="flex items-center space-x-4">
                <div 
                  className={`
                    h-6 w-6 rounded-md border-2 cursor-pointer transition-all duration-200 flex items-center justify-center
                    ${beer.isTested 
                      ? 'bg-[#daa520] border-[#daa520] text-white' 
                      : 'border-[#8B4513]/30 hover:border-[#daa520]'}
                  `}
                  onClick={() => toggleBeerTested(beer.id)}
                >
                  {beer.isTested && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#462400]">{beer.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-sm px-2.5 py-1 rounded-md bg-[#f8f8f8] text-[#8B4513] border border-[#daa520]/20">
                      {beer.type}
                    </span>
                    <span className="text-sm px-2.5 py-1 rounded-md bg-[#f8f8f8] text-[#8B4513] border border-[#daa520]/20">
                      {beer.region}
                    </span>
                    <span className="text-sm px-2.5 py-1 rounded-md bg-[#fafafa] text-[#8B4513] border border-[#daa520]/20">
                      {beer.alcoholContent}% ABV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
