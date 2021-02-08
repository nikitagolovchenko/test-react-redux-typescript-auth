import { UserAction, UserActionTypes, UserState } from '../../types/UserTypes';

const initialState: UserState = {
  loading: false,
  authorized: false,
  error: null,
  user: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_REQUEST:
      return { ...state, loading: true };

    case UserActionTypes.USER_ERROR:
      return { ...state, loading: false, error: action.payload };

    case UserActionTypes.USER_SIGN_UP:
      return {
        ...state,
        loading: false,
        user: action.payload,
        authorized: true,
        error: null,
      };

    case UserActionTypes.USER_SIGN_IN:
      return {
        ...state,
        loading: false,
        user: action.payload,
        authorized: true,
        error: null,
      };

    case UserActionTypes.USER_SIGN_OUT:
      return {
        ...state,
        user: null,
        authorized: false,
      };

    case UserActionTypes.USER_REMEMBER:
      return {
        ...state,
        authorized: true,
        user: action.payload ? action.payload : null,
      };

    case UserActionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
