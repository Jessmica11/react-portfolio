import React from 'react';
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
