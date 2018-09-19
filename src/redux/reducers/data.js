import { combineReducers } from 'redux';
import { ADD_NEW_TRAINER, DELETE_TRAINER } from '../actions/action_types';

const trainers = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_TRAINER: {
      return [...store, action.value];
    }
    case DELETE_TRAINER: {
      return store.filter(f => f.login !== action.value);
    }
    default:
      return store;
  }
};
const equipments = (store = [], action) => {
  switch (action.type) {
    default:
      return store;
  }
};

export default combineReducers({ trainers, equipments });
