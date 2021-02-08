import { Dispatch } from 'react';
import firebaseAuth from '../../firebase/firebase';
import { UserAction, UserActionTypes } from '../../types/UserTypes';
import { SignInState, SignUpState, UserInfo } from './../../types/LoginTypes';

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

        if (firebaseAuth.currentUser != null) {
          firebaseAuth.currentUser
            .updateProfile({
              displayName: `${userInfo.firstName} ${userInfo.lastName}`,
            })
            .catch(function (error) {
              console.error(`User update error: ${error.message}`);
            });
        }

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

export const userSignIn = ({ email, password }: SignInState) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_REQUEST,
    });

    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user) {
          const displayName = user.displayName
            ? user.displayName.split(' ')
            : null;

          const userInfo = {
            firstName: displayName ? displayName[0] : '',
            lastName: displayName ? displayName[1] : '',
            email: user.email ? user.email : '',
            uid: user.uid,
          };

          dispatch({
            type: UserActionTypes.USER_SIGN_IN,
            payload: userInfo,
          });

          localStorage.setItem('user', JSON.stringify(userInfo));
        }
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

export const removeError = () => {
  return {
    type: UserActionTypes.REMOVE_ERROR,
  };
};
