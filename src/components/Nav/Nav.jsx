import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './Nav.css';

function Nav({ active, toggleMenu }) {
  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${active ? 'open' : ''}`}></div>
        <div className={`bar ${active ? 'open' : ''}`}></div>
        <div className={`bar ${active ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-list ${active ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
