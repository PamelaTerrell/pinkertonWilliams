import React from 'react';
import './Events.css';

// Example event data — update with your real data and image URLs
const events = [

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

export default function Events() {
  return (
    <div className="events-container">
      <h1>DAV Chapter 18 - Augusta, GA</h1>
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map(({ id, title, imageUrl, link }) => (
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
    </div>
  );
}
