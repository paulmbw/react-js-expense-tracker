import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../src/components/ExpenseForm';
import { wrap } from 'module';

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

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('Please enter a description or an amount');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note!';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
    const value = '45.00';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on input change', () => {
    const value = '45.0000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid from submission', () => {
  const expense = {"amount": 1.95, "createdAt": 978307200000, "description": "hello world", "note": ""};
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe(undefined);
  expect(onSubmitSpy).toHaveBeenCalledWith(expense);
});