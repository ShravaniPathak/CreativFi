import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignIn from './components/SignIn';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<SignIn />} />
    <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
