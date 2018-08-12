import selectExpenses from "../../src/selectors/expenses";
import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "hello world",
    note: "",
    amount: 1.95,
    createdAt: moment(0).add(10, "years")
  },
  {
    id: "2",
    description: "hello javascript",
    note: "",
    amount: 4.44,
    createdAt: moment(0).add(20, "years")
  },
  {
    id: "3",
    description: "hello scala",
    note: "",
    amount: 9.44,
    createdAt: moment(0).add(30, "years")
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "java",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(1),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(15, "years")
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0]]);
});

test('should filter by date', () => {
    const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})

test('should filter by amount', () => {
      const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})