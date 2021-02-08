import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';
import Spinner from '../components/Spinner/Spinner';
import Wrapper from '../components/Wrapper';
import { removeError, userSignIn } from '../store/actions/userActions';
import { RootState } from '../store/reducers/rootReducer';
import { SignInState } from '../types/LoginTypes';
import firebaseAuth from './../firebase/firebase';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [signInData, setSignInData] = useState<SignInState>({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(removeError());
  }, []);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(userSignIn(signInData));
  };

  return (
    <Wrapper>
      <h1>Sign In</h1>

      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <div className='input-holder'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              required
              value={signInData.email}
              onChange={changeHandler}
            />
          </div>
          <div className='input-holder'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
              required
              value={signInData.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='btn-holder'>
          <button className='btn' type='submit'>
            Sign In
          </button>
        </div>
      </form>

      {user.loading && <Spinner />}
      {user.error && <ErrorAlert alert={user.error} />}
    </Wrapper>
  );
};

export default SignIn;
