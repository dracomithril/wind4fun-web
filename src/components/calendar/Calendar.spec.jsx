import { shallow } from 'enzyme/build';
import React from 'react';
import { CalendarContainer } from './Calendar';

it('should render component', () => {
  const wrapper = shallow(<CalendarContainer />);
  expect(wrapper).toMatchSnapshot();
});
