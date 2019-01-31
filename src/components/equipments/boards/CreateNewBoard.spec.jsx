import React from 'react';
import { shallow } from 'enzyme';
import CreateNewBoard from './CreateNewBoard';

it('should render component', () => {
  shallow(<CreateNewBoard />);
});
