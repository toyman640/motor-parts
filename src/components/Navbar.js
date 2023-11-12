import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <div className="Navigation">
      <h2>Logo</h2>
      <ul className="NavLinks">
        <li>Home</li>
        <li>Shops</li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>Cart</li>
      </ul>
    </div>
    <div className="Inside-ham">
      <p className="Close">X</p>
      <ul>
        <li>Home</li>
        <li>Shops</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </div>
    <div>
      <div className="MobileNavigation">
        <h2>Logo</h2>
        <p>Ham</p>
      </div>
    </div>
  </>
);

export default NavBar;
