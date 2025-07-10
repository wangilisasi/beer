import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupOrphanedAccounts() {
  try {
    console.log('🔍 Checking for orphaned accounts...');
    
    // Find all accounts
    const allAccounts = await prisma.account.findMany({
      select: {
        id: true,
        userId: true,
        provider: true,
        providerAccountId: true
      }
    });
    
    console.log(`📊 Found ${allAccounts.length} total accounts`);
    
    // Find accounts with non-existent users
    const orphanedAccounts = [];
    
    for (const account of allAccounts) {
      const userExists = await prisma.user.findUnique({
        where: { id: account.userId }
      });
      
      if (!userExists) {
        orphanedAccounts.push(account);
      }
    }
    
    console.log(`🚨 Found ${orphanedAccounts.length} orphaned accounts`);
    
    if (orphanedAccounts.length > 0) {
      console.log('Orphaned accounts:');
      orphanedAccounts.forEach(account => {
        console.log(`  - Account ID: ${account.id}, Provider: ${account.provider}, User ID: ${account.userId}`);
      });
      
      // Delete orphaned accounts
      const deleteResult = await prisma.account.deleteMany({
        where: {
          id: {
            in: orphanedAccounts.map(account => account.id)
          }
        }
      });
      
      console.log(`✅ Cleaned up ${deleteResult.count} orphaned accounts`);
    } else {
      console.log('✨ No orphaned accounts found - database is clean!');
    }
    
    // Also clean up orphaned sessions
    console.log('\n🔍 Checking for orphaned sessions...');
    
    const allSessions = await prisma.session.findMany({
      select: {
        id: true,
        userId: true
      }
    });
    
    const orphanedSessions = [];
    
    for (const session of allSessions) {
      const userExists = await prisma.user.findUnique({
        where: { id: session.userId }
      });
      
      if (!userExists) {
        orphanedSessions.push(session);
      }
    }
    
    if (orphanedSessions.length > 0) {
      const deleteSessionsResult = await prisma.session.deleteMany({
        where: {
          id: {
            in: orphanedSessions.map(session => session.id)
          }
        }
      });
      
      console.log(`✅ Cleaned up ${deleteSessionsResult.count} orphaned sessions`);
    } else {
      console.log('✨ No orphaned sessions found');
    }
    
  } catch (error) {
    console.error('❌ Error cleaning up database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the cleanup
cleanupOrphanedAccounts()
  .then(() => {
    console.log('\n🎉 Database cleanup completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Cleanup failed:', error);
    process.exit(1);
  }); 