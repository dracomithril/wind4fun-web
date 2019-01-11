import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CreateNewBoard from './CreateNewBoard';

const employee = {
  id: 34,
  name: 'eclipse',
  volume: 30,
  number: 50,
  highTech: true,
  service: false,
};

storiesOf('Story of CreateNewBoard', module)
  .add('with text', () => <CreateNewBoard onCreate={action('onCreateBoard')} />)
  .add('with default value', () => <CreateNewBoard value={employee} onCreate={action('onCreateBoard')} />);
