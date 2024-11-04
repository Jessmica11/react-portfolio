import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <h1>Jessica Scheck Portfolio App</h1>
      <button onClick={toggleNav} className="nav-toggle">
        {navActive ? 'Close Menu' : 'Open Menu'} {/* Toggle button text */}
      </button>
      <Nav active={navActive} /> {/* Pass the navActive state to Nav */}
    </header>
  );
}

export default Header;
