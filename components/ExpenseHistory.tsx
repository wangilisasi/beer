"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExpenseEntry {
  id: string;
  date: string;
  amount: number;
  description: string;
}

interface ExpenseHistoryProps {
  expenses: ExpenseEntry[];
}

export default function ExpenseHistory({ expenses }: ExpenseHistoryProps) {
  const [showAllExpenses, setShowAllExpenses] = useState(false);
  const router = useRouter();

  const handleDeleteExpense = async (id: string) => {
    await fetch(`/api/expenses/${id}`, { method: "DELETE" });
    router.refresh();
  };

  const getRecentExpenses = () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return expenses.filter((expense) => new Date(expense.date) >= sevenDaysAgo);
  };

  const displayedExpenses = showAllExpenses ? expenses : getRecentExpenses();
  const hiddenExpensesCount = expenses.length - displayedExpenses.length;

  const formatCurrency = (amount: number) => `€${amount.toFixed(2)}`;
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });

  return (
    <Card>
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-2">📋</span>
            <CardTitle className="text-xl">Expense History</CardTitle>
          </div>
          {!showAllExpenses && hiddenExpensesCount > 0 && (
            <span className="text-sm text-gray-500">
              Showing last 7 days • {hiddenExpensesCount} more {hiddenExpensesCount === 1 ? "expense" : "expenses"}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {displayedExpenses.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">💭</div>
              <p className="text-lg">No expenses recorded yet.</p>
              <p className="text-sm">Add your first expense above!</p>
            </div>
          ) : (
            <>
              {displayedExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600">€</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{expense.description}</p>
                      <p className="text-sm text-gray-500">{formatDate(expense.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-red-600">
                      {formatCurrency(expense.amount)}
                    </span>
                    <Button
                      onClick={() => handleDeleteExpense(expense.id)}
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
              {hiddenExpensesCount > 0 && !showAllExpenses && (
                <div className="p-4 text-center">
                  <Button onClick={() => setShowAllExpenses(true)} variant="ghost" className="font-medium">
                    Show All Expenses ({expenses.length} total)
                  </Button>
                </div>
              )}
              {showAllExpenses && (
                <div className="p-4 text-center">
                  <Button onClick={() => setShowAllExpenses(false)} variant="ghost" className="font-medium">
                    Show Recent Expenses Only
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 