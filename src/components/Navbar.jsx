import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">Creativ<span>Fi</span></Link>
          <Link to="/discussion" className="navbar-item">Discussion</Link>
          <div className="navbar-item dropdown">
            <button className="dropdown-button navbar-item">
              Community <FontAwesomeIcon className='icon' icon={faChevronDown} />
            </button>
            <div className="dropdown-content">
              <Link to="/community/option1">Option 1</Link>
              <Link to="/community/option2">Option 2</Link>
            </div>
          </div>
          <Link to="/plans" className="navbar-item">Plans</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="navbar-item">Log In</Link>
          <Link to="/signup" className="navbar-signup  navbar-item">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;