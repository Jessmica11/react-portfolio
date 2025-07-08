import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="footer-content">
          <div className="footer-icons">
            <a
              href="https://github.com/Jessmica11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jessicascheck11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:jmscheck11@gmail.com?subject=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-3 mb-0">
            © {new Date().getFullYear()} React app created by Jessica Scheck.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
