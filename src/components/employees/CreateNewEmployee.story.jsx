import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CreateNewEmployee from './CreateNewEmployee';

const employee = {
  login: 'pkowalski',
  firstName: 'Piotr',
  lastName: 'Kowalski',
  email: 'kozak@gmail.com',
  employeeType: 'trainer',
};

storiesOf('Story of CreateNewEmployee', module)
  .add('with text', () => <CreateNewEmployee onCreate={action('onCreateEmployee')} />)
  .add('with default value', () => <CreateNewEmployee value={employee} onCreate={action('onCreateEmployee')} />);
