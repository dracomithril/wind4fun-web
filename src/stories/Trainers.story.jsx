import React from 'react';

import {storiesOf} from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../redux/store';
import Trainers from '../components/trainers';

const store = createStore({
  data:
    {
      trainers:[
      {
        login:'pkowalski',
        nickname:'kozak',
        firstName:'Piotr',
        surname:'Kowalski'}
      ]
    }
});


storiesOf('Story of Trainers', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with text', () => <Trainers/>);
