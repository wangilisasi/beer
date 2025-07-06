import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateExpenseTrackers() {
  try {
    console.log('Starting migration of expense trackers...');

    // Get all expense trackers that don't have a userId
    const trackersWithoutUserId = await prisma.expenseTracker.findMany({
      where: {
        userId: null
      }
    });

    console.log(`Found ${trackersWithoutUserId.length} expense trackers without userId`);

    if (trackersWithoutUserId.length === 0) {
      console.log('No migration needed - all expense trackers already have userId');
      return;
    }

    // Option 1: Create a default user for existing data
    const defaultUser = await prisma.user.upsert({
      where: {
        email: 'default@example.com'
      },
      create: {
        email: 'default@example.com',
        name: 'Default User',
      },
      update: {}
    });

    console.log(`Using default user: ${defaultUser.email} (${defaultUser.id})`);

    // Update all expense trackers without userId to use the default user
    const updateResult = await prisma.expenseTracker.updateMany({
      where: {
        userId: null
      },
      data: {
        userId: defaultUser.id
      }
    });

    console.log(`Updated ${updateResult.count} expense trackers with default userId`);

    // Verify the migration
    const remainingTrackers = await prisma.expenseTracker.findMany({
      where: {
        userId: null
      }
    });

    if (remainingTrackers.length === 0) {
      console.log('✅ Migration completed successfully!');
    } else {
      console.log(`⚠️  ${remainingTrackers.length} expense trackers still without userId`);
    }

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

    const updateResult = await prisma.expenseTracker.updateMany({
      where: {
        userId: null
      },
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