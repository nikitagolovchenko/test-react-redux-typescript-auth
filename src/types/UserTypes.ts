import { UserInfo } from './LoginTypes';

export interface UserState {
  loading: boolean;
  authorized: boolean;
  error: null | string;
  user: null | UserInfo;
}

export enum UserActionTypes {
  USER_REQUEST = 'USER_REQUEST',
  USER_ERROR = 'USER_ERROR',
  USER_SIGN_UP = 'USER_SIGN_UP',
  USER_SIGN_IN = 'USER_SIGN_IN',
  USER_SIGN_OUT = 'USER_SIGN_OUT',
  USER_REMEMBER = 'USER_REMEMBER',
  REMOVE_ERROR = 'REMOVE_ERROR',
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
  payload: UserInfo;
}

interface UserSignIn {
  type: UserActionTypes.USER_SIGN_IN;
  payload: UserInfo;
}

interface UserSignOut {
  type: UserActionTypes.USER_SIGN_OUT;
}

interface UserRemember {
  type: UserActionTypes.USER_REMEMBER;
  payload: UserInfo | null;
}

interface RemoveError {
  type: UserActionTypes.REMOVE_ERROR;
}

export type UserAction =
  | UserRequest
  | UserError
  | UserSignUp
  | UserSignIn
  | UserSignOut
  | UserRemember
  | RemoveError;
