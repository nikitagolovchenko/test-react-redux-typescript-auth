import { Dispatch } from 'react';
import firebaseAuth from '../../firebase/firebase';
import { UserAction, UserActionTypes } from '../../types/UserTypes';
import { SignUpState } from './../../types/LoginTypes';

export const userSignUp = ({
  firstName,
  lastName,
  email,
  password,
}: SignUpState) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_REQUEST,
    });

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const userInfo = {
          firstName,
          lastName,
          email,
          uid: userCredential.user?.uid,
        };

        dispatch({
          type: UserActionTypes.USER_SIGN_UP,
          payload: userInfo,
        });

        localStorage.setItem('user', JSON.stringify(userInfo));
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.USER_ERROR,
          payload: error.message,
        });
      });
  };
};

export const userRemember = () => {
  return {
    type: UserActionTypes.USER_REMEMBER,
    payload: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '{}')
      : null,
  };
};

export const userSignOut = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_SIGN_OUT,
    });

    localStorage.removeItem('user');
  };
};
