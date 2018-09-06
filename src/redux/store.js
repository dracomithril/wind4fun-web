import {
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({});

export default initState => createStore(
  rootReducer,
  initState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
