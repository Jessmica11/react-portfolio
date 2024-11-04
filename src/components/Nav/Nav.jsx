import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({ active, toggleMenu }) { // Accept toggleMenu prop
  return (
    <nav>
      <button 
        className="menu-icon" 
        onClick={toggleMenu} // Add click handler here
        aria-expanded={active}
        aria-controls="nav-list"
        aria-label={active ? "Close navigation menu" : "Open navigation menu"}
      >
        {/* Hamburger Icon */}
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
      </button>
      <ul 
        id="nav-list" 
        className={`nav-list ${active ? 'open' : ''}`} // Use active prop for visibility
        role="menu"
      >
        <li role="none">
          <Link to="/" role="menuitem">Home</Link>
        </li>
        <li role="none">
          <Link to="/about" role="menuitem">About Me</Link>
        </li>
        <li role="none">
          <Link to="/portfolio" role="menuitem">Portfolio</Link>
        </li>
        <li role="none">
          <Link to="/contact" role="menuitem">Contact</Link>
        </li>
        <li role="none">
          <Link to="/resume" role="menuitem">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
