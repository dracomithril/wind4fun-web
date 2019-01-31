import { shallow } from 'enzyme/build';
import React from 'react';
import { UserInfo } from './UserInfo';

it('should render component', () => {
  shallow(<UserInfo />);
});
