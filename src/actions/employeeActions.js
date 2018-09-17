import { GET_EMPLOYEES } from './types';
import axios from 'axios';

export const getEmployees = () => async dispatch => {
  const res = await axios.get('../employees.json');

  dispatch({
    type: GET_EMPLOYEES,
    payload: res.data
  });
};
