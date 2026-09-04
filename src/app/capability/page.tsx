import React from 'react';
import type { Metadata } from 'next';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Capability',
  description:
    'Materials, manufacturing capability and compliance management for bespoke architectural wayfinding — aluminium, ACM, stainless steel, tactile and illuminated signage systems.',
  keywords: [
    'wayfinding manufacturing',
    'ACM signage',
    'aluminium signage',
    'DDA compliant signage',
    'fire rated signage',
    'tactile braille signage',
  ],
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/capability',
  },
};

export default function CapabilityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bespoke wayfinding design and manufacture',
    provider: { '@type': 'Organization', name: 'Meridian Wayfinding' },
    areaServed: 'GB',
    description: 'Design translation, manufacture and compliance management for bespoke architectural wayfinding systems.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero" style={{ padding: '80px 24px 60px' }}>
        <div className="hero-inner">
          <span className="bearing">Capability</span>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 52px)' }}>
            From architect's drawing to installed, compliant signage.
          </h1>
          <p className="lead">
            Everything between a detail design drawing and a finished building — design translation, material sourcing,
            manufacture, compliance, and installation — managed as one service.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="model">
            <div className="model-copy">
              <span className="bearing">Design translation</span>
              <h2 style={{ marginTop: '16px', marginBottom: '24px' }}>
                We speak both languages — architectural intent and manufacturing reality.
              </h2>
              <p>
                An architect's drawing communicates intent: dimensions, materials, finishes, fixing method. Turning that into a
                buildable, compliant, cost-effective product takes a team that understands both sides — what the drawing is asking
                for, and what it actually takes to produce it at the quality and price a project needs.
              </p>
              <p>
                We work directly from your detail design drawings, or help develop a specification where one doesn't yet exist, then
                manage every step from sample to sign-off to full production.
              </p>
            </div>
            <div className="spec-card">
              <span className="bearing">What we manage</span>
              <div className="spec-row">
                <span>Material sourcing</span>
                <span>Matched to spec</span>
              </div>
              <div className="spec-row">
                <span>Sample production</span>
                <span>Before full run</span>
              </div>
              <div className="spec-row">
                <span>Compliance docs</span>
                <span>Fire / DDA / structural</span>
              </div>
              <div className="spec-row">
                <span>Quality control</span>
                <span>Per batch</span>
              </div>
              <div className="spec-row">
                <span>Site installation</span>
                <span>Scheduled fitting</span>
              </div>
              <div className="spec-row">
                <span>Handover</span>
                <span>Full documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">Materials &amp; finishes</span>
            <h2>Built in the materials your specification calls for.</h2>
            <p>
              High-end buildings are specified in real materials — stone, metal, leather, textile — not just laminate and vinyl. We
              work in the same palette as the interior design, so wayfinding reads as part of the building rather than a retrofit onto
              it.
            </p>
          </div>
          <div className="cap-list">
            <div className="cap-item">
              <h4>Metals</h4>
              <p>Brass, bronze, stainless steel and aluminium — polished, brushed, satin, patinated or powder coated to any RAL or bespoke colour match.</p>
            </div>
            <div className="cap-item">
              <h4>Stone</h4>
              <p>Marble, granite, slate and composite stone, as veneer or solid panel, for signage integrated directly into the architectural fabric.</p>
            </div>
            <div className="cap-item">
              <h4>Leather</h4>
              <p>Wrapped, stitched or embossed leather panels and inserts, to any hide, colour and stitch specification for hospitality and premium interiors.</p>
            </div>
            <div className="cap-item">
              <h4>Fabric &amp; textile</h4>
              <p>Upholstered, acoustic-backed or printed textile panels, colour and weave matched to interior schemes.</p>
            </div>
            <div className="cap-item">
              <h4>Acrylic &amp; laminates</h4>
              <p>Printed, engraved or layered acrylic for illuminated and directory signage.</p>
            </div>
            <div className="cap-item">
              <h4>Tactile &amp; braille</h4>
              <p>DDA and ADA-equivalent compliant room identification, tested to the relevant standard, in any of the above finishes.</p>
            </div>
            <div className="cap-item">
              <h4>Illuminated systems</h4>
              <p>LED-backlit and edge-lit signage where visibility and evacuation requirements demand it.</p>
            </div>
            <div className="cap-item">
              <h4>Printed graphics</h4>
              <p>Digitally printed or self-adhesive vinyl graphics, colour-matched to any brand specification.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="bearing">Compliance</span>
            <h2>Documentation your facilities team can actually rely on.</h2>
            <p>
              Institutional buildings carry compliance requirements that generic signage suppliers often treat as an afterthought. We
              treat them as part of the spec.
            </p>
          </div>
          <div className="cap-list">
            <div className="cap-item">
              <h4>Fire rating</h4>
              <p>Confirmed appropriate to the building classification and location within it.</p>
            </div>
            <div className="cap-item">
              <h4>DDA / accessibility</h4>
              <p>Tactile and visual contrast requirements met and documented per current standards.</p>
            </div>
            <div className="cap-item">
              <h4>Structural fixing</h4>
              <p>Fixing method engineered to match the actual wall, ceiling or substrate condition on site.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Send us a drawing — we'll tell you what's achievable."
        description="No obligation, no catalogue pitch. Just a straight answer on cost, materials, and timeline."
        buttonText="Start a project →"
        buttonHref="/contact"
      />
    </>
  );
}
