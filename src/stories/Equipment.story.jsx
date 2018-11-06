import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import Equipment from '../components/equipments';
import createStore from '../redux/store';

const store = createStore({
  data:
    {
    },
});

storiesOf('Equipment', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('Todo[VR]', () => <Equipment />);
