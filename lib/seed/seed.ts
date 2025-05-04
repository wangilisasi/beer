import { PrismaClient } from '../generated/prisma';
import { germanBeers } from '../data';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const beer of germanBeers) {
    // Prisma will generate the ObjectId for the id field
    const { id, ...beerData } = beer; 
    const createdBeer = await prisma.beer.create({
      data: beerData,
    });
    console.log(`Created beer with id: ${createdBeer.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
