import { GET_EMPLOYEES } from './types';
import { GET_EMPLOYEE } from './types';
import { FILTER_EMPLOYEE } from './types';
import { UPDATE_EMPLOYEE } from './types';
import axios from 'axios';

export const getEmployees = () => async dispatch => {
  const res = await axios.get('../employees.json').then(res => res.data);
  dispatch({
    type: GET_EMPLOYEES,
    payload: res
  });
};

export const saveEmployee = employee => {
  return {
    type: GET_EMPLOYEE,
    payload: employee
  };
};

export const filterEmployee = query => {
  return {
    type: FILTER_EMPLOYEE,
    payload: query
  };
};

export const updateEmployee = employee => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: employee
  };
};
