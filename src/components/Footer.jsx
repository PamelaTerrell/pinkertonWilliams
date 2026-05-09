import React from 'react';
import davLogo from '../assets/davclear.png';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <img
          src={davLogo}
          alt="DAV Chapter 18 Logo"
          className="footer-logo"
        />

        <div className="footer-text">
          <p className="footer-name">
            Pinkerton Williams DAV Chapter 18
          </p>

          <p className="footer-charter">
            Chartered December 5, 1958
          </p>

          <p className="footer-copy">
            © 2016–{currentYear} DAV Chapter 18. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;