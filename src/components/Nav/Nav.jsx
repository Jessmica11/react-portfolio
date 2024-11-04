import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <button 
        className="menu-icon" 
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="nav-list"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} // Accessible label
      >
        {/* Hamburger Icon */}
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
      </button>
      <ul 
        id="nav-list" 
        className={`nav-list ${isOpen ? 'open' : ''}`} // Class based on isOpen state
        role="menu" // Role for accessibility
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
