import { SearchState } from '../models';

const searchRequestSelector = (state: SearchState) => state.lastSearch;
const searchResultsSelector = (state: SearchState) => state.searchResults;

export default { searchRequestSelector, searchResultsSelector };
