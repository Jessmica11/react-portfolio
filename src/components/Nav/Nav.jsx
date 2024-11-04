import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import './Nav.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
        <span className={`bar ${isOpen ? 'toggle' : ''}`}></span>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;