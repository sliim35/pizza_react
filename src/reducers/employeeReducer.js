import { GET_EMPLOYEES } from '../actions/types';
import { GET_EMPLOYEE } from '../actions/types';
import { CHANGE_EMPLOYEE } from '../actions/types';

const initialState = {
  employees: [],
  employee: {},
  filteredEmployees: []
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
    case CHANGE_EMPLOYEE:
      const employees = state.employees.filter(emp =>
        emp.name.includes(action.payload)
      );
      return {
        ...state,
        employees
      };
    default:
      return state;
  }
}
