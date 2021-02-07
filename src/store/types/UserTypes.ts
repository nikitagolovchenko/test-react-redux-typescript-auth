export interface UserState {
  loading: boolean;
  authorized: boolean;
  error: null | string;
}

export enum UserActionTypes {
  USER_REQUEST = 'USER_REQUEST',
  USER_ERROR = 'USER_ERROR',
  USER_SIGN_UP = 'USER_SIGN_UP',
  USER_SIGN_IN = 'USER_SIGN_IN',
  USER_SIGN_OUT = 'USER_SIGN_OUT',
}

interface UserRequest {
  type: UserActionTypes.USER_REQUEST;
}

interface UserError {
  type: UserActionTypes.USER_ERROR;
  payload: string;
}

interface UserSignUp {
  type: UserActionTypes.USER_SIGN_UP;
}

interface UserSignIn {
  type: UserActionTypes.USER_SIGN_IN;
}

interface UserSignOut {
  type: UserActionTypes.USER_SIGN_OUT;
}

export type UserAction =
  | UserRequest
  | UserError
  | UserSignUp
  | UserSignIn
  | UserSignOut;
