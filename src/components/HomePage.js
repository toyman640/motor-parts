import React from "react";
import NavBar from './components/Navbar';
import CheckShops from './components/CheckShops';
import OpenShop from './components/Openshop';
import SingleItem from './components/SingleItem';
import PostSingle from './components/PostSingle';
import SearchBar from './components/Search';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="HomeMenu">
          <OpenShop />
          <PostSingle />
          <CheckShops />
          <SingleItem />
        </div>
      </section>
    </>
  );
}

export default HomePage;
