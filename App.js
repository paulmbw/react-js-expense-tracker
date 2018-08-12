import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './src/styles/style.scss';
import 'normalize.css/normalize.css';

import AppRouter from './src/routers/AppRouter';
import configureStore from './src/store/configureStore';
import { startSetExpenses } from './src/actions/expenses';
import "react-dates/lib/css/_datepicker.css";

import './firebase/firebase';
import './playground/promises';

import { Provider } from 'react-redux';

const store = configureStore();

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

console.log('hello')

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(App, document.getElementById('app'));
})
