import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpense extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  
  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id });
    this.props.history.push('/');
  }

   render() {
     return (
        <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
           Remove
        </button>
      </div>
     )
   }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: id => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
