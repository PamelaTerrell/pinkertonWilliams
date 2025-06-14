import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import davLogo from '../assets/davclear.png';
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={davLogo} alt="DAV Chapter 18" />
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776; {/* Unicode hamburger icon */}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/officers" className="nav-link" onClick={() => setMenuOpen(false)}>
              Officers
            </Link>
          </li>
          <li>
            <Link to="/events" className="nav-link" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
