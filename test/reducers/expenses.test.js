import expensesReducer from '../../src/reducers/expenses';
import uuid from 'uuid';
import moment from 'moment';

const expenses = [
    {
        uuid: '1',
		description: 'Rent',
		note: '', 
		amount: 88, 
		createdAt: '1'
    }
]

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should add expense', () => {
    const expense = {
        uuid: uuid(),
		description: 'Phone bill',
		note: '', 
		amount: 44, 
		createdAt: moment()
    }

    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        uuid: expenses[0].uuid
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        uuid: '213123'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE', 
        uuid: '1',
        expense: {
            description: 'Phone Bill via Vodafone',
            note: 'Contract 24 months',
            amount: 55,
        }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe(action.expense.description);
    expect(state[0].note).toBe(action.expense.note);
    expect(state[0].amount).toBe(action.expense.amount);
});

test('should not edit expense if id does not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE', 
        uuid: '3423432432',
        expense: {
            uuid: '1',
            description: 'Phone Bill via Vodafone',
            note: 'Contract 24 months',
            amount: 55,
            createdAt: '1'
        }
    }
    
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses]);
});