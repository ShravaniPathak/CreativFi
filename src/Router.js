// src/Routes.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default AppRoutes;
