import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  employee: employeeReducer,
  filter: filterReducer
});
