import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={showNav ? 'true' : 'false'}
              aria-label={`Toggle navigation ${showNav ? 'close' : 'open'}`}
              onClick={() => setShowNav(!showNav)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
          }}
        >
          <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Jessica Scheck</h1>
                <h4 className="mb-3">A React portfolio</h4>
                <Link className="btn btn-outline-light btn-lg" to="/portfolio" role="button">
                  View my projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
