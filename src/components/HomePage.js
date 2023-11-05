import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import SearchBar from './Search';

const HomePage = () => (
  <>
    <NavBar />
    <section>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="HomeMenu">
        <Link to="/open-shop">Open Shop</Link>
        <Link to="/post-single-item">Post Single item</Link>
        <Link to="/single-item">Single item</Link>
        <Link to="/check-shops">Check Shops</Link>
      </div>
    </section>
  </>
);

export default HomePage;
