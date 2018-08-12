import uuid from 'uuid';

import database from '../../firebase/firebase';

export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startCreateExpense = (expenseData = {}) => {
	return dispatch => {
		const {
			description = '', note = '', amount = 0, createdAt = 0
		} = expenseData;

		const expense = { description, note, amount, createdAt }
		
		return database.ref('expenses').push(expense).then(ref => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		});
	}
}

export const removeExpense = (id = '') => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense = (id = {}) => {
	return dispatch => {
		return database.ref(`expenses/${id}`).remove().then(() => {
			dispatch(removeExpense(id));
		})
	}
}	

export const editExpense = (uuid = '', expense = '') => ({
	type: 'EDIT_EXPENSE',
	uuid, 
	expense
});

export const setExpenses = expenses => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return dispatch => {
		return database.ref('expenses').once('value').then(snapshot => {
			const expenses = [];

			snapshot.forEach(childSnapshot => {
				expenses.push({
					id: childSnapshot.key,
					...childSnapshot.val(),
				});

				dispatch(setExpenses(expenses));
			})
		})
	}
}
