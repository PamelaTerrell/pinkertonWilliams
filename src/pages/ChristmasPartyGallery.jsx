import React from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import "./ChristmasPartyGallery.css";

const photos = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/events/christmas/xmas${i + 1}.jpeg`,
  alt: `Christmas Party photo ${i + 1}`,
}));

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function ChristmasPartyGallery() {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <div>
          <h1>Christmas Party Photo Album</h1>
          <p className="muted">
            Pinkerton-Williams DAV Chapter 18 — Augusta, GA
          </p>
        </div>

        <nav className="gallery-nav">
          <Link to="/" className="gallery-link">← Home</Link>
          <Link to="/events" className="gallery-link">Events</Link>
        </nav>
      </header>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-col"
      >
        {photos.map((p) => (
          <figure key={p.id} className="photo-card">
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </Masonry>
    </div>
  );
}
