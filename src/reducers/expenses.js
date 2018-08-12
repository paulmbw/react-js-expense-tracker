const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {
	switch(action.type){
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return [...state.filter(({ uuid }) => { return uuid !== action.uuid})]
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if(expense.uuid === action.uuid) {
					return {
						...expense,
						...action.expense
					}
				} else {
					return expense;
				}
			});
			case 'SET_EXPENSES':
				return action.expenses;
		default: return state;
	}
}