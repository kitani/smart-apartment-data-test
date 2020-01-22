export interface Credentials {
  login: string;
  password: string;
}

export interface AuthState {
  login: string;
  loading: boolean;
  user: any;
}

export const InitialAuthState: AuthState = {
  login: null,
  loading: false,
  user: {},
};
