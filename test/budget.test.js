import { BudgetService, Budget } from "../src/budget";

describe("Budget", () => {
  it("Budget amount with same date", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "310"),
        new Budget("202402", "580"),
        new Budget("202403", "310"),
        new Budget("202404", "300"),
        new Budget("202405", "310"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 0, 1), new Date(2024, 0, 1))
    ).toBe(10 * 1);
  });
  it("Budget amount within a month", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "310"),
        new Budget("202402", "580"),
        new Budget("202403", "310"),
        new Budget("202404", "300"),
        new Budget("202405", "310"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 0, 1), new Date(2024, 0, 2))
    ).toBe(10 * 2);
  });
  it("Budget amount with two month", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "6200"),
        new Budget("202402", "2900"),
        new Budget("202403", "3100"),
        new Budget("202404", "3000"),
        new Budget("202405", "3100"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 0, 29), new Date(2024, 1, 2))
    ).toBe(200 * 3 + 100 * 2);
  });
  it("Budget amount with three month", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "620"),
        new Budget("202402", "290"),
        new Budget("202403", "310"),
        new Budget("202404", "300"),
        new Budget("202405", "310"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 0, 29), new Date(2024, 3, 2))
    ).toBe(20 * 3 + 290 + 310 + 10 * 2);
  });
  it("Budget amount with no budget", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "620"),
        new Budget("202402", "290"),
        new Budget("202403", "310"),
        new Budget("202404", "300"),
        new Budget("202405", "310"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 5, 29), new Date(2024, 5, 30))
    ).toBe(0);
  });
  it("Budget amount with empty data", () => {
    const budgetService = new BudgetService();
    budgetService.getAll = () => {
      return [
        new Budget("202401", "620"),
        new Budget("202402", "290"),
        new Budget("202403", "310"),
        new Budget("202404", "300"),
        new Budget("202405", "310"),
        new Budget("202406", "0"),
      ];
    };
    expect(
      budgetService.query(new Date(2024, 5, 29), new Date(2024, 8, 30))
    ).toBe(0);
  });
});
