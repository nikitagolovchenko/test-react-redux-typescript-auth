import { UserAction, UserActionTypes, UserState } from "../types/UserTypes";


const initialState: UserState = {
  loading: false,
  authorized: false,
  error: null,
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

    default:
      return state;
  }
};
