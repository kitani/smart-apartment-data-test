import { ReducerFn } from '../../state-management/models';
import { SEARCH_ACTION_TYPES } from './search.actions';
import { SearchState } from '../models';

const newSearchRequest: ReducerFn<SearchState> = (action, state) => {
  if (action.type !== SEARCH_ACTION_TYPES.SEARCH_REQUEST_ACTION) {
    return state;
  }

  return {
    ...state,
    lastSearch: action.payload,
  };
};

const searchResultsReceived: ReducerFn<SearchState> = (action, state) => {
  if (action.type !== SEARCH_ACTION_TYPES.SEARCH_SUCCESS_ACTION) {
    return state;
  }

  return {
    ...state,
    searchResults: action.payload,
  };
};

export const searchReducers: ReducerFn<SearchState>[] = [
  newSearchRequest,
  searchResultsReceived,
];
