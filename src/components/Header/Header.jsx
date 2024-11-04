import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <h1>Jessica Scheck Portfolio</h1>
      <Nav active={navActive} toggleMenu={toggleNav} /> {/* Pass the toggle function */}
    </header>
  );
}

export default Header;
