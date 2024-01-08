import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Stay from './components/pages/Stay';

function App() {
  return (
    <>
      <Router basename="/HolidayRetreat">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/stay' element={<Stay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
