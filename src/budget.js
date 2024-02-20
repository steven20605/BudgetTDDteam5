//import { Dayjs } from "dayjs";
const dayjs = require("dayjs");

export class BudgetService {
  constructor() {}
  query(start, end) {
    this.data = this.getAll();
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    // same month
    if (startDate.isSame(endDate, "month")) {
      const days = endDate.diff(startDate, "day") + 1;
      const monthYear = startDate.format("YYYYMM");
      const budgetAmount = this.getBudgetByMonth(monthYear);
      return days * (budgetAmount / startDate.daysInMonth());
    } else {
      const startDays = startDate.endOf("month").diff(startDate, "day") + 1;
      const endDays = endDate.diff(endDate.startOf("month"), "day") + 1;
      const startBudgetAmount = this.getBudgetByMonth(
        startDate.format("YYYYMM")
      );
      const endBudgetAmount = this.getBudgetByMonth(endDate.format("YYYYMM"));
      let middleBudgetAmount = 0;
      for (
        let i = startDate.add(1, "month");
        i.isBefore(endDate);
        i = i.add(1, "month")
      ) {
        middleBudgetAmount += Number(this.getBudgetByMonth(i.format("YYYYMM")));
      }
      const sum =
        startDays * (startBudgetAmount / startDate.daysInMonth()) +
        middleBudgetAmount +
        endDays * (endBudgetAmount / endDate.daysInMonth());
      return sum;
    }
  }
  getBudgetByMonth(yearMonth) {
    const budget = this.data.filter((m) => m?.yearMonth === yearMonth).pop();
    return budget ? budget.amount : 0;
  }

  getAll() {}
}

class BudgetRepo {}

export class Budget {
  constructor(yearMonth, amount) {
    this.yearMonth = yearMonth;
    this.amount = amount;
  }
}
