import { SEARCH_QUERY } from './types';

export const getSearchQuery = query => {
  return {
    type: SEARCH_QUERY,
    payload: query
  };
};
