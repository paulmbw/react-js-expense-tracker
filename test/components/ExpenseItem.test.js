import React from 'react';
import { shallow } from 'enzyme';
import ExpenseItem from '../../src/components/ExpenseItem';

const expense = {
    uuid: "1",
    description: "hello world !",
    amount: 45,      
    createdAt: '1'
}

test('should render ExpenseList component', () => {
    const wrapper = shallow(<ExpenseItem {...expense} />);
    expect(wrapper).toMatchSnapshot();
});