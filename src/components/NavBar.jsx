import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/src/assets/davclear.png" alt="DAV Chapter 18" />
        </Link>
        
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          &#9776;
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/officers" className="nav-link">Officers</Link></li>
          <li><Link to="/events" className="nav-link">Events</Link></li>
        </ul>
      </div>
    </nav>
  );
}
