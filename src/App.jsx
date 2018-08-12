import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import './App.css';
import UserInfo from './components/UserInfo';
import MenuBar from './components/MenuBar';

const App = () => (
  <Provider store={createStore()}>
    <div>
      <MenuBar />
      <UserInfo />
    </div>
  </Provider>
);

export default App;
