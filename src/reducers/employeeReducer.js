import { GET_EMPLOYEES } from '../actions/types';
import { GET_EMPLOYEE } from '../actions/types';
import { FILTER_EMPLOYEE } from '../actions/types';
import { UPDATE_EMPLOYEE } from '../actions/types';

const initialState = {
  employees: [],
  employee: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    case FILTER_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp =>
          emp.name.includes(action.payload)
        )
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(
          emp => (emp.id === action.payload.id ? (emp = action.payload) : emp)
        )
      };
    default:
      return state;
  }
}
