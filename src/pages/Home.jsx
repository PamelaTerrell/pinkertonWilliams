import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Home.css";
import "./CemeteryAnnouncement.css";

// ==============================
// Assets
// ==============================
const BUDDY_LOGO_SRC = "/getvabuddy.png";
const GOLDEN_IMAGE_SRC = "/golden.jpeg";
const CEMETERY_IMAGE_SRC = "/cemetery.png";

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
const GROUNDBREAKING_EVENT_URL =
  "https://veterans.georgia.gov/events/2026-11-13/gvmc-augusta-groundbreaking-ceremony";

const CEMETERY_2026_ARTICLE_URL =
  "https://www.wrdw.com/2026/02/07/augusta-veterans-cemetery-receives-150-million-federal-funding/";

const CEMETERY_2021_ARTICLE_URL =
  "https://www.wrdw.com/2021/06/02/city-leaders-and-veterans-tour-milledgeville-cemetery-one-step-closer-to-veteran-cemetery-in-augusta/";

// Optional:
// Add a verified embeddable URL later if you find one.
const CEMETERY_MEDIA_EMBED_URL = "";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);

  const selectedImage =
    selectedIndex !== null ? FUNDRAISER_HIGHLIGHTS[selectedIndex] : null;
  const isLightboxOpen = selectedIndex !== null;

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

  const openLightbox = (index, event) => {
    openerRef.current = event.currentTarget;
    setSelectedIndex(index);
  };
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
    if (!isLightboxOpen) return undefined;

    const dialog = dialogRef.current;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyPaddingRight = Number.parseFloat(
      window.getComputedStyle(body).paddingRight
    );

    closeButtonRef.current?.focus();

    const backgroundElements = Array.from(body.children)
      .filter(
        (element) =>
          element !== dialog &&
          !["SCRIPT", "STYLE", "LINK"].includes(element.tagName)
      )
      .map((element) => ({
        element,
        inertValue: element.inert,
        hadInertAttribute: element.hasAttribute("inert"),
        inertAttributeValue: element.getAttribute("inert"),
        hadAriaHidden: element.hasAttribute("aria-hidden"),
        ariaHiddenValue: element.getAttribute("aria-hidden"),
      }));

    backgroundElements.forEach(({ element }) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setSelectedIndex(null);
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? FUNDRAISER_HIGHLIGHTS.length - 1 : prev - 1
        );
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === FUNDRAISER_HIGHLIGHTS.length - 1 ? 0 : prev + 1
        );
        return;
      }

      if (e.key !== "Tab" || !dialog) return;

      const focusableElements = Array.from(
        dialog.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (element) =>
          !element.hidden &&
          element.getAttribute("aria-hidden") !== "true" &&
          element.getClientRects().length > 0
      );

      if (focusableElements.length === 0) {
        e.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (e.shiftKey) {
        if (activeElement === firstElement || !dialog.contains(activeElement)) {
          e.preventDefault();
          lastElement.focus();
        }
      } else if (
        activeElement === lastElement ||
        !dialog.contains(activeElement)
      ) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;

      backgroundElements.forEach(
        ({
          element,
          inertValue,
          hadInertAttribute,
          inertAttributeValue,
          hadAriaHidden,
          ariaHiddenValue,
        }) => {
          element.inert = inertValue;

          if (hadInertAttribute) {
            element.setAttribute("inert", inertAttributeValue ?? "");
          } else {
            element.removeAttribute("inert");
          }

          if (hadAriaHidden) {
            element.setAttribute("aria-hidden", ariaHiddenValue ?? "");
          } else {
            element.removeAttribute("aria-hidden");
          }
        }
      );

      if (openerRef.current?.isConnected) {
        openerRef.current.focus({ preventScroll: true });
      }
    };
  }, [isLightboxOpen]);

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
            Official cemetery groundbreaking announcement
        =========================== */}
        <section className="groundbreaking-announcement" aria-labelledby="groundbreaking-heading">
          <div className="groundbreaking-announcement__eyebrow">
            Upcoming Event · Community Announcement
          </div>
          <div className="groundbreaking-announcement__layout">
            <div className="groundbreaking-announcement__main">
              <h2 id="groundbreaking-heading">
                Augusta Veterans Cemetery Groundbreaking Ceremony
              </h2>
              <p className="groundbreaking-announcement__lead">
  A milestone years in the making. Join the Georgia Department of Veterans
  Service as our community marks the groundbreaking of the new Georgia
  Veterans Memorial Cemetery – Augusta.
