import { shallow } from 'enzyme/build';
import React from 'react';
import CreateNewEmployee from './CreateNewEmployee';

it('should render component', () => {
  const wrapper = shallow(<CreateNewEmployee />);
  expect(wrapper).toMatchSnapshot();
});

it('should react on creating new employee', () => {
  const createHandle = jest.fn();
  const wrapper = shallow(<CreateNewEmployee onCreate={createHandle} />);
  const button = wrapper.dive().find('#submitEmployee');
  button.simulate('click');
  expect(createHandle).toBeCalled();
});
