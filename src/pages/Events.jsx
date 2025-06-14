import React from 'react';
import './Events.css';

// Upcoming events data
const upcomingEvents = [
  {
    id: 4,
    title: '2025 National Convention',
    imageUrl: '/assets/NatConv.jpeg',
    link: 'https://www.dav.org/events/2025-national-convention/',
  },
  {
    id: 5,
    title: 'Camp Corral',
    imageUrl: '/assets/camp.jpeg',
    link: 'https://www.campcorral.org/camps/',
  },
];

// Past events data
const pastEvents = [
  {
    id: 1,
    title: 'Fundraiser 2025',
    imageUrl: '/images/events/fundraiser20.jpeg',
    
  },

   {
    id: 1,
    title: 'Coca Cola Appreciation',
    imageUrl: '/images/events/flower10.jpg',
    
  },

  {
    id: 1,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flowers.jpg',
    
  },

  {
    id: 1,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower2.jpg',
    
  },

  {
    id: 1,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower3.jpg',
    
  },

  {
    id: 1,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower4.jpg',
    
  },

  {
    id: 1,
    title: 'Female Appreciation Ceremony',
    imageUrl: '/images/events/flower5.jpg',
    
  },

  {
    id: 1,
    title: 'Soldier Exodus',
    imageUrl: '/images/events/airport5.jpg',
    
  },

  {
    id: 1,
    title: 'Knights Meat Market Appreciation',
    imageUrl: '/images/events/cert1.jpg',
    
  },

  {
    id: 1,
    title: 'FPL Foods',
    imageUrl: '/images/events/cert2.jpg',
    
  },


  // add more past events here as needed
];

export default function Events() {
  return (
    <div className="events-container">
      <h1>DAV Chapter 18 - Augusta, GA</h1>

      <section>
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map(({ id, title, imageUrl, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card"
              title={title}
            >
              <img src={imageUrl} alt={title} className="event-image" />
              <p className="event-title">{title}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2>Past Events</h2>
        <div className="events-grid past-events">
          {pastEvents.map(({ id, title, imageUrl, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="event-card"
              title={title}
            >
              <img src={imageUrl} alt={title} className="event-image" />
              <p className="event-title">{title}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
