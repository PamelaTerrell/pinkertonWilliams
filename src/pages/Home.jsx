import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Top images (optional – currently unused)
// import davLogo from "../assets/Doclogo.jpg";

// Section images
const BUDDY_LOGO_SRC = "/getvabuddy.png";
const GOLDEN_IMAGE_SRC = "/golden.jpeg";

const FUNDRAISER_HIGHLIGHTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/events/fundraiser/fund${i + 1}.JPG`,
  alt: `DAV Chapter 18 Fort Gordon fundraiser photo ${i + 1}`,
}));

// Christmas highlights (show first 4 as teasers)
const CHRISTMAS_HIGHLIGHTS = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  src: `/images/events/christmas/xmas${i + 1}.jpeg`,
  alt: `Christmas Party photo ${i + 1}`,
}));

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? FUNDRAISER_HIGHLIGHTS.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === FUNDRAISER_HIGHLIGHTS.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const selectedImage =
    selectedIndex !== null ? FUNDRAISER_HIGHLIGHTS[selectedIndex] : null;

  return (
    <div className="home-container">
      {/* ===== Header: centered title ===== */}
      {/* <header className="header header--center-row">
        <h1>DAV Chapter 18 — Augusta, GA</h1>
      </header> */}

      <main>
        {/* Hidden H1 for accessibility/structure while visible header is temporarily removed */}
        <h1 className="visually-hidden">DAV Chapter 18 — Augusta, GA</h1>

        {/* ===== Hero ===== */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-text">
            <h2 id="hero-heading">Honoring Service. Empowering Veterans.</h2>
            <p>We are committed to supporting those who served.</p>

            <Link to="/membership" className="cta-button">
              Join DAV Chapter 18
            </Link>
          </div>

          <div className="hero-extra">
            <h3>Our Mission</h3>
            <p>
              Chapter 18 Pinkerton-Williams provides veterans and their families
              with trusted support, resources, and fellowship. We’re here to
              ensure every veteran receives the benefits they earned.
            </p>
          </div>
        </section>

        {/* ===== Fundraiser Highlights ===== */}
        <section
          className="photo-highlights card"
          aria-labelledby="fundraiser-heading"
        >
          <div className="photo-highlights__header">
            <div>
              <h3 id="fundraiser-heading">
                Fort Gordon Fundraiser Highlights — March 7, 2026
              </h3>
              <p className="muted">
                Thank you to everyone who volunteered and supported DAV Chapter
                18 at our fundraiser at the Fort Gordon Commissary.
              </p>
            </div>
          </div>

          <div className="photo-highlights__grid">
            {FUNDRAISER_HIGHLIGHTS.map((p, index) => (
              <button
                key={p.id}
                type="button"
                className="photo-lightbox-trigger"
                onClick={() => openLightbox(index)}
                aria-label={`Open fundraiser photo ${p.id}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="photo-highlights__img"
                />
              </button>
            ))}
          </div>
        </section>

        {/* ===== Christmas Party Highlights ===== */}
        <section className="photo-highlights card" aria-labelledby="xmas-heading">
          <div className="photo-highlights__header">
            <h3 id="xmas-heading">Christmas Party Highlights</h3>

            <Link to="/gallery/christmas-party" className="photo-highlights__link">
              View full album →
            </Link>
          </div>

          <div className="photo-highlights__grid">
            {CHRISTMAS_HIGHLIGHTS.map((p) => (
              <img
                key={p.id}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="photo-highlights__img"
              />
            ))}
          </div>
        </section>

        {/* ===== Meetings + Location ===== */}
        <div className="info-sections">
          <section className="meetings card" aria-labelledby="meetings-heading">
            <h3 id="meetings-heading">Monthly Meetings</h3>
            <p>
              <span aria-hidden="true">📅 </span>Every 4th Saturday of the month
            </p>
            <p>
              <span aria-hidden="true">📍 </span>
              Venue: <strong>Paine College Chapel</strong>, 15th St., Augusta, GA
            </p>
            <p>
              <span aria-hidden="true">🕒 </span>Time: 10:00 AM
            </p>
          </section>

          <section className="location card" aria-labelledby="office-heading">
            <h3 id="office-heading">Service Office</h3>
            <p>
              <span aria-hidden="true">📍 </span>
              <strong>Charlie Norwood VA Medical Center</strong>, Room GA126
            </p>
            <address className="address">1 Freedom Way, Augusta, GA 30904</address>
            <p>
              This is the Chapter 18 DAV Service Office on the ground floor of the
              Uptown VA.
            </p>
            <p>
              <span aria-hidden="true">🕒 </span>Hours: Monday–Thursday, 8:00 AM–12:00 PM
            </p>
          </section>
        </div>

        {/* ===== Get VA Buddy ===== */}
        <section className="getvabuddy-section card" aria-labelledby="buddy-heading">
          <h3 id="buddy-heading">Helpful VA Resource</h3>

          <a
            href="https://getvabuddy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="getvabuddy-link"
            aria-label="Visit Get VA Buddy website (opens in new tab)"
          >
            <img
              src={BUDDY_LOGO_SRC}
              alt="Get VA Buddy handshake logo"
              className="buddy-logo"
              width={128}
              height={128}
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Get VA Buddy</strong>
              <div className="muted">
                Visit Get VA Buddy for easy help navigating VA forms and benefits
                online.
              </div>
            </div>
          </a>
        </section>

        {/* ===== Bottom photo (no stretching) ===== */}
        <div className="golden-image-container">
          <img
            src={GOLDEN_IMAGE_SRC}
            alt="Chapter 18 members standing together"
            className="golden-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </main>

      {/* ===== Lightbox ===== */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded fundraiser photo"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ×
            </button>

            <button
              type="button"
              className="lightbox-nav lightbox-nav--left"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />

            <button
              type="button"
              className="lightbox-nav lightbox-nav--right"
              onClick={showNext}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}