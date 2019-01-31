import { shallow } from 'enzyme/build';
import React from 'react';
import { ClientsTable } from './Clients';

it('should render component', () => {
  const wrapper = shallow(<ClientsTable clients={[]} />);
  expect(wrapper).toMatchSnapshot();
});
