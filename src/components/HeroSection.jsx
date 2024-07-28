import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HeroSection.css';
import HeroImg from '../assets/hero-img.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/waitlist');
  };

  return (
    <div className='hero-section'>
      <div className='container-1'>
        <h5><span className='green-text'>This Is How</span></h5>
        <h5>Good Creators </h5>
        <h5> Work For Good </h5>
        <h5> Companies </h5>
        <p>Forget the old rules. You can have the best people. Right now. Right here.</p>
        <button className='started-button' onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className='container-2'>
        <img className='hero-img' src={HeroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
