import React from 'react';
import { shallow } from 'enzyme'
import Header from '../../src/components/Header';

test('should render Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Dashboard NavLink', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').at(0).children().text()).toBe('Dashboard')
});

test('should render Create Expense NavLink', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('NavLink').at(1).children().text()).toBe('Create Expense')
});