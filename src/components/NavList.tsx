import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../store/reducers/rootReducer';

const NavList = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <ul className='nav-list'>
      <li>
        <NavLink to='/news'>News</NavLink>
      </li>

      {!user.authorized && (
        <>
          <li>
            <NavLink to='/sign-up'>Sign Up</NavLink>
          </li>

          <li>
            <NavLink to='/sign-in'>Sign In</NavLink>
          </li>
        </>
      )}

      {user.authorized && (
        <>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>

          <li>
            <Link to='/'>Sign out</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavList;
