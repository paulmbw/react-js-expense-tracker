import { createStore } from 'redux';

//Action generators
const incrementCount = ({ incrementBy = 1} = {}) => ({
	type: 'INCREMENT_COUNT',
	incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT_COUNT',
	decrementBy
})

const reset = ({ reset = 0} = {}) => ({
	type: 'RESET',
	reset
})

// const set = (payload = {}) => ({ 
// 	type: 'SET', 
// 	valueTo: typeof payload.valueTo === 'number' ? payload.valueTo : 0
// })

const set = ({ set = 0} = {}) => ({
	type: 'SET',
	set
})

//reducers
//1. redcures are pure functions -> the output is only deterimed by the input
//2. do not change the state or actio

const countReducer = createStore((state = { count: 0 }, action) => {	
	switch(action.type) {
		case 'INCREMENT_COUNT':
			return { count: state.count + action.incrementBy }
			break;
		case 'DECREMENT_COUNT':
			return { count: state.count - action.decrementBy  }
			break;
		case 'MULTIPLY_BY_200':
			return { count: state.count * 200  }
			break;
		case 'RESET':
			return { count: action.reset  }
			break;
		case 'SET':
			return { count: action.set }
			break;
		default: return state
	}
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount( {incrementBy: 50.1}));
store.dispatch(decrementCount( {decrementBy: 1000000} ));
store.dispatch(reset({reset: 999}));
store.dispatch(set({set: 85876}));
