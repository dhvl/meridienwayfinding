import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Bespoke Wayfinding Systems for Architects & Institutions',
  description:
    "Meridian Wayfinding designs and manufactures bespoke wayfinding and signage systems for universities, hospitals, airports and stadiums — built directly to your architect's specification.",
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/',
  },
};

export default function HomePage() {
  const jsonLdProfessional = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Meridian Wayfinding',
    description: "Bespoke wayfinding and signage design-to-manufacture service for institutional buildings, working directly to architects' specifications.",
    url: 'https://www.meridianwayfinding.co.uk/',
    telephone: '+44 20 8629 2999',
    email: 'info@meridianwayfinding.co.uk',
    areaServed: 'GB',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 Blenheim Court',
      addressLocality: 'Welwyn Garden City',
      postalCode: 'AL7 1AD',
      addressCountry: 'GB',
    },
    knowsAbout: [
      'Wayfinding design',
      'Architectural signage',
      'DDA compliant signage',
      'Room signage systems',
      'Directional signage',
      'Donor recognition plaques',
      'Corporate and commercial wayfinding',
      'Heritage and hospitality signage',
    ],
    audience: {
      '@type': 'Audience',
      audienceType:
        'Architects, estates and facilities teams, and any institutional or commercial building owner — including universities, hospitals, airports, stadiums, corporate HQs, retail, hospitality, transport and heritage sites',
    },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke wayfinding design translation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architectural signage manufacture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation and site survey' } },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you only work with universities, hospitals, airports and stadiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — those four are where our compliance and durability expertise runs deepest, but we work with any institutional or commercial building with a genuine wayfinding challenge, including corporate offices, retail, hospitality, transport hubs and heritage sites.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work from our own design, or do we choose from a catalogue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Your architect's drawing is the brief. We build to your exact spec — materials, finishes, dimensions and fixing method — rather than asking you to fit a standard product range.",
        },
      },
      {
        '@type': 'Question',
        name: 'What materials can you work in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Metal, stone, leather, fabric and printed graphics, plus tactile, braille and illuminated systems, matched to any RAL or reference finish.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle installation as well as manufacture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We manage material sourcing, sample sign-off, compliance documentation and site installation, so you have one point of contact from spec to installed sign.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessional) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <section className="hero">
        <div className="hero-inner">
          <span className="bearing">Bespoke wayfinding · Design to manufacture</span>
          <h1>
            Wayfinding built to <em>your</em> architect's drawing — not our catalogue.
          </h1>
          <p className="lead">
            We work directly with architects and estates teams to design, manufacture and install bespoke wayfinding systems for
            universities, hospitals, airports and stadiums — buildings where getting it wrong isn't an option.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Start a project →
            </Link>
            <Link href="/capability" className="btn-secondary">
              See our capability
            </Link>
          </div>
        </div>
        <svg className="compass-mark" viewBox="0 0 300 300" fill="none" aria-hidden="true">
          <circle cx="150" cy="150" r="121" stroke="#14213D" strokeWidth="3" />
          <path d="M150 55 L163 137 L150 150 L137 137 Z" fill="#14213D" />
          <path d="M150 245 L163 163 L150 150 L137 163 Z" fill="#14213D" />
          <path d="M55 150 L137 137 L150 150 L137 163 Z" fill="#14213D" />
          <path d="M245 150 L163 137 L150 150 L163 163 Z" fill="#14213D" />
        </svg>
      </section>

      <section>
        <div className="wrap">
          <div className="model">
            <div className="model-copy">
              <span className="bearing">The model</span>
              <h2 style={{ marginTop: '16px', marginBottom: '24px' }}>A drawing goes in. A building's wayfinding comes out.</h2>
              <p>
                Most signage companies sell you their range and ask you to fit your project around it. We work the other way round:
                your architect's detail drawing — dimensions, materials, finishes, fixing method — is the brief, and everything we
                produce is built to match it exactly.
              </p>
              <p>
                That means <strong>consistent visual language across every building on a site</strong>, even as different phases,
                contractors and years pass — because the specification lives with us, not with whoever happened to win the last contract.
              </p>
              <p>
                We manage the full path from spec to installed sign: material sourcing, sample sign-off, compliance documentation, and
                site fitting — so your team has one point of contact, not five.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">Typical spec inputs</span>
              <div className="spec-row">
                <span>Panel material</span>
                <span>ACM / Aluminium / Acrylic</span>
              </div>
              <div className="spec-row">
                <span>Frame finish</span>
                <span>RAL powder coat, to spec</span>
              </div>
              <div className="spec-row">
                <span>Tactile / braille</span>
                <span>DDA / ADA equivalent</span>
              </div>
              <div className="spec-row">
                <span>Fixing method</span>
                <span>Client / architect specified</span>
              </div>
              <div className="spec-row">
                <span>Fire rating</span>
                <span>Confirmed per building class</span>
              </div>
              <div className="spec-row">
                <span>Lead time</span>
                <span>Quoted per project scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">Sectors</span>
            <h2>Four sectors we know inside out. Not the only ones we work in.</h2>
            <p>
              Wayfinding for a hospital corridor and wayfinding for a stadium concourse solve entirely different problems — these
              four are where our compliance and durability expertise runs deepest. But the same spec-led model applies to any building
              where people need to find their way: corporate HQ, retail, hospitality, transport, heritage and places of worship included.
            </p>
          </div>
          <div className="sector-grid">
            <div className="sector-cell">
              <span className="sector-deg">N · 000°</span>
              <h3>Universities</h3>
              <p>Campus-wide consistency across buildings and phases, room identification systems, and donor recognition signage.</p>
            </div>
            <div className="sector-cell">
              <span className="sector-deg">E · 090°</span>
              <h3>Hospitals</h3>
              <p>Cleanable, infection-control-appropriate finishes, clear wayfinding under pressure, and full accessibility compliance.</p>
            </div>
            <div className="sector-cell">
              <span className="sector-deg">S · 180°</span>
              <h3>Airports</h3>
              <p>High-traffic durability, multi-language and pictogram systems, and wayfinding that holds up to 24-hour operation.</p>
            </div>
            <div className="sector-cell">
              <span className="sector-deg">W · 270°</span>
              <h3>Stadiums</h3>
              <p>Crowd-flow directional systems, weather-resistant exterior materials, and large-scale concourse signage.</p>
            </div>
          </div>
          <p style={{ marginTop: '28px', fontSize: '14px', color: 'var(--slate)' }}>
            Building type isn't listed here?{' '}
            <Link href="/sectors" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              See our full approach to sectors →
            </Link>{' '}
            — or just{' '}
            <Link href="/contact" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              get in touch
            </Link>{' '}
            and tell us about the project.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">How we work</span>
            <h2>Four steps, start to installed.</h2>
          </div>
          <div className="process-strip">
            <div className="process-step">
              <span className="sector-deg">000°</span>
              <h4>Brief &amp; drawing review</h4>
              <p>We take your architect's spec — or help develop one — and confirm materials, finishes and compliance requirements.</p>
            </div>
            <div className="process-step">
              <span className="sector-deg">090°</span>
              <h4>Sample &amp; sign-off</h4>
              <p>A physical sample matched to your exact finish spec, before anything goes into full production.</p>
            </div>
            <div className="process-step">
              <span className="sector-deg">180°</span>
              <h4>Manufacture</h4>
              <p>Production managed against your spec and timeline, with quality and compliance documentation at every stage.</p>
            </div>
            <div className="process-step">
              <span className="sector-deg">270°</span>
              <h4>Installation</h4>
              <p>Site survey, scheduled fitting, and handover documentation for your facilities team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">Capability</span>
            <h2>Materials and finishes we work in.</h2>
            <p>
              Wayfinding for a high-end building has to match the fabric of the building itself — not just survive next to it. We work
              in the same material language as the architects and interior designers we support.
            </p>
          </div>
          <div className="cap-list">
            <div className="cap-item">
              <h4>Metals</h4>
              <p>Brass, bronze, stainless steel and aluminium — polished, brushed, patinated or powder coated to any RAL or matched reference.</p>
            </div>
            <div className="cap-item">
              <h4>Stone</h4>
              <p>Marble, granite and slate veneers or solid panels, for signage that reads as part of the architecture, not applied to it.</p>
            </div>
            <div className="cap-item">
              <h4>Leather</h4>
              <p>Wrapped, stitched or embossed leather panels and inserts for hospitality and premium interiors.</p>
            </div>
            <div className="cap-item">
              <h4>Fabric &amp; textile</h4>
              <p>Upholstered, acoustic-backed or printed textile panels, colour-matched to interior schemes.</p>
            </div>
            <div className="cap-item">
              <h4>Tactile &amp; braille</h4>
              <p>DDA and ADA-equivalent compliant room identification, in any of the above finishes.</p>
            </div>
            <div className="cap-item">
              <h4>Illuminated systems</h4>
              <p>LED-backlit and edge-lit signage where visibility requirements demand it.</p>
            </div>
            <div className="cap-item">
              <h4>Printed graphics</h4>
              <p>Digitally printed or applied vinyl graphics to any brand specification.</p>
            </div>
            <div className="cap-item">
              <h4>Fixing &amp; substrate</h4>
              <p>Engineered to match structural and surface conditions on site.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">Questions</span>
            <h2>Common questions, answered plainly.</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Do you only work with universities, hospitals, airports and stadiums?</h3>
              <p>
                No — those four are where our compliance and durability expertise runs deepest, but we work with any institutional or
                commercial building with a genuine wayfinding challenge, including corporate offices, retail, hospitality, transport hubs
                and heritage sites.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you work from our own design, or do we choose from a catalogue?</h3>
              <p>
                Your architect's drawing is the brief. We build to your exact spec — materials, finishes, dimensions and fixing method —
                rather than asking you to fit a standard product range.
              </p>
            </div>
            <div className="faq-item">
              <h3>What materials can you work in?</h3>
              <p>
                Metal, stone, leather, fabric and printed graphics, plus tactile, braille and illuminated systems — matched to any RAL or
                reference finish.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you handle installation as well as manufacture?</h3>
              <p>
                Yes. We manage material sourcing, sample sign-off, compliance documentation and site installation, so you have one point of
                contact from spec to installed sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
