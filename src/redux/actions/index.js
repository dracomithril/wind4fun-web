import {
  ADD_NEW_EMPLOYEE,
  DELETE_EMPLOYEE,
  ADD_NEW_BOARD,
  DELETE_BOARD,
} from './action_types';

export const createNewEmployee = trainer => ({ type: ADD_NEW_EMPLOYEE, value: trainer });
export const deleteEmployee = login => ({ type: DELETE_EMPLOYEE, value: login });
export const deleteBoard = id => ({ type: DELETE_BOARD, value: id });
export const createNewBoard = board => ({ type: ADD_NEW_BOARD, value: board });
