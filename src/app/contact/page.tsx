import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Meridian Wayfinding to discuss a bespoke wayfinding project for a university, hospital, airport or stadium.',
  keywords: ['contact wayfinding supplier', 'bespoke signage quote UK'],
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/contact',
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Meridian Wayfinding',
    url: 'https://www.meridianwayfinding.co.uk/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Meridian Wayfinding',
      telephone: '+44 20 8629 2999',
      email: 'info@meridianwayfinding.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6 Blenheim Court',
        addressLocality: 'Welwyn Garden City',
        postalCode: 'AL7 1AD',
        addressCountry: 'GB',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero" style={{ padding: '80px 24px 60px' }}>
        <div className="hero-inner">
          <span className="bearing">Contact</span>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}>Start with a drawing, or start with a question.</h1>
          <p className="lead">
            Whichever stage you're at — early concept, an existing architect's spec, or a live tender — tell us about the project
            and we'll come back with a straight answer.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="model">
            <div>
              <ContactForm />
            </div>
            <div>
              <div className="spec-card" style={{ marginBottom: '24px' }}>
                <span className="bearing">Direct contact</span>
                <div className="spec-row">
                  <span>Email</span>
                  <span>
                    <a href="mailto:info@meridianwayfinding.co.uk" style={{ color: 'var(--ink)' }}>
                      info@meridianwayfinding.co.uk
                    </a>
                  </span>
                </div>
                <div className="spec-row">
                  <span>Phone</span>
                  <span>
                    <a href="tel:+442086292999" style={{ color: 'var(--ink)' }}>
                      +44 (0)20 8629 2999
                    </a>
                  </span>
                </div>
                <div className="spec-row">
                  <span>Address</span>
                  <span>6 Blenheim Court, Welwyn Garden City, AL7 1AD</span>
                </div>
                <div className="spec-row">
                  <span>Coverage</span>
                  <span>United Kingdom</span>
                </div>
                <div className="spec-row">
                  <span>Response time</span>
                  <span>Within 2 working days</span>
                </div>
              </div>
              <div className="spec-card">
                <span className="bearing">Already have a drawing?</span>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.7, marginTop: '12px' }}>
                  Attach it to your email directly and we'll come back with an honest view on cost, materials and lead time — no
                  obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
