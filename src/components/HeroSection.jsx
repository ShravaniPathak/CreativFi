import React from 'react'
import '../css/HeroSection.css';
import HeroImg from '../assets/hero-img.png';

const HeroSection = () => {
  return (
    <div className='hero-section'>

       <div className='container-1'> <h5> <span className='green-text'>This Is How</span></h5>
        <h5>Good Company</h5>
        <h5> For Good </h5>
        <h5> Companies </h5>
        <p>Forget the old rules. You can have the best people.
        Right now. Right here.</p>
        <button className='started-button'>Get Started</button>
        </div>
       <div className='container-2'>
       <img className='hero-img' src={HeroImg} alt="hero-img" />
       </div>
    </div>
  )
}

export default HeroSection