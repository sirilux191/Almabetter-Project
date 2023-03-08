import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <Link to='/' className='site-title'>
          Almabetter Project
        </Link>
        <ul>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/details'>Fill Details</CustomLink>
          <CustomLink to='/about'>About Us</CustomLink>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
