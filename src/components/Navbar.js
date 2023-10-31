import React, { useState } from 'react';

const NavBar = () => {

  return (
    <div className="Navigation">
      <h2>Logo</h2>
      <ul className="NavLinks">
        <li>Home</li>
        <li>Shops</li>
        <li>Register</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default NavBar;
