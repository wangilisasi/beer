import { db } from "@/prisma";

export interface ExpenseEntry {
  id: string;
  date: string;
  amount: number;
  description: string;
}

export interface TrackerData {
  totalMoney: number;
  endDate: string;
  expenses: ExpenseEntry[];
  hasTracker: boolean;
}

export interface ComputedStats {
  remainingDays: number;
  totalSpent: number;
  remainingMoney: number;
  dailyTarget: number;
  recentDailySpend: number;
  todaySpend: number;
  yesterdaySpend: number;
  isOnTrack: boolean;
  budgetPercentage: number;
}

export interface TrackerStats {
  data: TrackerData;
  stats: ComputedStats;
}

export function computeStats(data: TrackerData): ComputedStats {
  const { totalMoney, endDate, expenses } = data;
  const today = new Date();
  const end = new Date(endDate);
  const remainingDays = Math.max(0, Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingMoney = totalMoney - totalSpent;
  const dailyTarget = remainingDays > 0 ? remainingMoney / remainingDays : 0;

  const todayStr = today.toISOString().split("T")[0];
  const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const todaySpend = expenses.filter(expense => expense.date === todayStr).reduce((sum, expense) => sum + expense.amount, 0);
  const yesterdaySpend = expenses.filter(expense => expense.date === yesterdayStr).reduce((sum, expense) => sum + expense.amount, 0);

  const recentExpenses = expenses.filter(
    (expense) => expense.date === todayStr || expense.date === yesterdayStr
  );
  const recentTotal = recentExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const recentDailySpend = recentTotal / 2; // Average over 2 days

  const isOnTrack = recentDailySpend <= dailyTarget;
  const budgetPercentage = totalMoney > 0 ? (totalSpent / totalMoney) * 100 : 0;

  return {
    remainingDays,
    totalSpent,
    remainingMoney,
    dailyTarget,
    recentDailySpend,
    isOnTrack,
    budgetPercentage,
    todaySpend,
    yesterdaySpend,
  };
}

export async function getTrackerData(userId: string): Promise<TrackerData> {
  const tracker = await db.expenseTracker.findFirst({
    where: { userId },
    include: {
      expenses: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return {
    hasTracker: tracker !== null,
    totalMoney: tracker?.totalMoney ?? 0,
    endDate: tracker?.endDate ?? "2025-08-31",
    expenses: (tracker?.expenses ?? []) as ExpenseEntry[],
  };
}

export async function getTrackerStats(userId: string): Promise<TrackerStats> {
  const data = await getTrackerData(userId);
  const stats = computeStats(data);
  
  return { data, stats };
} 