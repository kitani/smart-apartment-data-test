import { Action } from '../../state-management/models';
import { SearchProvider } from './index';

export enum SEARCH_ACTION_TYPES {
  SEARCH_REQUEST_ACTION = '[Search] request action'
}

export function makeSearchRequest(query: string, provider: SearchProvider): Action {
  return {
    type: SEARCH_ACTION_TYPES.SEARCH_REQUEST_ACTION,
    payload: {query, provider},
  };
}
