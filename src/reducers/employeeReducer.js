import { GET_EMPLOYEES } from '../actions/types';
import { GET_EMPLOYEE } from '../actions/types';
import { CHANGE_EMPLOYEE } from '../actions/types';

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
    case CHANGE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp =>
          emp.name.toLowerCase().match(action.payload)
        )
      };
    default:
      return state;
  }
}
