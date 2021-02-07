import { Dispatch } from 'react';
import firebaseAuth from '../../firebase/firebase';
import { UserAction, UserActionTypes } from '../types/UserTypes';
import { ISignUpState } from './../../pages/SignUp';


export const userSignUp = ({firstName, lastName, email, password}: ISignUpState) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_REQUEST,
    });

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.USER_ERROR,
          payload: error.message,
        });
      });
  };
};
