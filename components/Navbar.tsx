import { signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-lg sm:text-xl font-bold text-gray-900 truncate">
              Expense Tracker
            </Link>
            <Link 
              href="/beer" 
              className="hidden sm:block text-gray-600 hover:text-gray-900 transition-colors"
            >
              Beer Explorer
            </Link>
          </div>

          {/* Desktop Authentication Section */}
          <div className="hidden sm:flex items-center gap-4">
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
                  <span className="text-sm text-gray-700 hidden md:block">
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

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <details className="group">
              <summary className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors cursor-pointer list-none">
                <Menu className="w-5 h-5 group-open:hidden" />
                <X className="w-5 h-5 hidden group-open:block" />
              </summary>
              
              {/* Mobile Dropdown */}
              <div className="absolute right-4 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <Link 
                    href="/beer" 
                    className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    Beer Explorer
                  </Link>
                </div>
                
                {session ? (
                  <div className="px-4 py-2">
                    <div className="flex items-center gap-2 mb-3">
                      {session.user?.image && (
                        <img
                          src={session.user.image}
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {session.user?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {session.user?.email}
                        </p>
                      </div>
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
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="px-4 py-2">
                    <Link href="/login" className="block">
                      <Button variant="default" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
} 