'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="nav wrap">
        <Link href="/" className="brand" onClick={closeMenu}>
          <svg viewBox="0 0 720 220" className="brand-mark" role="img" aria-label="Meridian Wayfinding">
            <title>Meridian Wayfinding</title>
            <g transform="translate(10,25) scale(0.55)">
              <circle cx="150" cy="150" r="121" fill="none" stroke="#C6A15B" strokeWidth="3" />
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
