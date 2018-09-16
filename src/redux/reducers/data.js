import { combineReducers } from 'redux';
import { ADD_NEW_TRAINER } from '../actions/action_types';


const trainers = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_TRAINER: {
      return [...store, action.value];
    }
    default:
      return store;
  }
};

export default combineReducers({ trainers });
