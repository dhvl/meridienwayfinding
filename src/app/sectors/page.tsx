import React from 'react';
import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Sectors | Universities, Hospitals, Airports, Stadiums & Beyond',
  description:
    'Bespoke wayfinding for universities, hospitals, airports and stadiums — plus any institutional or commercial building with a genuine wayfinding challenge, from corporate HQs to heritage sites.',
  keywords: [
    'university signage',
    'hospital wayfinding',
    'airport signage',
    'stadium wayfinding',
    'campus signage UK',
    'corporate wayfinding',
    'retail signage',
    'museum wayfinding',
    'transport hub signage',
    'bespoke wayfinding UK',
  ],
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/sectors',
  },
};

export default function SectorsPage() {
  return (
    <>
      <section className="hero" style={{ padding: '80px 24px 60px' }}>
        <div className="hero-inner">
          <span className="bearing">Sectors</span>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}>Four sectors we know inside out.</h1>
          <p className="lead">
            Wayfinding is never one-size-fits-all. Universities, hospitals, airports and stadiums are where our compliance and
            durability expertise runs deepest, and where the four profiles below apply directly. They're not the limit of what we do —
            the same design-to-manufacture model works for any institutional or commercial building with a genuine wayfinding
            challenge, whatever sector it sits in.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="model" style={{ marginBottom: '80px' }}>
            <div className="model-copy">
              <span className="sector-deg">N · 000°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Universities</h2>
              <p>
                Campuses grow in phases over decades, often through multiple contractors and refurbishment cycles. Without a
                maintained specification, visual consistency erodes building by building.
              </p>
              <p>
                We hold the specification centrally, so a new building or a refurbished one matches what's already on site — room
                identification, directional wayfinding, and donor or department recognition signage included.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">What matters most</span>
              <div className="spec-row">
                <span>Consistency</span>
                <span>Across phases &amp; years</span>
              </div>
              <div className="spec-row">
                <span>Room ID systems</span>
                <span>Scalable, campus-wide</span>
              </div>
              <div className="spec-row">
                <span>Donor recognition</span>
                <span>Bespoke plaque systems</span>
              </div>
              <div className="spec-row">
                <span>Refurb matching</span>
                <span>Spec held long-term</span>
              </div>
            </div>
          </div>

          <div className="model" style={{ marginBottom: '80px' }}>
            <div className="model-copy">
              <span className="sector-deg">E · 090°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Hospitals</h2>
              <p>
                Hospital wayfinding has to work for people under stress, often unfamiliar with the building, in a space that can't stop
                operating for installation. Finishes need to withstand clinical cleaning regimes without degrading.
              </p>
              <p>
                We specify materials that hold up to infection-control cleaning, and plan installation around live clinical operation,
                not against it.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">What matters most</span>
              <div className="spec-row">
                <span>Cleanable finishes</span>
                <span>Infection control rated</span>
              </div>
              <div className="spec-row">
                <span>Clarity under stress</span>
                <span>High-legibility design</span>
              </div>
              <div className="spec-row">
                <span>Live-site install</span>
                <span>Scheduled around clinical use</span>
              </div>
              <div className="spec-row">
                <span>Accessibility</span>
                <span>Full DDA compliance</span>
              </div>
            </div>
          </div>

          <div className="model" style={{ marginBottom: '80px' }}>
            <div className="model-copy">
              <span className="sector-deg">S · 180°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Airports</h2>
              <p>
                Airport signage runs continuously, is seen by visitors with no prior knowledge of the building, and often needs to
                work across multiple languages and pictogram systems simultaneously.
              </p>
              <p>
                We build for durability under 24-hour operation and high foot traffic, with wayfinding logic that holds up under time
                pressure.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">What matters most</span>
              <div className="spec-row">
                <span>24-hour durability</span>
                <span>High-traffic rated</span>
              </div>
              <div className="spec-row">
                <span>Multi-language</span>
                <span>Pictogram &amp; text systems</span>
              </div>
              <div className="spec-row">
                <span>First-time clarity</span>
                <span>No prior knowledge assumed</span>
              </div>
            </div>
          </div>

          <div className="model">
            <div className="model-copy">
              <span className="sector-deg">W · 270°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Stadiums</h2>
              <p>
                Stadium wayfinding manages crowd flow at scale — thousands of people moving through concourses in short windows, often
                outdoors and exposed to weather year-round.
              </p>
              <p>
                We design for large-scale visibility, crowd-flow logic, and materials that hold their finish through years of outdoor
                exposure.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">What matters most</span>
              <div className="spec-row">
                <span>Crowd-flow design</span>
                <span>Mass movement logic</span>
              </div>
              <div className="spec-row">
                <span>Weather resistance</span>
                <span>Outdoor-rated materials</span>
              </div>
              <div className="spec-row">
                <span>Scale</span>
                <span>Concourse-level visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Have a building in mind?"
        description="Whether it's one of these four sectors or a completely different brief, tell us what you're working with."
        buttonText="Start a project →"
        buttonHref="/contact"
      />
    </>
  );
}
