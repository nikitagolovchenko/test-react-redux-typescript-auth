import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import { userSignUp } from './../store/actions/userActions';
import { validateEmail, validatePassword } from './../utils/validation';

export interface ISignUpState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [signUpData, setSignUpData] = useState<ISignUpState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signUpData);
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
    </Wrapper>
  );
};

export default SignUp;
