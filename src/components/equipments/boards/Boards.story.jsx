import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../../../redux/store';
import Boards from './Boards';

const store = createStore({
  data:
    {
      boards: [
        {
          id: 1234, name: 'abcd', volume: 35, highTech: true, service: false, number: 34,
        },
      ],
    },
});


storiesOf('Story of Boards', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('with text', () => <Boards />);
