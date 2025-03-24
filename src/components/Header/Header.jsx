import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Jessica Scheck Portfolio</h1>
        <Nav active={navActive} toggleMenu={toggleNav} />
      </div>
    </header>
  );
}

export default Header;
