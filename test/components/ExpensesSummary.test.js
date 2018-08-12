import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../src/components/ExpenseSummary';

test('it should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={200}/>);
    expect(wrapper).toMatchSnapshot();
});

test('it should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expenseTotal={200}/>);
    expect(wrapper).toMatchSnapshot();
});