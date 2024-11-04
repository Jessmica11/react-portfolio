import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a href="https://github.com/Jessmica11" target="_blank" rel="noopener noreferrer">
              <FaGithub className="fs-3 me-3" />
            </a>
            <a href="https://www.linkedin.com/in/jessicascheck11" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="fs-3" />
            </a>
          </div>
          {/* I made this copyright dynamic */}
          <p className="text-muted mb-0">© {new Date().getFullYear()} React.jsx app created by Jessica Scheck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
