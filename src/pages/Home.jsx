import React from "react";
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
  <div className="hero-text">
    <h2>Honoring Service. Empowering Veterans.</h2>
    <p>We are committed to supporting those who served.</p>
    <a href="/membership" className="cta-button">Join DAV Chapter 18</a>
  </div>

  <div className="hero-extra">
    <h3>Our Mission</h3>
    <p>
      Chapter 18 Pinkerton-Williams provides veterans and their families with
      trusted support, resources, and fellowship. We’re here to ensure every
      veteran receives the benefits they earned.
    </p>
  </div>
</section>



      {/* Meetings + Location */}
      <div className="info-sections">
        <section className="meetings card">
          <h3>Monthly Meetings</h3>
          <p>📅 Every 4th Saturday of the month</p>
          <p>📍 Location: PAINE College Chapel, 15th St. Augusta, GA</p>
          <p>🕒 Time: 10:00 AM</p>
        </section>

        <section className="location card">
          <h3>Our Location</h3>
          <p>📍 <strong>Charlie Norwood VA Medical Center</strong> Room GA126</p>
          <p>1 Freedom Way, Augusta, GA 30904</p>
          <p>This is the Chapter 18 DAV Service Office on the ground floor of the Uptown VA.</p>
          <p>🕒 Hours: Monday - Thursday, 8:00 AM to 12:00 PM</p>
        </section>
      </div>

      {/* VA Buddy */}
      <section className="getvabuddy-section card">
        <h3>Helpful VA Resource</h3>
        <a
          href="https://getvabuddy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="getvabuddy-link"
          aria-label="Visit Get VA Buddy website"
        >
          <img
            src="/buddy.png"
            alt="Get VA Buddy Logo"
            className="buddy-logo"
            loading="lazy"
          />
          <span>Visit Get VA Buddy for easy help navigating VA forms and benefits online.</span>
        </a>
      </section>

      {/* Golden image moved to bottom */}
      <div className="golden-image-container">
        <img 
          src="/assets/Golden.jpeg" 
          alt="Golden" 
          className="golden-image" 
          loading="lazy" 
        />
      </div>
    </div>
  );
}
