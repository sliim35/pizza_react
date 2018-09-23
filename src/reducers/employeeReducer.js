import { GET_EMPLOYEES } from '../actions/types';
import { GET_EMPLOYEE } from '../actions/types';
import { FILTER_EMPLOYEE } from '../actions/types';

const initialState = {
  employees: [],
  initialEmployees: [],
  employee: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        initialEmployees: action.payload
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      };
    case FILTER_EMPLOYEE:
      return {
        ...state,
        employees: state.initialEmployees.filter(emp =>
          emp.name.includes(action.payload)
        )
      };
    default:
      return state;
  }
}
