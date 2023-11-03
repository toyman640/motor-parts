import React from 'react';

const NavBar = () => (
  <>
    <div className="Navigation">
      <h2>Logo</h2>
      <ul className="NavLinks">
        <li>Home</li>
        <li>Shops</li>
        <li>Register</li>
        <li>Cart</li>
      </ul>
    </div>
    <div className="Inside-ham">
      <p className="Close">X</p>
      <ul>
        <li>Home</li>
        <li>Shops</li>
        <li>Register</li>
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
