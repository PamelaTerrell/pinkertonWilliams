import React, { useState, useEffect } from 'react';
import './Events.css';
import CookoutGallery from './CookoutGallery';



// Past events data
const pastEvents = [
  {
    id: 1,
    title: 'Fundraiser',
    imageUrl: '/images/events/fundraiser20.jpeg',
  },
  {
    id: 2,
    title: 'Installations',
    imageUrl: '/images/events/installation.jpg',
  },
  {
    id: 3,
    title: 'Fundraiser',
    imageUrl: '/images/events/FR8.jpg',
  },
  {
    id: 4,
    title: 'Fundraiser',
    imageUrl: '/images/events/BBQA.jpg',
  },
  {
    id: 5,
    title: 'Fundraiser',
    imageUrl: '/images/events/BBQB.jpg',
  },
  {
    id: 6,
    title: 'Coca Cola Appreciation',
    imageUrl: '/images/events/flower10.jpg',
  },
  {
    id: 7,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flowers.jpg',
  },
  {
    id: 8,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower2.jpg',
  },
  {
    id: 9,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower3.jpg',
  },
  {
    id: 10,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower4.jpg',
  },
  {
    id: 11,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower5.jpg',
  },
  {
    id: 12,
    title: 'Soldier Exodus',
    imageUrl: '/images/events/airport5.jpg',
  },
  {
    id: 13,
    title: 'Knights Meat Market Appreciation',
    imageUrl: '/images/events/Knightscert1.jpg',
  },
  {
    id: 14,
    title: 'Knights Meat Market Appreciation',
    imageUrl: '/images/events/cert1.jpg',
  },
  {
    id: 15,
    title: 'FPL Foods',
    imageUrl: '/images/events/cert2.jpg',
  },
  {
    id: 16,
    title: 'Volunteer Recognition',
    imageUrl: '/images/events/pamCert.jpg',
  },
];

export default function Events() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="events-container">
      <h1>DAV Chapter 18 - Augusta, GA</h1>

     

      {/* Cookout Photo Gallery */}
      <section>
        <CookoutGallery />
      </section>

      {/* Past Events */}
      <section>
        <h2>Past Events</h2>
        <div className="events-grid past-events">
          {pastEvents.map(({ id, title, imageUrl }) => (
            <div key={id} className="event-card" title={title}>
              <img src={imageUrl} alt={title} className="event-image" />
              <p className="event-title">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}

<section className="getvabuddy-section">
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
    />
    <span>Visit Get VA Buddy for easy help navigating VA forms and benefits online.</span>
  </a>
</section>


    </div>

      

  );
}
