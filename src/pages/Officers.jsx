import React from "react";
import "./Officers.css";

const officers = [
  { id: 1, name: "Alvin Terrell", title: "Commander", photo: "/assets/officers/AT.JPG" },

  {
    id: 2,
    name: "Ronald Holiday Sr",
    title: "Senior Vice Commander",
    photo: "/assets/officers/RonaldHolidaySr.jpg",
  },

  {
    id: 3,
    name: "Maggie Griffin",
    title: "1st Junior Vice Commander",
    photo: "/assets/officers/Maggie.png",
  },

  {
    id: 4,
    name: "Chris Walker",
    title: "2nd Junior Vice Commander",
    photo: "/assets/officers/ChrisWalker.jpg",
  },

  {
    id: 5,
    name: "Donna Thames",
    title: "Treasurer",
    photo: "/assets/officers/DonnaThames.jpg",
  },

  {
    id: 6,
    name: "Phylicia Fuller",
    title: "Adjutant",
    photo: "/assets/officers/PhyliciaFuller.jpg",
  },

  {
    id: 7,
    name: "Arthur Smith",
    title: "Chapter Historian",
    photo: "/assets/officers/ArthurSmith.jpeg",
  },

  {
    id: 8,
    name: "Douglas Holloway",
    title: "Sgt at Arms",
    photo: "/assets/officers/DouglasHolloway.jpg",
  },

  {
    id: 9,
    name: "Robert Bledsoe",
    title: "Staff Judge Advocate",
    photo: "/assets/officers/RB.JPG",
  },

  {
    id: 10,
    name: "Pamela Terrell",
    title: "Web Developer",
    photo: "/assets/officers/PJT.png",
    link: "https://pamelajterrell.com",
  },
];

export default function Officers() {
  return (
    <div className="officers-container">
      <header className="officers-header">
        <h1>DAV Chapter 18 – Augusta, Georgia</h1>
        <h2>2026–2027 Elected Officers</h2>

        <p className="officers-subtitle">
          Congratulations to our newly elected and reelected officers.
          Thank you for your continued service to veterans and our community.
        </p>

        <img
          src="/assets/officers/congratulations-banner.png"
          alt="Congratulations to our newly elected and reelected officers"
          className="officers-banner"
          loading="lazy"
        />
      </header>

      <div className="officers-grid">
        {officers.map(({ id, name, title, photo, link }) => (
          <div key={id} className="officer-card">
            <img
              src={photo}
              alt={name}
              className="officer-photo"
              loading="lazy"
            />

            <h3>{name}</h3>
            <p>{title}</p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="officer-link"
                aria-label={`Visit ${name}'s website`}
              >
                Visit Personal Website
              </a>
            )}
          </div>
        ))}
      </div>

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
            src="/getvabuddy.png"
            alt="Get VA Buddy Logo"
            className="buddy-logo"
            loading="lazy"
          />

          <span>
            Visit Get VA Buddy for easy help navigating VA forms and
            benefits online.
          </span>
        </a>
      </section>
    </div>
  );
}