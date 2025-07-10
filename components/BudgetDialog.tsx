"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BudgetDialogProps {
  totalMoney: number;
  startDate: string;
  endDate: string;
  children: React.ReactNode;
}

export default function BudgetDialog({ totalMoney, startDate, endDate, children }: BudgetDialogProps) {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [budgetInput, setBudgetInput] = useState<string>(String(totalMoney));
  const [startDateInput, setStartDateInput] = useState<string>(startDate);
  const [endDateInput, setEndDateInput] = useState<string>(endDate);
  const router = useRouter();

  const handleUpdateBudget = async (newTotalMoney: number) => {
    await fetch("/api/expense-tracker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalMoney: newTotalMoney, startDate: startDateInput, endDate: endDateInput }),
    });
    router.refresh();
  };

  return (
    <Dialog open={budgetModalOpen} onOpenChange={setBudgetModalOpen}>
      <DialogTrigger asChild>
        <div
          onClick={() => {
            setBudgetInput(String(totalMoney));
            setStartDateInput(startDate);
            setEndDateInput(endDate);
            setBudgetModalOpen(true);
          }}
        >
          {children}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Budget</DialogTitle>
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
            onChange={(e) => setBudgetInput(e.target.value)}
            placeholder="Enter total money available"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            step="0.01"
            required
          />
          <input
            type="date"
            value={startDateInput}
            onChange={(e) => setStartDateInput(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <input
            type="date"
            value={endDateInput}
            onChange={(e) => setEndDateInput(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
  );
} 