"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AddExpenseForm() {
  const [newExpense, setNewExpense] = useState({ amount: "", description: "" });
  const [addingExpense, setAddingExpense] = useState(false);
  const router = useRouter();

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.amount || !newExpense.description || addingExpense) return;

    try {
      setAddingExpense(true);
      await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(newExpense.amount),
          description: newExpense.description,
          date: new Date().toISOString().split("T")[0],
        }),
      });
      setNewExpense({ amount: "", description: "" });
      router.refresh();
    } finally {
      setAddingExpense(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center">
          <span className="text-2xl mr-2">➕</span>
          <CardTitle className="text-xl">Add Today&apos;s Expense</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount (€)</label>
            <input
              type="number"
              value={newExpense.amount}
              onChange={(e) => setNewExpense((prev) => ({ ...prev, amount: e.target.value }))}
              placeholder="0.00"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              step="0.01"
              disabled={addingExpense}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input
              type="text"
              value={newExpense.description}
              onChange={(e) => setNewExpense((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="What did you buy?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={addingExpense}
              required
            />
          </div>
          <div className="flex items-end">
            <Button
              type="submit"
              disabled={!newExpense.amount || !newExpense.description || addingExpense}
              className="w-full"
              variant="default"
            >
              {addingExpense ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                <>➕ Add Expense</>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 