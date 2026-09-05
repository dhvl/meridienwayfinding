'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const delta = Math.abs(scrollY - lastScrollY.current);
      lastScrollY.current = scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Increased base rotation speed (approx 2.5x faster: 0.75 multiplier)
          const baseRotation = scrollY * 0.75;
          // Add dynamic magnetic needle jitter/flicker proportional to scroll movement
          const jitter = (Math.random() - 0.5) * Math.min(delta * 0.6, 7.5);

          setRotation(baseRotation + jitter);
          ticking = false;
        });
        ticking = true;
      }

      // Settle needle when scrolling pauses/stops with a delicate magnetic settle vibration
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const finalScrollY = window.scrollY || window.pageYOffset || 0;
        setRotation(finalScrollY * 0.75);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <header>
      <div className="nav wrap">
        <Link href="/" className="brand" onClick={closeMenu}>
          <svg viewBox="0 0 720 220" className="brand-mark" role="img" aria-label="Meridian Wayfinding">
            <title>Meridian Wayfinding</title>
            <g transform="translate(10,25) scale(0.55)">
              <circle cx="150" cy="150" r="121" fill="none" stroke="#C6A15B" strokeWidth="3" />
              <g
                style={{
                  transformOrigin: '150px 150px',
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 0.08s cubic-bezier(0.15, 0.85, 0.35, 1.2)',
                  willChange: 'transform'
                }}
              >
                <g fill="#14213D">
                  <path d="M150 55 L163 137 L150 150 L137 137 Z" />
                  <path d="M150 245 L163 163 L150 150 L137 163 Z" />
                  <path d="M55 150 L137 137 L150 150 L137 163 Z" />
                  <path d="M245 150 L163 137 L150 150 L163 163 Z" />
                </g>
                <g fill="#C6A15B">
                  <path d="M150 95 L158 143 L150 150 L142 143 Z" />
                  <path d="M95 150 L143 142 L150 150 L143 158 Z" />
                </g>
              </g>
            </g>
            <text x="195" y="115" style={{ fontFamily: 'var(--ff-display)', fontWeight: 600, fontSize: '58px', fill: '#14213D', letterSpacing: '1px' }}>
              MERIDIAN
            </text>
            <text x="198" y="148" style={{ fontFamily: 'var(--ff-sans)', fontWeight: 400, fontSize: '23px', fill: '#C6A15B', letterSpacing: '7px' }}>
              WAYFINDING
            </text>
          </svg>
        </Link>
        <nav className={`links ${menuOpen ? 'open' : ''}`}>
          <Link href="/capability" className={pathname === '/capability' ? 'active' : ''} onClick={closeMenu}>
            Capability
          </Link>
          <Link href="/sectors" className={pathname === '/sectors' ? 'active' : ''} onClick={closeMenu}>
            Sectors
          </Link>
          <Link href="/process" className={pathname === '/process' ? 'active' : ''} onClick={closeMenu}>
            Process
          </Link>
          <Link href="/contact" className="nav-cta" onClick={closeMenu}>
            Start a project
          </Link>
        </nav>
        <button className="menu-toggle" aria-label="Toggle Navigation Menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
