import { Credentials } from '../models';
import { Action } from '../../state-management/models';

export enum AUTH_ACTION_TYPES {
  SIGN_IN_START= '[AUTH] sign in start',
  SIGN_IN_SUCCESS= '[AUTH] sign in success',
}

export function signInStart(credentials: Credentials): Action {
  return {
    type: AUTH_ACTION_TYPES.SIGN_IN_START,
    payload: credentials,
  };
}

export function signInSuccess(data: any): Action {
  return {
    type: AUTH_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: data,
  };
}
