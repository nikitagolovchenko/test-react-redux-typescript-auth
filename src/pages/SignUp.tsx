import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';
import Spinner from '../components/Spinner/Spinner';
import Wrapper from '../components/Wrapper';
import { RootState } from '../store/reducers/rootReducer';
import { SignUpState } from '../types/LoginTypes';
import { userSignUp, removeError } from './../store/actions/userActions';
import { validateEmail, validatePassword } from './../utils/validation';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [signUpData, setSignUpData] = useState<SignUpState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(removeError());
  }, [])


  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validateEmail(signUpData.email) &&
      validatePassword(signUpData.password)
    ) {
      dispatch(userSignUp(signUpData));
    } else {
      alert('enter correct email and password');
    }
  };

  return (
    <Wrapper>
      <h1>Sign Up</h1>

      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <div className='input-holder'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='first name'
              required
              value={signUpData.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className='input-holder'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='last name'
              required
              value={signUpData.lastName}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-holder'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email'
              required
              value={signUpData.email}
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
              value={signUpData.password}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='btn-holder'>
          <button className='btn' type='submit'>
            Sign Up
          </button>
        </div>
      </form>

      {user.loading && <Spinner />}
      {user.error && <ErrorAlert alert={user.error} />}
    </Wrapper>
  );
};

export default SignUp;
