import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import ClientsTable from './ClientsTable';
import createStore from '../../redux/store';

const state = {
  data: {
    clients: [
      {
        firstName: 'Piotr',
        lastName: 'Kowalski',
        email: 'kozak@gmail.com',
        login: 'piotr.kowalski',
        group: [
          { name: 'Iza', id: 'piotr.kowalski:iza' },
          { name: 'Paulina', id: 'piotr.kowalski:paulina' },
          { name: 'Janek', id: 'piotr.kowalski:janek' },
        ],
      },
    ],
  },
};
const store = createStore(state);

storiesOf('Components/ClientsTable', module)
  .addDecorator(story => (
    <Provider store={store}>
      {story()}
    </Provider>
  ))
  .add('Todo[VR]', () => <ClientsTable />);
