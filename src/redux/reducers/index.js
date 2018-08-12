import { combineReducers } from 'redux';


const userReducer = (state = 'admin') => state;


export default combineReducers({ user: userReducer });
