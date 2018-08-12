import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../src/components/ExpenseList'
import { ExpenseItem } from '../../src/components/ExpenseItem';

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

test('it should render ExpenseList component', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});