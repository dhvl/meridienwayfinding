import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h5>Meridian Wayfinding</h5>
            <p style={{ maxWidth: '280px', color: 'var(--slate)' }}>
              Bespoke wayfinding design and manufacture for institutional buildings, working directly to architects' specifications.
            </p>
          </div>
          <div>
            <h5>Site</h5>
            <Link href="/capability">Capability</Link>
            <Link href="/sectors">Sectors</Link>
            <Link href="/process">Process</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h5>Sectors</h5>
            <Link href="/sectors">Universities</Link>
            <Link href="/sectors">Hospitals</Link>
            <Link href="/sectors">Airports</Link>
            <Link href="/sectors">Stadiums</Link>
            <Link href="/contact">+ your building type</Link>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="mailto:info@meridianwayfinding.co.uk">info@meridianwayfinding.co.uk</a>
            <a href="tel:+442086292999">+44 (0)20 8629 2999</a>
            <p>6 Blenheim Court, Welwyn Garden City, AL7 1AD</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Meridian Wayfinding. Part of the Herts Signs &amp; Graphics group, established 1993.</p>
          <p>N 51.8° · W 0.2°</p>
        </div>
      </div>
    </footer>
  );
}
