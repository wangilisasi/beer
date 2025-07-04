"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
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
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [budgetInput, setBudgetInput] = useState<string>('');
  
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
    if (!newExpense.amount || !newExpense.description) return;

    try {
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
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracker</h1>
        
        {/* Period Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Period Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Start Date:</span>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <span className="text-gray-600">End Date:</span>
              <p className="font-medium">{new Date(endDate).toLocaleDateString()}</p>
            </div>
            <div>
              <span className="text-gray-600">Days Remaining:</span>
              <p className="font-medium">{remainingDays} days</p>
            </div>
          </div>
        </div>

        {/* Total Money Input */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
        
          <Dialog open={budgetModalOpen} onOpenChange={setBudgetModalOpen}>
            <DialogTrigger asChild>
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setBudgetInput(totalMoney.toString())}
              >
                Set Total Budget
              </button>
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
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium text-gray-600">Total Budget</h3>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(totalMoney)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium text-gray-600">Total Spent</h3>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(totalSpent)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium text-gray-600">Remaining</h3>
            <p className={`text-2xl font-bold ${remainingMoney >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
              {formatCurrency(remainingMoney)}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
            <h3 className="text-sm font-medium text-gray-600">Daily Target</h3>
            <p className={`text-2xl font-bold ${dailyTarget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(dailyTarget)}
            </p>
          </div>
        </div>

        {/* Add Expense Form */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add Today&apos;s Expense</h2>
          <form onSubmit={handleAddExpense} className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              value={newExpense.amount}
              onChange={(e) => setNewExpense(prev => ({ ...prev, amount: e.target.value }))}
              placeholder="Amount"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              step="0.01"
              required
            />
            <input
              type="text"
              value={newExpense.description}
              onChange={(e) => setNewExpense(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Description"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </form>
        </div>

        {/* Expenses List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Expense History</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {expenses.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No expenses recorded yet. Add your first expense above!
              </div>
            ) : (
              expenses.map((expense) => (
                <div key={expense.id} className="p-6 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{expense.description}</p>
                    <p className="text-sm text-gray-600">{expense.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-red-600">
                      {formatCurrency(expense.amount)}
                    </span>
                    <button
                      onClick={() => handleDeleteExpense(expense.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 