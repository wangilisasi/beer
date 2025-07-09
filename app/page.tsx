// BEGIN SERVER COMPONENT IMPLEMENTATION
export const dynamic = "force-dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetDialog from "@/components/BudgetDialog";
import AddExpenseForm from "@/components/AddExpenseForm";
import ExpenseHistory from "@/components/ExpenseHistory";
import NewUserSetup from "@/components/NewUserSetup";
import { getTrackerStats } from "@/lib/expenseTracker";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Edit } from "lucide-react";

function formatCurrency(amount: number) {
  return `€${amount.toFixed(2)}`;
}

export default async function TrackerPage() {
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session || !session.user?.id) {
    redirect("/login");
  }

  const { data, stats } = await getTrackerStats(session.user.id);

  // Show new user setup if they don't have a tracker yet
  if (!data.hasTracker) {
    return <NewUserSetup />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Period Info Card */}
        <Card className="mb-6">
          <CardContent className="px-4 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8">
              <div className="text-center border-b sm:border-b-0 pb-4 sm:pb-0">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-green-500 mr-2">📅</span>
                  <span className="text-gray-600 font-medium">Start Date</span>
                </div>
                <p className="text-lg font-bold text-gray-900">2025-07-04</p>
              </div>
              <div className="text-center border-b sm:border-b-0 pb-4 sm:pb-0">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-500 mr-2">📅</span>
                  <span className="text-gray-600 font-medium">End Date</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{data.endDate}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-blue-500 mr-2">⏰</span>
                  <span className="text-gray-600 font-medium">Days Remaining</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{stats.remainingDays} days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Budget</h3>
                <BudgetDialog totalMoney={data.totalMoney} endDate={data.endDate}>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-1 rounded-full hover:bg-blue-50">
                    <Edit size={16} />
                  </button>
                </BudgetDialog>
              </div>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(data.totalMoney)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Total Spent</h3>
              <p className="text-2xl font-bold text-rose-600">{formatCurrency(stats.totalSpent)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Remaining</h3>
              <p className="text-2xl font-bold text-sky-600">{formatCurrency(stats.remainingMoney)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Daily Target</h3>
              <p className="text-2xl font-bold text-violet-600">{formatCurrency(stats.dailyTarget)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Budget Progress */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center">
              <span className="text-2xl mr-2">📊</span>
              <CardTitle className="text-xl">Budget Progress</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-700">Spent: {formatCurrency(stats.totalSpent)}</span>
              <span className="text-gray-600 font-medium">{stats.budgetPercentage.toFixed(1)}% of budget</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  stats.isOnTrack
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                    : "bg-gradient-to-r from-rose-400 to-rose-500"
                }`}
                style={{ width: `${Math.min(stats.budgetPercentage, 100)}%` }}
              ></div>
            </div>
            <div>
              <p className={`font-medium ${stats.isOnTrack ? "text-emerald-600" : "text-rose-600"}`}>{
                stats.isOnTrack
                  ? "You're on track! Your recent daily spending is within target."
                  : `Warning: Your avg 2 day spending (${formatCurrency(stats.recentDailySpend)}) exceeds your target)`
              }</p>
              <p className="text-sm text-gray-600 mt-1">Yesterday: <span className={`font-bold ${stats.yesterdaySpend <= stats.dailyTarget ? 'text-green-600' : 'text-rose-600'}`}>{formatCurrency(stats.yesterdaySpend)}</span> Today: <span className={`font-bold ${stats.todaySpend <= stats.dailyTarget ? 'text-green-600' : 'text-rose-600'}`}>{formatCurrency(stats.todaySpend)}</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Add Expense Form */}
        <AddExpenseForm />

        {/* Expense History */}
        <ExpenseHistory expenses={data.expenses} />
      </div>
    </div>
  );
}
// END SERVER COMPONENT IMPLEMENTATION 