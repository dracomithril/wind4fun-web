import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../../redux/store';
import EmployeesTable from './EmployeesTable';

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


storiesOf('Components/Employee', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('with text', () => <EmployeesTable />);
