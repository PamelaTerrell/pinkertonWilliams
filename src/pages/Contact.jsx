import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
  <p className="contact-eyebrow">Contact DAV Chapter 18</p>

  <h1>Send Us a Message or Question</h1>

  <p className="contact-intro">
    Have a question about DAV Chapter 18, membership, upcoming events,
    volunteering, or ways to support local veterans? Use the form below
    and someone from the chapter will follow up when possible.
  </p>

  <div className="contact-email-card">
    <div className="contact-email-icon" aria-hidden="true">
      ✉
    </div>

    <div>
      <span className="contact-email-label">Email DAV Chapter 18</span>

      <a href="mailto:chapter18dav@pinkertonwilliams.org">
        chapter18dav@pinkertonwilliams.org
      </a>
    </div>
  </div>
</section>

      <section className="contact-form-section card">
        <form
          className="contact-form"
          action="https://formspree.io/f/mnjkaayy"
          method="POST"
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional"
            />
          </div>

          <div className="form-row">
            <label htmlFor="topic">What is your message about?</label>
            <select id="topic" name="topic" defaultValue="General Question">
              <option>General Question</option>
              <option>Membership</option>
              <option>Volunteering</option>
              <option>Upcoming Events</option>
              <option>Veteran Support</option>
              <option>Donations or Fundraisers</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              placeholder="Type your message or question here..."
              required
            />
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New message from DAV Chapter 18 website"
          />

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}