import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import OpenShop from './components/Openshop';
import SingleItem from './components/SingleItem';
import PostSingle from './components/PostSingle';

function App() {
  return (
    <>
       <BrowserRouter>
        <HomePage />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/open-shop" element={<OpenShop />} />
          <Route path="/single-item" element={<SingleItem />} />
          <Route path="/single-item" element={<SingleItem />} />
          <Route path="/post-single-item" element={<PostSingle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
