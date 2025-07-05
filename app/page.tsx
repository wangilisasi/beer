"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ExpenseEntry {
  id: string;
  date: string;
  amount: number;
  description: string;
}

export default function TrackerPage() {
  const [expenses, setExpenses] = useState<ExpenseEntry[]>([]);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [newExpense, setNewExpense] = useState({ amount: '', description: '' });
  const [endDate] = useState('2025-08-31');
  const [loading, setLoading] = useState(true);
  const [addingExpense, setAddingExpense] = useState(false);
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [budgetInput, setBudgetInput] = useState<string>('');
  const [showAllExpenses, setShowAllExpenses] = useState(false);
  
  // Calculate remaining days
  const calculateRemainingDays = () => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  // Calculate total spent
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  // Calculate remaining money
  const remainingMoney = totalMoney - totalSpent;
  
  // Calculate daily spending target
  const remainingDays = calculateRemainingDays();
  const dailyTarget = remainingDays > 0 ? remainingMoney / remainingDays : 0;

  const calculateRecentDailyExpenditure = () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    const recentExpenses = expenses.filter(expense => 
      expense.date === today || expense.date === yesterday
    );
    
    const recentTotal = recentExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    return recentTotal / 2; // Average over 2 days
  };

  // Calculate budget percentage
  const budgetPercentage = totalMoney > 0 ? (totalSpent / totalMoney) * 100 : 0;
  const recentDailySpend = calculateRecentDailyExpenditure();
  const isOnTrack = recentDailySpend <= dailyTarget;

  const getRecentExpenses = () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    return expenses.filter(expense => 
      new Date(expense.date) >= sevenDaysAgo
    );
  };

  const displayedExpenses = showAllExpenses ? expenses : getRecentExpenses();
  const hiddenExpensesCount = expenses.length - displayedExpenses.length;

  // Load data from database on component mount
  useEffect(() => {
    fetchTrackerData();
  }, []);

  const fetchTrackerData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/expense-tracker');
      const data = await response.json();
      
      if (data.tracker) {
        setTotalMoney(data.tracker.totalMoney);
        setExpenses(data.expenses);
      }
    } catch (error) {
      console.error('Error fetching tracker data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBudget = async (newTotalMoney: number) => {
    try {
      const response = await fetch('/api/expense-tracker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalMoney: newTotalMoney,
          endDate: endDate,
        }),
      });

      if (response.ok) {
        const updatedTracker = await response.json();
        setTotalMoney(updatedTracker.totalMoney);
        setExpenses(updatedTracker.expenses);
      }
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  };

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.amount || !newExpense.description || addingExpense) return;

    try {
      setAddingExpense(true);
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(newExpense.amount),
          description: newExpense.description,
          date: new Date().toISOString().split('T')[0],
        }),
      });

      if (response.ok) {
        const newExpenseData = await response.json();
        setExpenses(prev => [newExpenseData, ...prev]);
        setNewExpense({ amount: '', description: '' });
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    } finally {
      setAddingExpense(false);
    }
  };

  const handleDeleteExpense = async (id: string) => {
    try {
      const response = await fetch(`/api/expenses/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setExpenses(prev => prev.filter(expense => expense.id !== id));
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const formatCurrency = (amount: number) => {
    return `€${amount.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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

        {/* Set Budget Button */}
        <div className="text-center mb-6">
          <Dialog open={budgetModalOpen} onOpenChange={setBudgetModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="px-8 py-3"
                onClick={() => setBudgetInput(totalMoney.toString())}
              >
                Set Total Budget
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Set Total Budget</DialogTitle>
              </DialogHeader>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const value = parseFloat(budgetInput);
                  if (!isNaN(value)) {
                    await handleUpdateBudget(value);
                    setBudgetModalOpen(false);
                  }
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="number"
                  value={budgetInput}
                  onChange={e => setBudgetInput(e.target.value)}
                  placeholder="Enter total money available"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  step="0.01"
                  required
                />
                <DialogFooter>
                  <Button type="submit" variant="default">
                    Save
                  </Button>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

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
                  isOnTrack ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 'bg-gradient-to-r from-rose-400 to-rose-500'
                }`}
                style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="text-center">
              <p className={`font-medium ${isOnTrack ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isOnTrack 
                  ? "You're on track! Your recent daily spending is within target." 
                  : `Warning: Your recent daily spending (${formatCurrency(recentDailySpend)}) exceeds your target (${formatCurrency(dailyTarget)})`
                }
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Based on your spending in the last 2 days
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Add Expense Form */}
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
                  onChange={(e) => setNewExpense(prev => ({ ...prev, amount: e.target.value }))}
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
                  onChange={(e) => setNewExpense(prev => ({ ...prev, description: e.target.value }))}
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

        {/* Expense History */}
        <Card>
          <CardHeader className="border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">📋</span>
                <CardTitle className="text-xl">Expense History</CardTitle>
              </div>
              {!showAllExpenses && hiddenExpensesCount > 0 && (
                <span className="text-sm text-gray-500">
                  Showing last 7 days • {hiddenExpensesCount} more {hiddenExpensesCount === 1 ? 'expense' : 'expenses'}
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
                    <div key={expense.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  ))}
                  {hiddenExpensesCount > 0 && !showAllExpenses && (
                    <div className="p-4 text-center">
                      <Button
                        onClick={() => setShowAllExpenses(true)}
                        variant="ghost"
                        className="font-medium"
                      >
                        Show All Expenses ({expenses.length} total)
                      </Button>
                    </div>
                  )}
                  {showAllExpenses && (
                    <div className="p-4 text-center">
                      <Button
                        onClick={() => setShowAllExpenses(false)}
                        variant="ghost"
                        className="font-medium"
                      >
                        Show Recent Expenses Only
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 