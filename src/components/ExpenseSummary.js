import React from "react";
import { connect } from "react-redux";
import currency from 'format-currency';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedCurrency = currency(expenseTotal / 100);
  return ( 
    <p>
      Viewing {expenseCount} {expenseWord} totalling ${formattedCurrency}
    </p>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  console.log('visibleExpenses: ', visibleExpenses);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};


export default connect(mapStateToProps)(ExpenseSummary);