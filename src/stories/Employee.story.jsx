import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../redux/store';
import Employee from '../components/employee';

const store = createStore({
  data:
    {
      employees: [
        {
          login: 'piotr.kowalski',
          firstName: 'Piotr',
          lastName: 'Kowalski',
          email: 'kozak@gmail.com',
          employeeType: 'trainer',
        },
      ],
    },
});


storiesOf('Story of Employee', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('with text', () => <Employee />);
