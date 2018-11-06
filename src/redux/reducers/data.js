import { combineReducers } from 'redux';
import {
  ADD_NEW_EMPLOYEE, DELETE_EMPLOYEE, DELETE_BOARD, ADD_NEW_BOARD,
} from '../actions/action_types';

const employees = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_EMPLOYEE: {
      return [...store, action.value];
    }
    case DELETE_EMPLOYEE: {
      return store.filter(f => f.login !== action.value);
    }
    default:
      return store;
  }
};
const boards = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_BOARD: {
      return [...store, action.value];
    }
    case DELETE_BOARD: {
      return store.filter(f => f.id !== action.value);
    }
    default:
      return store;
  }
};

export default combineReducers({ employees, boards });
