import React from "react";
import Masonry from "react-masonry-css";
import "./CookoutGallery.css";

const cookoutPhotoDescriptions = {
  "GW2.JPG":
    "Man in a red polo seated beneath the cookout pavilion with serving tables and grills behind him.",
  "GW3.JPG":
    "Smiling woman in a navy DAV shirt standing beside cookout food and supplies.",
  "GW4.JPG":
    "Two women arranging serving trays and insulated food carriers under the pavilion.",
  "GW5.JPG":
    "Man in a gray DAV shirt gesturing beside boxes of chips and a watermelon as others prepare food.",
  "GW6.JPG":
    "Three people preparing the cookout table, including a man wearing a cap that reads “Vietnam Veteran Navy.”",
  "GW7.JPG":
    "Four people gathered around covered food trays while organizing the cookout serving table.",
  "GW8.JPG":
    "Three people moving through the pavilion near a grill and prepared food trays.",
  "GW9.JPG":
    "Bearded man in an orange cap seated beneath the pavilion beside picnic tables.",
  "GW10.JPG":
    "Man in a red polo seated beneath the cookout pavilion wearing a cap embroidered with Purple Heart insignia.",
  "GW11.JPG":
    "Group of people wearing DAV shirts gathered around a table of food and supplies under the pavilion.",
  "GW12.JPG":
    "People arranging coolers, chips, serving trays, and watermelon beneath the cookout pavilion.",
  "GW13.JPG":
    "Three women talking near picnic tables, including one wearing an Activity Staff shirt.",
  "GW14.JPG":
    "Two women standing beside an American flag in front of a large DAV banner.",
  "GW15.JPG":
    "Two women wearing staff badges posing together in front of a DAV banner.",
  "GW16.JPG":
    "Smiling man in a white knit cap seated outdoors at the cookout.",
  "GW17.JPG":
    "Cookout attendees gathered around a supply table stacked with cups, napkins, and utensils.",
  "GW18.JPG":
    "Man in a black shirt seated in the pavilion with cookout activity and picnic tables behind him.",
  "GW19.JPG":
    "Two women wearing staff badges standing together outside near the pavilion.",
  "GW20.JPG":
    "People unpacking boxes and arranging buns, ice, and covered trays at the serving tables.",
  "GW21.JPG":
    "Group gathered around the cookout table while distributing packaged food and supplies.",
  "GW22.JPG":
    "Man in a blue DAV cap unpacking hot dog buns beside stacks of plates under the pavilion.",
  "GW23.JPG":
    "People wearing DAV clothing unpacking food and supplies at the cookout serving table.",
  "GW24.JPG":
    "Bearded man in a blue DAV shirt and cap standing beside buns and condiments.",
  "GW25.JPG":
    "Smiling man wearing a cap that reads “U.S. Navy Vietnam Veteran” seated near the pavilion’s picnic tables.",
  "GW26.JPG":
    "Man in a gray Freedom shirt seated beside a picnic table in the sun.",
  "GW27.JPG":
    "Man seated at the end of a picnic table while other attendees gather behind him.",
  "GW28.JPG":
    "Man wearing glasses and a checkered shirt standing near the pavilion entrance.",
  "GW29.JPG":
    "Woman in a white shirt seated at a picnic table beneath the pavilion.",
  "GW30.JPG":
    "Three people wearing DAV clothing gathered around coolers, a watermelon, and boxes of chips.",
  "GW31.JPG":
    "People wearing gloves preparing a long serving table of covered food trays.",
  "GW32.JPG":
    "People wearing DAV clothing talking with an attendee across a serving table of covered food trays and chips.",
  "GW33.JPG":
    "Three men seated among picnic tables beneath the outdoor cookout shelters.",
  "GW34.JPG":
    "Man in a gray shirt and John Deere cap seated near the picnic shelters.",
  "GW35.JPG":
    "Man in a blue plaid shirt wearing a cap that reads “Navy Veteran” while eating lunch at a picnic table.",
  "GW36.JPG":
    "Man wearing sunglasses and a cap that reads “Navy Veteran” seated with his cookout meal.",
  "GW37.JPG":
    "Two men seated together at the cookout while other attendees eat in the background.",
  "GW38.JPG":
    "Man wearing glasses and a decorated military-themed cap looking directly at the camera.",
  "GW39.JPG":
    "Two smiling people wearing DAV clothing posing together in front of a large DAV banner.",
};

const images = Object.entries(cookoutPhotoDescriptions).map(
  ([filename, alt]) => ({
    src: `/gw-cookout/${filename}`,
    alt,
  }),
);
  

  

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
