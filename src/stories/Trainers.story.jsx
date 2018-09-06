import React from 'react';

import {storiesOf} from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../redux/store';

const store = createStore({
  data:
    {
      trainers:[
      {
        id:1,
        login:'pkowalski',
        nickname:'kozak',
        firstName:'Piotr',
        surname:'Kowalski'}
      ]
    }
});

import Trainers from '../components/Trainers';

storiesOf('Story of Trainers', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with text', () => <Trainers/>);
