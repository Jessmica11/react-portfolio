import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navigation() {
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
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {/* Hamburger Icon */}
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
      </button>
      <ul 
        id="nav-list" 
        className={`nav-list ${isOpen ? 'open' : ''}`} 
        role="menu"
      >
        <li role="none"> {/* Indicates that this list item is not a menu item */}
          <Link to="/" role="menuitem">Home</Link> {/* Defines this link as a menu item */}
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

export default Navigation;
