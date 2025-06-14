import React from 'react';
import davLogo from '../assets/davclear.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={davLogo} alt="DAV Logo" className="footer-logo" /> 
      <p>© 2016 DAV Chapter 18. All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
