import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import createStore from './redux/store';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
import './App.css';


const App = () => (
  <div className="App">
    <CssBaseline />
    <Provider store={createStore()}>
      <Navigation />
    </Provider>
    <Footer />
  </div>
);

export default App;