</p>

<p>
  DAV Pinkerton-Williams Chapter 18 is pleased to share this important
  occasion with local veterans, families, and supporters.
</p>


<figure className="groundbreaking-announcement__figure">
  <img
    src="/images/augusta-groundbreaking.png"
    alt="Illustration of ceremonial golden shovels and American flags symbolizing the upcoming veterans cemetery groundbreaking"
    className="groundbreaking-announcement__image"
    loading="lazy"
    decoding="async"
  />
  <figcaption className="groundbreaking-announcement__caption">
    Illustrative image commemorating the upcoming groundbreaking.
  </figcaption>
</figure>


<div className="groundbreaking-announcement__actions">
  <a
    href="https://veterans.georgia.gov/events/2026-11-13/gvmc-augusta-groundbreaking-ceremony"
    target="_blank"
    rel="noopener noreferrer"
    className="groundbreaking-announcement__button"
  >
    Official Event Details & RSVP ↗
  </a>
</div>
            </div>
            <div className="groundbreaking-announcement__details" aria-label="Ceremony details">
              <div>
                <span className="groundbreaking-announcement__label">Date</span>
                <strong>Friday, November 13, 2026</strong>
              </div>
              <div>
                <span className="groundbreaking-announcement__label">Time</span>
                <strong>10:30–11:30 a.m. EST</strong>
              </div>
              <div>
                <span className="groundbreaking-announcement__label">Location</span>
                <strong>3780 Byrd Road</strong>
                <span>Augusta, GA 30906</span>
              </div>
              <p className="groundbreaking-announcement__note">
                Hosted by the Georgia Department of Veterans Service.
                Parking directions will be announced by the organizer.
              </p>
            </div>
          </div>
        </section>

        {/* ===========================
            CSRA Veterans Cemetery Vision Feature
        =========================== */}
        <section
          className="cemetery-feature card"
          aria-labelledby="cemetery-heading"
        >
          <div className="section-kicker">A Milestone for Veterans and Families</div>

          <div className="cemetery-feature__header">
            <div>
              <h3 id="cemetery-heading">
                Georgia Veterans Memorial Cemetery – Augusta
              </h3>
              <p className="muted">
                After years of community advocacy, the cemetery is approaching its
                November 13, 2026 groundbreaking — a meaningful milestone for
                veterans and families across the Central Savannah River Area.
              </p>
            </div>
          </div>

          <div className="cemetery-feature__grid">
            <div className="cemetery-feature__media">
              <img
                src={CEMETERY_IMAGE_SRC}
                alt="Peaceful symbolic veterans cemetery landscape with American flags"
                className="cemetery-feature__image"
                loading="lazy"
                decoding="async"
              />

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
                    The planned Georgia Veterans Memorial Cemetery – Augusta
                    represents a meaningful step toward giving veterans and
                    families across the CSRA a peaceful place for remembrance,
                    reflection, and dignity.
                  </p>

                  <p>
                    DAV Chapter 18 is proud to help share awareness of this
                    important regional project as it moves toward groundbreaking.
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
                For generations, veterans and military families throughout the
                CSRA have served our nation with courage, sacrifice, and
                distinction. This cemetery project represents more than a development
                — it represents a lasting commitment to honor their service
                close to home.
              </p>

              <p>
                The vision for the cemetery includes a dignified final resting
                place for veterans and eligible family members, along with a
                peaceful setting where families, fellow veterans, and the
                community can gather, reflect, and remember.
              </p>

              <p>
                DAV Chapter 18 is proud to share news of the upcoming
                groundbreaking and encourage our community to learn more about
                this important project for Augusta and the broader CSRA.
              </p>

              <div className="cemetery-feature__actions">
                <a
                  href={CSRA_CEMETERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Learn More About the Cemetery
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
              <h4>Groundbreaking scheduled for November 2026</h4>
              <p>
                The Georgia Department of Veterans Service has announced a
                groundbreaking ceremony for November 13, 2026. After years
                of advocacy, the cemetery is reaching an important milestone.
              </p>
              <a
                href={GROUNDBREAKING_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                View official groundbreaking details →
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
                onClick={(event) => openLightbox(index, event)}
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
              Venue: <strong>VFW 649</strong>, 2430 Windsor Spring Rd, Augusta,
              GA 30906
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
      {selectedImage &&
        createPortal(
          <div
            ref={dialogRef}
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
                ref={closeButtonRef}
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
          </div>,
          document.body
        )}
    </div>
  );
}
