import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// ==============================
// Assets
// ==============================
const BUDDY_LOGO_SRC = "/getvabuddy.png";
const GOLDEN_IMAGE_SRC = "/golden.jpeg";

const FUNDRAISER_HIGHLIGHTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/images/events/fundraiser/fund${i + 1}.JPG`,
  alt: `DAV Chapter 18 Fort Gordon fundraiser photo ${i + 1}`,
}));

const CHRISTMAS_HIGHLIGHTS = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  src: `/images/events/christmas/xmas${i + 1}.jpeg`,
  alt: `DAV Chapter 18 Christmas Party photo ${i + 1}`,
}));

// ==============================
// External links
// ==============================
const CSRA_CEMETERY_URL = "https://csraveteranscemetery.org/";

const CEMETERY_2026_ARTICLE_URL =
  "https://www.wrdw.com/2026/02/07/augusta-veterans-cemetery-receives-150-million-federal-funding/";

const CEMETERY_2021_ARTICLE_URL =
  "https://www.wrdw.com/2021/06/02/city-leaders-and-veterans-tour-milledgeville-cemetery-one-step-closer-to-veteran-cemetery-in-augusta/";

// Optional:
// Add a verified embeddable URL later if you find one.
const CEMETERY_MEDIA_EMBED_URL = "";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? FUNDRAISER_HIGHLIGHTS[selectedIndex] : null;

  const hasCemeteryEmbed = Boolean(CEMETERY_MEDIA_EMBED_URL);

  const cemeteryStats = useMemo(
  () => [
    {
      label: "Purpose",
      value: "Honor, remembrance, and reflection",
    },
    {
      label: "Community",
      value: "Serving veterans and families across the CSRA",
    },
    {
      label: "Vision",
      value: "A peaceful, permanent place worthy of those who served",
    },
  ],
  []
);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

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

  return (
    <div className="home-container">
      <main>
        <h1 className="visually-hidden">DAV Chapter 18 — Augusta, Georgia</h1>

        {/* ===========================
            Hero
        =========================== */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-text">
            <h2 id="hero-heading">Honoring Service. Empowering Veterans.</h2>
            <p>
              Pinkerton-Williams DAV Chapter 18 is committed to supporting
              veterans and their families through advocacy, fellowship,
              information, and service to the Augusta community.
            </p>

            <Link to="/membership" className="cta-button">
              Join DAV Chapter 18
            </Link>
          </div>

          <div className="hero-extra">
            <h3>Our Mission</h3>
            <p>
              We work to ensure that veterans receive the respect, resources,
              and benefits they earned through service while strengthening
              community ties throughout Augusta and the CSRA.
            </p>
          </div>
        </section>



        {/* ===========================
    Upcoming Fundraiser Banner
=========================== */}
<section className="upcoming-fundraiser card" aria-labelledby="upcoming-fundraiser-heading">
  <img
    src="/images/events/fundraiser-june-13.png"
    alt="DAV Chapter 18 Fundraiser on Saturday, June 13th at the Fort Gordon Commissary"
    className="upcoming-fundraiser__image"
    loading="eager"
    decoding="async"
  />

  <div className="upcoming-fundraiser__content">
    <div className="section-kicker">Upcoming Fundraiser</div>
    <h3 id="upcoming-fundraiser-heading">
      DAV Chapter 18 Fundraiser — Saturday, June 13th
    </h3>
    <p>
      Join DAV Chapter 18 at the Fort Gordon Commissary and help support local
      veterans and their families.
    </p>
  </div>
</section>

        
     

        {/* ===========================
    Featured Vision Banner
=========================== */}
<section className="news-banner card" aria-label="Featured community vision">
  <div className="news-banner__inner">
    <div className="news-banner__eyebrow-wrap">
      <span className="news-banner__label">Featured Vision</span>
      <span className="news-banner__dot" aria-hidden="true"></span>
      <span className="news-banner__tag">CSRA Veterans Cemetery</span>
    </div>

    <div className="news-banner__content">
      <h3 className="news-banner__headline">
        A beautiful place of honor is being envisioned for CSRA veterans.
      </h3>
      <p className="news-banner__text">
        The future Georgia Veterans Memorial Cemetery - Augusta is being shaped
        as a peaceful place of remembrance, reflection, and dignity for veterans
        and families across our region.
      </p>
    </div>

    <a href="#cemetery-heading" className="news-banner__link">
      Explore the vision →
    </a>
  </div>
</section>

{/* ===========================
    CSRA Veterans Cemetery Vision Feature
=========================== */}
<section
  className="cemetery-feature card"
  aria-labelledby="cemetery-heading"
>
  <div className="section-kicker">A Vision for Veterans and Families</div>

  <div className="cemetery-feature__header">
    <div>
      <h3 id="cemetery-heading">
        The Future Georgia Veterans Memorial Cemetery - Augusta
      </h3>
      <p className="muted">
        A long-awaited place of honor, remembrance, and reflection is being
        envisioned for veterans and families across the Central Savannah River
        Area.
      </p>
    </div>
  </div>

  <div className="cemetery-feature__grid">
    <div className="cemetery-feature__media">
      {hasCemeteryEmbed ? (
        <div className="cemetery-feature__video">
          <iframe
            src={CEMETERY_MEDIA_EMBED_URL}
            title="Augusta Veterans Cemetery coverage"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        
        <article className="cemetery-media-card">
  <div className="cemetery-media-card__eyebrow">
    The Vision
  </div>

  <h4>A place of honor close to home</h4>

  <p>
    The future Georgia Veterans Memorial Cemetery - Augusta represents a
    meaningful step toward giving veterans and families across the CSRA a
    peaceful place for remembrance, reflection, and dignity.
  </p>

  <p>
    DAV Chapter 18 is proud to help share awareness of this important regional
    vision as it continues to move forward.
  </p>

  <div className="cemetery-feature__actions">
    <a
      href={CSRA_CEMETERY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="secondary-link-button"
    >
      Visit the Official Cemetery Website
    </a>
  </div>
</article>
         
          
      )}
    </div>

    <div className="cemetery-feature__content">
      <p>
        For generations, veterans and military families throughout the CSRA have
        served our nation with courage, sacrifice, and distinction. This future
        cemetery represents more than a project — it represents a lasting
        commitment to honor their service close to home.
      </p>

      <p>
        The vision for the cemetery includes a dignified final resting place for
        veterans and eligible family members, along with a peaceful setting
        where families, fellow veterans, and the community can gather, reflect,
        and remember.
      </p>

      <p>
        DAV Chapter 18 is proud to help share awareness of this meaningful
        regional effort and encourage our community to learn more about the
        vision taking shape for Augusta and the broader CSRA.
      </p>

      <div className="cemetery-feature__actions">
        <a
          href={CSRA_CEMETERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Learn More About the Vision
        </a>

        <a
          href={CEMETERY_2026_ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-link-button"
        >
          Read Latest Coverage
        </a>

        <a
          href={CEMETERY_2021_ARTICLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-link-button"
        >
          View 2021 WRDW Story
        </a>
      </div>
    </div>
  </div>

  <div className="cemetery-stats">
    {cemeteryStats.map((item) => (
      <div className="cemetery-stat" key={item.label}>
        <span className="cemetery-stat__label">{item.label}</span>
        <strong>{item.value}</strong>
      </div>
    ))}
  </div>
</section>

          


        {/* ===========================
            Why This Matters
        =========================== */}
        <section
          className="cemetery-history card"
          aria-labelledby="cemetery-history-heading"
        >
          <div className="cemetery-history__intro">
            <div>
              <div className="section-kicker">Why This Matters</div>
              <h3 id="cemetery-history-heading">
                More than a project — a promise to veterans and their families
              </h3>
              <p className="cemetery-history__lead">
                This effort reflects years of advocacy, community commitment,
                and a shared belief that veterans in the Augusta area deserve a
                place of honor close to home.
              </p>
            </div>

            <div className="cemetery-history__callout">
              <span className="cemetery-history__callout-label">
                Community impact
              </span>
              <p>
                A local veterans cemetery would create a lasting place of
                remembrance for generations of families throughout the CSRA.
              </p>
            </div>
          </div>

          <div className="cemetery-history__grid">
            <article className="timeline-card">
              <div className="timeline-card__year">Then</div>
              <h4>Community leaders and veterans helped carry the vision</h4>
              <p>
                Earlier local coverage showed how much planning, visibility, and
                continued advocacy went into bringing a state veterans cemetery
                to Augusta. Those efforts helped keep the need in front of the
                public and local leadership.
              </p>
              <a
                href={CEMETERY_2021_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Read the earlier story →
              </a>
            </article>

            <article className="timeline-card timeline-card--featured">
              <div className="timeline-card__year">Now</div>
              <h4>The vision is moving closer to reality</h4>
              <p>
                More recent reporting points to major forward movement. What was
                once an aspiration for this area is now becoming one of the most
                significant veteran-focused developments in the region.
              </p>
              <a
                href={CEMETERY_2026_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Read the latest update →
              </a>
            </article>
          </div>
        </section>

        {/* ===========================
            Fundraiser Highlights
        =========================== */}
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
            {FUNDRAISER_HIGHLIGHTS.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className="photo-lightbox-trigger"
                onClick={() => openLightbox(index)}
                aria-label={`Open fundraiser photo ${photo.id}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="photo-highlights__img"
                />
              </button>
            ))}
          </div>
        </section>

        {/* ===========================
            Christmas Highlights
        =========================== */}
        <section
          className="photo-highlights card"
          aria-labelledby="xmas-heading"
        >
          <div className="photo-highlights__header">
            <div>
              <h3 id="xmas-heading">Christmas Party Highlights</h3>
              <p className="muted">
                A few moments from a special time of fellowship and celebration.
              </p>
            </div>

            <Link
              to="/gallery/christmas-party"
              className="photo-highlights__link"
            >
              View full album →
            </Link>
          </div>

          <div className="photo-highlights__grid">
            {CHRISTMAS_HIGHLIGHTS.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="photo-highlights__img"
              />
            ))}
          </div>
        </section>

        {/* ===========================
            Meetings + Service Office
        =========================== */}
        <div className="info-sections">
          <section className="meetings card" aria-labelledby="meetings-heading">
            <h3 id="meetings-heading">Monthly Meetings</h3>
            <p>
              <span aria-hidden="true">📅 </span>
              Every 4th Saturday of the month
            </p>
            <p>
              <span aria-hidden="true">📍 </span>
              Venue: <strong>Paine College Chapel</strong>, 15th St., Augusta, GA
            </p>
            <p>
              <span aria-hidden="true">🕒 </span>
              Time: 10:00 AM
            </p>
          </section>

          <section className="location card" aria-labelledby="office-heading">
            <h3 id="office-heading">Service Office</h3>
            <p>
              <span aria-hidden="true">📍 </span>
              <strong>Charlie Norwood VA Medical Center</strong>, Room GA126
            </p>
            <address className="address">
              1 Freedom Way, Augusta, GA 30904
            </address>
            <p>
              This is the Chapter 18 DAV Service Office on the ground floor of
              the Uptown VA.
            </p>
            <p>
              <span aria-hidden="true">🕒 </span>
              Hours: Monday–Thursday, 8:00 AM–12:00 PM
            </p>
          </section>
        </div>

        {/* ===========================
            Get VA Buddy Banner
        =========================== */}
        <section
          className="getvabuddy-banner card"
          aria-labelledby="buddy-heading"
        >
          <a
            href="https://getvabuddy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="getvabuddy-banner__link"
          >
            <img
              src={BUDDY_LOGO_SRC}
              alt="Get VA Buddy logo"
              className="buddy-logo"
              loading="lazy"
              decoding="async"
            />

            <div className="getvabuddy-banner__text">
              <strong id="buddy-heading">Helpful VA Resource: Get VA Buddy</strong>
              <span>
                Visit Get VA Buddy for simple help navigating VA forms and
                benefits.
              </span>
            </div>

            <span className="getvabuddy-banner__cta">Visit →</span>
          </a>
        </section>

        {/* ===========================
            Bottom Image
        =========================== */}
        <div className="golden-image-container">
          <img
            src={GOLDEN_IMAGE_SRC}
            alt="DAV Chapter 18 members standing together"
            className="golden-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </main>

      {/* ===========================
          Lightbox
      =========================== */}
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