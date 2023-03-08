import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './PageSection/Home';
import Details from './PageSection/Details';

import About from './PageSection/About';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
