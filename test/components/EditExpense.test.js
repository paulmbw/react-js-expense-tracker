import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../src/components/EditExpense';

const expenses = [
    {
      uuid: "1",
      description: "hello world",
      note: "",
      amount: 1.95,
      createdAt: '1'
    }
];

describe('EditExpense', () => {
  let wrapper;
  let editExpenseSpy = jest.fn();
  let removeExpenseSpy = jest.fn();
  let historySpy = { push: jest.fn() }

  beforeEach(() => {
    wrapper = shallow(<EditExpense 
      history={historySpy}
      editExpense={editExpenseSpy} 
      removeExpense={removeExpenseSpy} 
      expense={expenses[0]}
    /> );
      
  });

  test('should render EditExpense component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[0].uuid, expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
  });

  test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalledWith(expenses[0].uuid)
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
  });
})

