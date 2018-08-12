import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Navigation from './components/navigation/Navigation';
import './App.css';


const App = () => (
  <div className="App">
    <Provider store={createStore()}>
      <Navigation />
    </Provider>
  </div>
);

export default App;
