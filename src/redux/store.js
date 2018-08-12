import {
  applyMiddleware, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export default initState => createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk),
);
