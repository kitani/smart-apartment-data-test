import { State } from './models';
import { SearchState } from '../search/models';

const searchSelector = (state: State): SearchState => state.search;
