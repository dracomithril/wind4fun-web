import { combineReducers } from 'redux';
import dataReducer from './data';


const userReducer = (state = 'admin') => state;

export default combineReducers({ user: userReducer, data: dataReducer });
