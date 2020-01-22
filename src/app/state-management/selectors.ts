import { State } from './models';
import { SearchState } from '../search/models';
import searchSelectors from '../search/state-management/search.selectors';
import { AuthState } from '../auth/models';

export const searchStateSelector = (state: State): SearchState => state.search;

export const lastSearchResultsSelector = (state: State) => searchSelectors.searchResultsSelector(searchStateSelector(state));
export const lastSearchRequestSelector = (state: State) => searchSelectors.searchRequestSelector(searchStateSelector(state));

export const authStateSelector = (state: State): AuthState => state.auth;
