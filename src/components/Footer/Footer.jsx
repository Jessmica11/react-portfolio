import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa'; // For the resume icon
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/Jessmica11" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jessicascheck11" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div className="resume-link">
          <a href="/public/assets/Jessica-Scheck-UX-UI-2025.pdf" className="resume-link-text" target="_blank" rel="noopener noreferrer">
            <FaFileAlt className="resume-icon" /> Resume
          </a>
        </div>
      </div>
      <p className="footer-bottom">
        © {new Date().getFullYear()} React app created by Jessica Scheck. All rights reserved.
      </p>
    </footer>
  );
}
