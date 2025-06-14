import React from 'react';
import { Link } from 'react-router-dom';
import davLogo from '../assets/davclear.png';  // import the image here
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={davLogo} alt="DAV Chapter 18" className="nav-logo" />
        </Link>   
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/officers" className="nav-link">Officers</Link></li>
        <li><Link to="/events" className="nav-link">Events</Link></li>
      </ul>
    </nav>
  );
}
