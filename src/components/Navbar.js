import React, { useState } from 'react';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="Navigation">
      <h2>Logo</h2>
      <ul className="NavLinks">
        <li>Home</li>
        <li>Shops</li>
        <li>Register</li>
        <li>Cart</li>
      </ul>
      <button type="button" className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? 'close' : 'open'}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {/* ... */}
      </ul>
    </div>
  );
};

export default NavBar;
