import React from 'react';
import { NavLink } from 'react-router-dom';
import NavList from './NavList';

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <NavLink to='/' className='logo' title="to home">
            <img src='/logo.svg' alt='logo' />
          </NavLink>

          <NavList />
        </div>
      </header>

      <main className='main'>
        <div className='container'>{children}</div>
      </main>
    </div>
  );
};

export default Wrapper;
