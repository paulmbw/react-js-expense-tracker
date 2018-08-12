import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../src/components/CreateExpense';

const expenses = [
    {
      id: "1",
      description: "hello world",
      note: "",
      amount: 1.95,
      createdAt: '1'
    },
    {
      id: "2",
      description: "hello javascript",
      note: "",
      amount: 4.44,
      createdAt: '2'
    },
    {
      id: "3",
      description: "hello scala",
      note: "",
      amount: 9.44,
      createdAt: '3'
    }
  ];

  describe('CreateExpense', () => {
    let wrapper;
    let startCreateExpenseSpy = jest.fn();
    let historySpy = { push: jest.fn() }

    beforeEach(() => {
        wrapper = shallow(<CreateExpense startCreateExpense={startCreateExpenseSpy} history={historySpy} /> );
    });
    
    test('should render CreateExpense component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should handle onSubmit', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
        expect(historySpy.push).toHaveBeenLastCalledWith('/');
        expect(startCreateExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
    });
  });