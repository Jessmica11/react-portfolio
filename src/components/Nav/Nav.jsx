import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav({ active, toggleMenu }) {
  const location = useLocation();

  // 🔐 Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && active) {
        toggleMenu(); // Close the menu
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active, toggleMenu]);

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${active ? "open" : ""}`}></div>
        <div className={`bar ${active ? "open" : ""}`}></div>
        <div className={`bar ${active ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-list ${active ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={toggleMenu}
            className={location.pathname === "/portfolio" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/process"
            onClick={toggleMenu}
            className={location.pathname === "/process" ? "active" : ""}
          >
            UX Process
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={toggleMenu}
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            onClick={toggleMenu}
            className={location.pathname === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
