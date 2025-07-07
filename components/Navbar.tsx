import { signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Expense Tracker
            </Link>
            <Link 
              href="/beer" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Beer Explorer
            </Link>
          </div>

          {/* Authentication Section */}
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <div className="flex items-center gap-2">
                  {session.user?.image && (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-sm text-gray-700">
                    Hello, {session.user?.name || session.user?.email}
                  </span>
                </div>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                  >
                    Sign Out
                  </Button>
                </form>
              </>
            ) : (
              <Link href="/login">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 