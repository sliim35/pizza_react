import { GET_EMPLOYEES } from './types';

export const getEployes = () => {
  fetch('employees.json')
    .then(res => {
      return res.json();
    })
    .then(res => {
      return {
        type: GET_EMPLOYEES,
        payload: res.data
      };
    });
};
