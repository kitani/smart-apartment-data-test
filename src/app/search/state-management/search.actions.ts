import { Action } from '../../state-management/models';
import { SearchProvider, SearchRequest } from '../models';

export enum SEARCH_ACTION_TYPES {
  SEARCH_REQUEST_ACTION = '[Search] request',
  SEARCH_SUCCESS_ACTION = '[Search] success',
}

export function makeSearchRequest(query: string, provider: SearchProvider): Action {
  return {
    type: SEARCH_ACTION_TYPES.SEARCH_REQUEST_ACTION,
    payload: { query, provider },
  };
}

export function searchRequestSuccess(result: any, request: SearchRequest): Action {
  return {
    type: SEARCH_ACTION_TYPES.SEARCH_SUCCESS_ACTION,
    payload: { result, request }
  };
}
