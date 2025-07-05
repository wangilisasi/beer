"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BudgetDialogProps {
  totalMoney: number;
  endDate: string;
}

export default function BudgetDialog({ totalMoney, endDate }: BudgetDialogProps) {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [budgetInput, setBudgetInput] = useState<string>(String(totalMoney));
  const router = useRouter();

  const handleUpdateBudget = async (newTotalMoney: number) => {
    await fetch("/api/expense-tracker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalMoney: newTotalMoney, endDate }),
    });
    router.refresh();
  };

  return (
    <div className="text-center mb-6">
      <Dialog open={budgetModalOpen} onOpenChange={setBudgetModalOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="px-8 py-3"
            onClick={() => {
              setBudgetInput(String(totalMoney));
              setBudgetModalOpen(true);
            }}
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
              onChange={(e) => setBudgetInput(e.target.value)}
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
  );
} 