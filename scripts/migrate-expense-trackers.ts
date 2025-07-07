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

    // Find the existing user by email
    const existingUser = await prisma.user.findUnique({
      where: {
        email: 'wangilisasi@gmail.com'
      }
    });

    if (!existingUser) {
      throw new Error('User with email wangilisasi@gmail.com not found. Please sign in first to create the user account.');
    }

    console.log(`Found existing user: ${existingUser.email} (${existingUser.id})`);

    // Update all expense trackers to use the existing user
    const updateResult = await prisma.expenseTracker.updateMany({
      data: {
        userId: existingUser.id
      }
    });

    console.log(`✅ Updated ${updateResult.count} expense trackers with userId`);

    // Verify the migration
    const trackersWithUserId = await prisma.expenseTracker.findMany({
      where: {
        userId: existingUser.id
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