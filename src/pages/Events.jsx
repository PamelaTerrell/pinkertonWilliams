import React from 'react';
import './Events.css';
import CookoutGallery from './CookoutGallery';

// Upcoming events data
const upcomingEvents = [
  {
    id: 4,
    title: '2025 National Convention',
    imageUrl: './NatConv.jpeg', // Make sure this path matches where you moved the images
    link: 'https://www.dav.org/events/2025-national-convention/',
  },
  {
    id: 5,
    title: 'Camp Corral',
    imageUrl: './camp.jpeg',
    link: 'https://www.campcorral.org/camps/',
  },
];

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
  return (
    <div className="events-container">
      <h1>DAV Chapter 18 - Augusta, GA</h1>

      {/* Upcoming Events */}
      <section>
  <h2>Upcoming Events</h2>
  <div className="events-grid">
    {upcomingEvents.map(({ title, imageUrl, link }, index) => (
      <a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="event-card"
      >
        <img src={imageUrl} alt={title} className="event-image" />
        <p className="event-title">{title}</p>
      </a>
    ))}
  </div>
</section>


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
    </div>
  );
}
