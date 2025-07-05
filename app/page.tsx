// BEGIN SERVER COMPONENT IMPLEMENTATION
export const dynamic = "force-dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetDialog from "@/components/BudgetDialog";
import AddExpenseForm from "@/components/AddExpenseForm";
import ExpenseHistory from "@/components/ExpenseHistory";
import { db } from "@/prisma";

interface ExpenseEntry {
  id: string;
  date: string;
  amount: number;
  description: string;
}

function formatCurrency(amount: number) {
  return `€${amount.toFixed(2)}`;
}

async function fetchTrackerData() {
  const tracker = await db.expenseTracker.findFirst({
    include: {
      expenses: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return {
    totalMoney: tracker?.totalMoney ?? 0,
    endDate: tracker?.endDate ?? "2025-08-31",
    expenses: (tracker?.expenses ?? []) as ExpenseEntry[],
  };
}

export default async function TrackerPage() {
  const { totalMoney, endDate, expenses } = await fetchTrackerData();

  // Server-side calculations
  const today = new Date();
  const end = new Date(endDate);
  const remainingDays = Math.max(0, Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingMoney = totalMoney - totalSpent;
  const dailyTarget = remainingDays > 0 ? remainingMoney / remainingDays : 0;

  const calculateRecentDailyExpenditure = () => {
    const todayStr = today.toISOString().split("T")[0];
    const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    const recentExpenses = expenses.filter(
      (expense) => expense.date === todayStr || expense.date === yesterdayStr
    );

    const recentTotal = recentExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    return recentTotal / 2; // Average over 2 days
  };

  const recentDailySpend = calculateRecentDailyExpenditure();
  const isOnTrack = recentDailySpend <= dailyTarget;
  const budgetPercentage = totalMoney > 0 ? (totalSpent / totalMoney) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🧠 Expense Tracker</h1>
        </div>

        {/* Period Info Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center border-b sm:border-b-0 pb-4 sm:pb-0">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-green-500 mr-2">📅</span>
                  <span className="text-gray-600 font-medium">Start Date</span>
                </div>
                <p className="text-lg font-bold text-gray-900">7/4/2025</p>
              </div>
              <div className="text-center border-b sm:border-b-0 pb-4 sm:pb-0">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-500 mr-2">📅</span>
                  <span className="text-gray-600 font-medium">End Date</span>
                </div>
                <p className="text-lg font-bold text-gray-900">8/31/2025</p>
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

        {/* Budget Dialog */}
        <BudgetDialog totalMoney={totalMoney} endDate={endDate} />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-gray-600">Total Budget</h3>
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
                  : `Warning: Your recent daily spending (${formatCurrency(recentDailySpend)}) exceeds your target (${formatCurrency(dailyTarget)})`
              }</p>
              <p className="text-sm text-gray-600 mt-1">Based on your spending in the last 2 days</p>
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