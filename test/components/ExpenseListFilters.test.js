import React from 'react'
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../src/components/ExpenseListFilters';
import { defaultFilters, filters } from '../fixtures/filters';
import moment from 'moment'

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

describe('ExpenseListFilters', () => {
  beforeEach(() => {
      setTextFilterSpy = jest.fn();
      sortByDateSpy = jest.fn();
      sortByAmountSpy = jest.fn();
      setStartDateSpy = jest.fn();
      setEndDateSpy = jest.fn();
      wrapper = shallow(<ExpenseListFilters 
          filters={defaultFilters}
          setTextFilter={setTextFilterSpy}
          sortByDate={sortByDateSpy}
          sortByAmount={sortByAmountSpy}
          setStartDate={setStartDateSpy}
          setEndDate={setEndDateSpy}
      /> )
  })

  test('should render ExpenseListFilters', () => {
      expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with updated filters', () => {
      wrapper.setProps({
          filters: filters
      })
      expect(wrapper).toMatchSnapshot();
  });

  test('should handle onTextChange', () => {
      const value = 'hello'
      wrapper.find('input').simulate('change', {
          target: { value }
      });
      expect(setTextFilterSpy).toHaveBeenCalledWith(value);
  });

  test('should handle sortByDate', () => {
      const value = 'date'
      wrapper.find('select').simulate('change', {
          target: { value }
      });
      expect(sortByDateSpy).toHaveBeenCalled();
  });

  test('should handle sortByAmount', () => {
      const value = 'amount'
      wrapper.find('select').simulate('change', {
          target: { value }
      })
      expect(sortByAmountSpy).toHaveBeenCalled();
  });

  test('should handle onDatesChange', () => {
      const startDate = moment(0).add(5, 'years')
      const endDate = moment(0).add(10, 'years');
      wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
      expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
      expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
  });

  test('should handle onFocusChange startDate', () => {
      const calenderFocused = 'startDate'
      wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused);
      expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
  });
});