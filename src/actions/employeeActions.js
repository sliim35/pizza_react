import { GET_EMPLOYEES } from './types';
import { GET_EMPLOYEE } from './types';
import { CHANGE_EMPLOYEE } from './types';
import { employees } from '../employees';

export const getEmployees = () => {
  return {
    type: GET_EMPLOYEES,
    payload: employees
  };
};

export const saveEmployee = employee => {
  return {
    type: GET_EMPLOYEE,
    payload: employee
  };
};

export const changeEmployee = query => {
  return {
    type: CHANGE_EMPLOYEE,
    payload: query
  };
};
