import React, { Component } from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { startCreateExpense } from '../actions/expenses';

export class CreateExpense extends Component {
  onSubmit = expense => {
    this.props.startCreateExpense(expense);
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
      Create Expense!
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startCreateExpense: expense => dispatch(startCreateExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
