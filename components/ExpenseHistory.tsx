"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState<ExpenseEntry | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDeleteExpense = async (expense: ExpenseEntry) => {
    setExpenseToDelete(expense);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!expenseToDelete) return;
    
    setIsDeleting(true);
    try {
      await fetch(`/api/expenses/${expenseToDelete.id}`, { method: "DELETE" });
      router.refresh();
      setDeleteDialogOpen(false);
      setExpenseToDelete(null);
    } catch (error) {
      console.error('Error deleting expense:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const getRecentExpenses = () => {
    // const sevenDaysAgo = new Date();
    // sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    // return expenses.filter((expense) => new Date(expense.date) >= sevenDaysAgo);

    const fiveLastExpenses = expenses.slice(0, 5);
    return fiveLastExpenses;

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
    <>
      <Card>
        <CardHeader className="border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              <CardTitle className="text-xl">Expense History</CardTitle>
            </div>
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
                        onClick={() => handleDeleteExpense(expense)}
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Expense</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete this expense?
            </p>
            {expenseToDelete && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{expenseToDelete.description}</p>
                    <p className="text-sm text-gray-500">{formatDate(expenseToDelete.date)}</p>
                  </div>
                  <span className="text-lg font-bold text-red-600">
                    {formatCurrency(expenseToDelete.amount)}
                  </span>
                </div>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-4">
              This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={isDeleting}>
                Cancel
              </Button>
            </DialogClose>
            <Button 
              onClick={confirmDelete} 
              variant="destructive" 
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
} 