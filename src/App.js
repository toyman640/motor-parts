import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import CheckShops from './components/CheckShops';
import OpenShop from './components/Openshop';
import SingleItem from './components/SingleItem';
import PostSingle from './components/PostSingle';
import SearchBar from './components/Search';

function App() {
  return (
    <>
      <NavBar />
      <section>
        <SearchBar />
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

export default App;
