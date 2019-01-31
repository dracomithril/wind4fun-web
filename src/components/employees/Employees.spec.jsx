import { shallow } from 'enzyme/build';
import React from 'react';
import { EmployeesTable } from './Employees';

it('should render component', () => {
  const wrapper = shallow(<EmployeesTable employees={[]} />);
  expect(wrapper).toMatchSnapshot();
});
