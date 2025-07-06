// BEGIN SERVER COMPONENT IMPLEMENTATION
export const dynamic = "force-dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetDialog from "@/components/BudgetDialog";
import AddExpenseForm from "@/components/AddExpenseForm";
import ExpenseHistory from "@/components/ExpenseHistory";
import { getTrackerStats } from "@/lib/expenseTracker";

function formatCurrency(amount: number) {
  return `€${amount.toFixed(2)}`;
}

export default async function TrackerPage() {
  const {
    totalMoney,
    endDate,
    expenses,
    remainingDays,
    totalSpent,
    remainingMoney,
    dailyTarget,
    recentDailySpend,
    isOnTrack,
    budgetPercentage,
    todaySpend,
    yesterdaySpend,
  } = await getTrackerStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Expense Tracker</h1>
        </div>

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
                <p className="text-lg font-bold text-gray-900">{endDate}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-blue-500 mr-2">⏰</span>
                  <span className="text-gray-600 font-medium">Days Remaining</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{remainingDays} days</p>
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
                <BudgetDialog totalMoney={totalMoney} endDate={endDate}>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-1 rounded-full hover:bg-blue-50">
                    <span className="text-sm">✏️</span>
                  </button>
                </BudgetDialog>
              </div>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(totalMoney)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Total Spent</h3>
              <p className="text-2xl font-bold text-rose-600">{formatCurrency(totalSpent)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Remaining</h3>
              <p className="text-2xl font-bold text-sky-600">{formatCurrency(remainingMoney)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Daily Target</h3>
              <p className="text-2xl font-bold text-violet-600">{formatCurrency(dailyTarget)}</p>
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
              <span className="text-gray-700">Spent: {formatCurrency(totalSpent)}</span>
              <span className="text-gray-600 font-medium">{budgetPercentage.toFixed(1)}% of budget</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  isOnTrack
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                    : "bg-gradient-to-r from-rose-400 to-rose-500"
                }`}
                style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="text-center">
              <p className={`font-medium ${isOnTrack ? "text-emerald-600" : "text-rose-600"}`}>{
                isOnTrack
                  ? "You're on track! Your recent daily spending is within target."
                  : `Warning: Your avg 2 day spending (${formatCurrency(recentDailySpend)}) exceeds your target)`
              }</p>
              <p className="text-sm text-gray-600 mt-1">Yesterday: <span className={`font-bold ${yesterdaySpend <= dailyTarget ? 'text-green-600' : 'text-rose-600'}`}>{formatCurrency(yesterdaySpend)}</span> Today: <span className={`font-bold ${todaySpend <= dailyTarget ? 'text-green-600' : 'text-rose-600'}`}>{formatCurrency(todaySpend)}</span></p>
            </div>
          </CardContent>
        </Card>

        {/* Add Expense Form */}
        <AddExpenseForm />

        {/* Expense History */}
        <ExpenseHistory expenses={expenses} />
      </div>
    </div>
  );
}
// END SERVER COMPONENT IMPLEMENTATION 