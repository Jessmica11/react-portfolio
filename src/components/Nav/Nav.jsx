import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [active, setActive] = useState(false); // Initialize active state

  const toggleMenu = () => {
    setActive(prevActive => !prevActive); // Toggle the active state
  };

  return (
    <nav>
      <button 
        className="menu-icon" 
        aria-expanded={active}
        aria-controls="nav-list"
        aria-label={active ? "Close navigation menu" : "Open navigation menu"}
        onClick={toggleMenu} // Add onClick to toggle menu
      >
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
        <span className={`bar ${active ? 'toggle' : ''}`}></span>
      </button>
      <ul 
        id="nav-list" 
        className={`nav-list ${active ? 'open' : ''}`} 
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
