import React from 'react';
import Link from 'next/link';

interface CtaBandProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBand({
  heading = "Bring us your architect's drawing.",
  description = "Whether it's one building or a campus-wide rollout, we'll tell you plainly what's achievable, at what cost, and on what timeline.",
  buttonText = "Start a project →",
  buttonHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <span className="bearing" style={{ color: 'var(--gold)' }}>Get in touch</span>
        <h2 style={{ marginTop: '16px' }}>{heading}</h2>
        <p>{description}</p>
        <Link href={buttonHref} className="btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
