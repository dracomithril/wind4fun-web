import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Calendar from './Calendar';
import configureStore from '../../redux/store';

const state = {};
const store = configureStore(state);

storiesOf('Calendar', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('Todo[VR]', () => <Calendar />);
