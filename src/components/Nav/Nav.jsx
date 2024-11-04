import React from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
