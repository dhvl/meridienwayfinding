import React from 'react';
import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Process | From Drawing to Installed Signage',
  description:
    'A four-step process for bespoke architectural wayfinding: brief and drawing review, physical sample sign-off, manufacture, and site installation with full documentation.',
  keywords: ['wayfinding process', 'architectural signage manufacture', 'signage installation UK', 'wayfinding specification'],
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/process',
  },
};

export default function ProcessPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Meridian Wayfinding's design-to-installed process",
    description:
      'Four-step process for bespoke wayfinding: brief and drawing review, sample and sign-off, manufacture, and installation with full handover documentation.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Brief & drawing review',
        text: "We take your architect's spec — or help develop one — and confirm materials, finishes and compliance requirements.",
      },
      {
        '@type': 'HowToStep',
        name: 'Sample & sign-off',
        text: 'A physical sample matched to your exact finish spec, before anything goes into full production.',
      },
      {
        '@type': 'HowToStep',
        name: 'Manufacture',
        text: 'Production managed against your spec and timeline, with quality and compliance documentation at every stage.',
      },
      {
        '@type': 'HowToStep',
        name: 'Installation',
        text: 'Site survey, scheduled fitting, and handover documentation for your facilities team.',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero" style={{ padding: '80px 24px 60px' }}>
        <div className="hero-inner">
          <span className="bearing">Process</span>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}>Four steps, start to installed.</h1>
          <p className="lead">
            A clear, predictable path from first drawing to finished installation — with sign-off at every stage before commitment
            to the next.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="model" style={{ marginBottom: '72px' }}>
            <div className="model-copy">
              <span className="sector-deg">000°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Brief &amp; drawing review</h2>
              <p>
                We start with your architect's detail design drawing — or, if one doesn't exist yet, help develop the specification
                from your brief. Materials, finishes, dimensions, fixing method and compliance requirements are all confirmed before
                anything is costed.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">Typical duration</span>
              <div className="spec-row">
                <span>Initial review</span>
                <span>2–5 working days</span>
              </div>
              <div className="spec-row">
                <span>Output</span>
                <span>Confirmed spec &amp; quote</span>
              </div>
            </div>
          </div>

          <div className="model" style={{ marginBottom: '72px' }}>
            <div className="model-copy">
              <span className="sector-deg">090°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Sample &amp; sign-off</h2>
              <p>
                A physical sample, matched to your exact finish specification, goes to you or your architect for approval before any
                full production run begins. This is the stage where colour, material and finish are confirmed against the real thing,
                not a screen.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">Typical duration</span>
              <div className="spec-row">
                <span>Sample production</span>
                <span>Project dependent</span>
              </div>
              <div className="spec-row">
                <span>Output</span>
                <span>Approved physical sample</span>
              </div>
            </div>
          </div>

          <div className="model" style={{ marginBottom: '72px' }}>
            <div className="model-copy">
              <span className="sector-deg">180°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Manufacture</h2>
              <p>
                Production runs against the approved spec and sample, with quality control and compliance documentation generated at
                every stage — so your facilities team has a complete record, not just a finished product.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">Typical duration</span>
              <div className="spec-row">
                <span>Production</span>
                <span>Quoted per project scope</span>
              </div>
              <div className="spec-row">
                <span>Output</span>
                <span>Finished signage &amp; documentation</span>
              </div>
            </div>
          </div>

          <div className="model">
            <div className="model-copy">
              <span className="sector-deg">270°</span>
              <h2 style={{ marginTop: '12px', marginBottom: '20px' }}>Installation &amp; handover</h2>
              <p>
                Site survey confirms fixing conditions before install day. Fitting is scheduled around your building's operational
                constraints — around clinical hours, term dates, or event calendars — followed by full handover documentation for
                your facilities team.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">Typical duration</span>
              <div className="spec-row">
                <span>Site survey</span>
                <span>Prior to install</span>
              </div>
              <div className="spec-row">
                <span>Output</span>
                <span>Installed signage &amp; handover pack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to discuss your specification?"
        description="Send over whatever detail you have — concept sketch, architect's package, or tender spec."
        buttonText="Start a project →"
        buttonHref="/contact"
      />
    </>
  );
}
