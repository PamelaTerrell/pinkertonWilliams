import React from 'react';

function Membership() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Membership – DAV Chapter 18 Pinkerton-Williams
      </h1>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src="/AugustMembership.jpg"   // 👈 file should be in /public
          alt="August Membership Drawing Winner"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        />
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#555' }}>
          Congratulations to our August meeting drawing winner!
        </p>
      </div>

      <section style={{ lineHeight: 1.6 }}>
        <h2>Why Join DAV?</h2>
        <p>
          Disabled American Veterans (DAV) is a nonprofit charity that provides a lifetime of support
          for veterans of all generations. By joining <strong>Chapter 18 Pinkerton-Williams</strong> in Augusta, GA,
          you’ll become part of a community dedicated to ensuring our nation’s heroes and their families
          can access the full range of benefits available to them.
        </p>

        <h2>Membership Benefits</h2>
        <ul>
          <li>Assistance from certified DAV Service Officers with VA claims</li>
          <li>Fellowship and support from veterans who share your experiences</li>
          <li>Opportunities to volunteer and give back to our veteran community</li>
          <li>Regular chapter meetings and events, including recognition programs and drawings</li>
        </ul>

        <h2>How to Join</h2>
        <p>
          Becoming a member is easy! You can apply online through the national DAV website or
          join directly through our chapter.
        </p>
        <p>
          👉 <a href="https://www.dav.org/membership/join-dav/" target="_blank" rel="noopener noreferrer">
            Click here to join DAV online
          </a>
        </p>
        <p>
          When signing up, be sure to select <strong>Chapter 18 Pinkerton-Williams (Augusta, GA)</strong> as your home chapter.
        </p>
      </section>
    </div>
  );
}

export default Membership;
