'use client';
import Link from "next/link";
import { useState } from "react";
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="new-header">
      <div className="logo">LOGO</div>

      {/* Hamburger Icon for mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link href="#hero" scroll={true}><span>Home</span></Link>
        <Link href="#portfolio" scroll={true}><span>Portfolio</span></Link>
        <Link href="#service" scroll={true}><span>Services</span></Link>
        <Link href="#pricing" scroll={true}><span>Pricing</span></Link>
        <Link href="#faq" scroll={true}><span>FAQ</span></Link>
      </nav>
              <Link href="#book"><button className="cta-button">Book a demo →</button></Link>

    </header>
  );
}
