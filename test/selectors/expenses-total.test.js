import selectExpensesTotal from '../../src/selectors/expenses-total';
import moment from 'moment';

const expenses = [
    {
        uuid: "1",
        description: "Hello Worl Shirt",
        note: "",
        amount: 22.15,
        createdAt: 0
      },
      {
        uuid: "2",
        description: "Laptop",
        note: "",
        amount: 2500,
        createdAt: moment(0).add(22, 'days').valueOf(),
      },
      {
        uuid: "3",
        description: "Cranberry Green Tea",
        note: "",
        amount: 45,
        createdAt: moment(0).subtract(12, 'days').valueOf(),
      }
];

test('should return correct total of expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(2567.15);
});

test('should return 0 if no expenses provided', () => {
    const total = selectExpensesTotal([]);
    expect(total).toEqual(0);
});

test('should return expense if single expense provided', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toEqual(22.15);
});