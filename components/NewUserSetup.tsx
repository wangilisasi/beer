"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, Target, ArrowRight } from "lucide-react";

export default function NewUserSetup() {
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();

  const handleCreateBudget = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!budget || !startDate || !endDate || isCreating) return;

    try {
      setIsCreating(true);
      const response = await fetch("/api/expense-tracker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalMoney: parseFloat(budget),
          startDate: startDate,
          endDate: endDate,
        }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Failed to create budget");
      }
    } catch (error) {
      console.error("Error creating budget:", error);
    } finally {
      setIsCreating(false);
    }
  };

  // previously used for min date validation; no longer needed after adding both date pickers

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto px-6">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Expense Tracker!
          </h1>
          <p className="text-lg text-gray-600">
            Let&apos;s set up your first budget to start tracking your expenses
          </p>
        </div>

        {/* Setup Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Set Budget</h3>
            <p className="text-sm text-gray-600">Enter your total available money</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Choose Dates</h3>
            <p className="text-sm text-gray-600">When do you want to finish spending?</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Start Tracking</h3>
            <p className="text-sm text-gray-600">Begin adding your daily expenses</p>
          </div>
        </div>

        {/* Budget Setup Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">Create Your First Budget</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleCreateBudget} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  💰 Total Budget Amount (€)
                </label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter your total budget (e.g., 1000.00)"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  step="0.01"
                  min="0.01"
                  disabled={isCreating}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  This is the total amount you want to spend until your end date
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🟢 Budget Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    max={endDate || undefined}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    disabled={isCreating}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    🔴 Budget End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    disabled={isCreating}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!budget || !startDate || !endDate || isCreating}
                className="w-full py-4 text-lg"
                variant="default"
              >
                {isCreating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Budget...
                  </>
                ) : (
                  <>
                    Create Budget & Start Tracking
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <div className="text-blue-500 mr-3 mt-0.5">💡</div>
                <div>
                  <h4 className="font-medium text-blue-900 mb-1">How it works:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• We&apos;ll calculate your daily spending target based on your budget and end date</li>
                    <li>• Track your expenses daily to stay within your budget</li>
                    <li>• Get insights on whether you&apos;re on track or overspending</li>
                    <li>• You can always adjust your budget later if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 