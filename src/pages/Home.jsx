import React from "react";
//import "../styles.css";
import './Home.css';
import davLogo from '../assets/Doclogo.jpg'; // make sure this path matches your logo file





export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <img src={davLogo} alt="DAV Chapter 18" className="logo" />
        <h1>DAV Chapter 18 - Augusta, GA</h1>
      </header>

      <section className="hero">
        <h2>Honoring Service. Empowering Veterans.</h2>
        <p>We are committed to supporting those who served.</p>
      </section>

      <section className="meetings">
        <h3>Monthly Meetings</h3>
        <p>📅 Every 4th Saturday of the month</p>
        <p>📍 Location: PAINE College Chapel, 15th St. Augusta, GA</p>
        <p>🕒 Time: 10:00 AM</p>
        <button className="cta-button">Join Us</button>
      </section>

    
    </div>
  );
}
