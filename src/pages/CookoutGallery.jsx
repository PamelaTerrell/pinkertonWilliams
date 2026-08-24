import React from "react";
import Masonry from "react-masonry-css";
import "./CookoutGallery.css";

const images = Array.from({ length: 38 }, (_, i) => ({
    src: `/gw-cookout/GW${i + 2}.JPG`,
    alt: `Cookout Photo ${i + 2}`,
  }));
  

  

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function CookoutGallery() {
  return (
    <div className="cookout-gallery">
      <h2 className="cookout-heading">🇺🇸 Summer 2025 Cookout at Georgia War Veterans - Milledgeville Nursing Home</h2>
      <p className="cookout-subtext">
        A joyful summer day of good food by The Department of Georgia, DAV Chapter 18 and other Chapters, for heartfelt connection with our heroes.
      </p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="cookout-image"
            loading="lazy"
            decoding="async"
          />
        ))}
      </Masonry>
    </div>
  );
}
