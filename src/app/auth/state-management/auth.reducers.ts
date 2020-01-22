import { AuthState } from '../models';
import { ReducerFn } from '../../state-management/models';
import { AUTH_ACTION_TYPES } from './auth.actions';

const signInRequest: ReducerFn<AuthState> = (action, state) => {
  if (action.type !== AUTH_ACTION_TYPES.SIGN_IN_START) {
    return state;
  }

  return {
    ...state,
    loading: true,
    login: action.payload.login
  };
};

const signInRequestSuccess: ReducerFn<AuthState> = (action, state) => {
  if (action.type !== AUTH_ACTION_TYPES.SIGN_IN_SUCCESS) {
    return state;
  }

  return {
    ...state,
    loading: false,
    user: action.payload,
  };
};

export const authReducers: ReducerFn<AuthState>[] = [
  signInRequest,
  signInRequestSuccess,
];
