import React from 'react';
import { shallow } from 'enzyme';
import ExpenseLisItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseLisItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});