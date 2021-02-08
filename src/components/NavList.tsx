import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userSignOut } from '../store/actions/userActions';
import { RootState } from '../store/reducers/rootReducer';

const NavList = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const signOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    dispatch(userSignOut());
  };

  return (
    <ul className='nav-list'>
      <li>
        <NavLink to='/news'>News</NavLink>
      </li>

      {!user.user && (
        <>
          <li>
            <NavLink to='/sign-up'>Sign Up</NavLink>
          </li>

          <li>
            <NavLink to='/sign-in'>Sign In</NavLink>
          </li>
        </>
      )}

      {user.user && (
        <>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>

          <li>
            <Link to='/' onClick={signOut}>
              Sign out
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavList;
