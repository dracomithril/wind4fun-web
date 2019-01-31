import React from 'react';
import { shallow } from 'enzyme';
import { BoardsTable } from './Boards';

it('should render component', () => {
  shallow(<BoardsTable />);
});
