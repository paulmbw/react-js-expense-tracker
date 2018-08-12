import {
  addExpense,
  editExpense,
  removeExpense,
  startCreateExpense,
  setExpenses
} from "../../src/actions/expenses.js";
import uuid from "uuid/v4";

import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../firebase/firebase';

const createMockStore = mockStore([thunk]);

beforeEach(() => {
  const expensesData = {};
  database.ret('expenses').set({expenses})
})

describe("expense actions", () => {
  it('should call addExpense with "ADD_EXPENSE" and "expense" payload', () => {
    const expenseData = {
      description: "test",
      note: "",
      amount: "44",
      createdAt: "2312213"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: expenseData
    });
  });

  it('should add expnese to database and store', done => {
    const store = createMockStore({});
    const expenseData = {
      description: "test",
      note: "",
      amount: "44",
      createdAt: "2312213"
    };

    store.dispatch(startCreateExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });

  it('should add expnese with default values to database and store', done => {
    const store = createMockStore({});
    const expenseDefaults = { description: "", note: "", amount: 0, createdAt: 0 };

    store.dispatch(startCreateExpense()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
  });

  it('should call editExpense with "EDIT_EXPENSE", "uuid" and "expense" payload', () => {
    const expenseUuid = uuid();
    const expense = {
      uuid: expenseUuid,
      description: "test",
      amount: "44",
      createdAt: "2312213"
    };
    const action = editExpense(expenseUuid, expense);
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      uuid: expenseUuid,
      expense
    });
  });

  it('should call removeExpense with "REMOVE_EXPENSE" and "uuid" payload', () => {
    const expenseUUID = uuid();
    const action = removeExpense(expenseUUID);
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      uuid: expenseUUID
    });
  });
});
