import { Observable } from 'rxjs';
import { InitialSearchState, SearchRequest, SearchState } from '../../search/models';

export interface Action {
  type: string;
  payload?: any;
}

export interface Effect {
  (action: Action): Observable<Action[]>;
}

export interface ReducerFn<T> {
  (action: Action, state: T): T;
}

export interface KeyedReducerFn<T> {
  reducer: ReducerFn<T>;
  key: string;
}

export interface State {
  search: SearchState;
}

export const initialState: State = {
  search: InitialSearchState,
};
