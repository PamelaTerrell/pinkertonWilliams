import React from "react";
//import "../styles.css";
import './Home.css';
import davLogo from '../assets/Doclogo.jpg';


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
        
      </section>

      <section className="location">
        <h3>Our Location</h3>
        <p>📍 <strong>Charlie Norwood VA Medical Center</strong> Room GA126</p>
        <p>1 Freedom Way, Augusta, GA 30904</p>
        <p>This is the Chapter 18 DAV Service Office on the ground floor of the Uptown VA.</p>
        <p>🕒 Hours: Monday - Thursday, 8:00 AM to 12:00 PM</p>
      </section>

      <div className="golden-image-container">
        <img src="/assets/Golden.jpeg" alt="Golden" className="golden-image" />
      </div>

    </div>
  );
}
