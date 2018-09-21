import { SEARCH_QUERY } from '../actions/types';

const initialState = {
  query: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        state: action.payload
      };
    default:
      return state;
  }
}
