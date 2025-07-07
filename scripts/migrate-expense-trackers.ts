import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateExpenseTrackers() {
  try {
    console.log('Starting migration of expense trackers...');

    // Get all expense trackers (we know they all have userId: null)
    const allTrackers = await prisma.expenseTracker.findMany();
    console.log(`Found ${allTrackers.length} expense trackers to migrate`);

    if (allTrackers.length === 0) {
      console.log('No expense trackers found - nothing to migrate');
      return;
    }

    // Create a default user for existing data
    const defaultUser = await prisma.user.upsert({
      where: {
        email: 'wangilisasi@gmail.com'
      },
      create: {
        email: 'wangilisasi@gmail.com',
        name: 'Emil Patrick',
      },
      update: {}
    });

    console.log(`Using default user: ${defaultUser.email} (${defaultUser.id})`);

    // Update all expense trackers to use the default user
    const updateResult = await prisma.expenseTracker.updateMany({
      data: {
        userId: defaultUser.id
      }
    });

    console.log(`✅ Updated ${updateResult.count} expense trackers with default userId`);

    // Verify the migration
    const trackersWithUserId = await prisma.expenseTracker.findMany({
      where: {
        userId: defaultUser.id
      }
    });

    console.log(`✅ Migration completed successfully! ${trackersWithUserId.length} trackers now have userId`);

  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Option 2: Alternative function to assign to a specific existing user
async function assignToExistingUser(userEmail: string) {
  try {
    console.log(`Assigning existing expense trackers to user: ${userEmail}`);

    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      throw new Error(`User with email ${userEmail} not found`);
    }

    // Update all expense trackers to use this user
    const updateResult = await prisma.expenseTracker.updateMany({
      data: {
        userId: user.id
      }
    });

    console.log(`✅ Assigned ${updateResult.count} expense trackers to ${userEmail}`);

  } catch (error) {
    console.error('Assignment failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length > 0 && args[0] === '--user-email' && args[1]) {
    // Assign to specific user: tsx scripts/migrate-expense-trackers.ts --user-email user@example.com
    assignToExistingUser(args[1]);
  } else {
    // Default migration: tsx scripts/migrate-expense-trackers.ts
    migrateExpenseTrackers();
  }
}

export { migrateExpenseTrackers, assignToExistingUser }; 