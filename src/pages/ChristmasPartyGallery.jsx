import React from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import "./ChristmasPartyGallery.css";

const christmasPartyPhotoDescriptions = {
  "xmas1.jpeg":
    "Large group posing together beside holiday tables and a decorated Christmas tree.",
  "xmas2.jpeg":
    "Four attendees seated at a blue holiday table as one woman smiles and waves.",
  "xmas3.jpeg":
    "Two attendees posing beside a decorated Christmas tree and DAV Chapter 18 wall display.",
  "xmas4.jpeg":
    "Two attendees seated together at a shiny red holiday table with balloons and festive cups.",
  "xmas5.jpeg":
    "Man in red and black arranging gold-wrapped gifts beside attendees at a holiday table.",
  "xmas6.jpeg":
    "Man wearing a cap reading “Desert Storm Veteran” seated before a table of smiling party guests.",
  "xmas7.jpeg":
    "Attendees gathered around a blue holiday table decorated with balloons and miniature Christmas trees.",
  "xmas8.jpeg":
    "Christmas party guests seated throughout a dining room filled with red and blue decorated tables.",
  "xmas9.jpeg":
    "Lighted Christmas tree decorated with red garland, white snowflakes, and assorted ornaments.",
  "xmas10.jpeg":
    "Smiling man in a “Vietnam Veteran” cap seated beside a large Santa Claus door decoration.",
  "xmas11.jpeg":
    "Party guests seated around red and blue tables decorated with balloons and miniature trees.",
  "xmas12.jpeg":
    "Woman in a red jacket holding a miniature Christmas tree while guests converse around her.",
  "xmas13.jpeg":
    "Man in a red shirt and black striped sweater looking down with a smile.",
  "xmas14.jpeg":
    "Three men standing beside a red holiday table decorated with balloons.",
  "xmas15.jpeg":
    "Man wearing a cap and sunglasses standing behind a seated woman in a red sweater.",
  "xmas16.jpeg":
    "Man giving two thumbs up between two women seated at a blue Christmas party table.",
};

const photos = Object.entries(christmasPartyPhotoDescriptions).map(
  ([filename, alt], index) => ({
    id: index + 1,
    src: `/images/events/christmas/${filename}`,
    alt,
  }),
);

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
