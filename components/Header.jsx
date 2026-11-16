"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        {/* Brand Logo */}
        <Link className="brand" href="/" aria-label="DNIC Home">
          <span className="brand-badge" aria-hidden="true">
            D
          </span>
          <div className="brand-text">
            <span className="brand-name">dnic.</span>
            <span className="brand-caption">Dot Net Interview Community</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/about-dnic/">About DNIC</Link>
          <Link href="/books/">Books</Link>
          <Link href="/learning-hub/">Learning Hub</Link>
          <Link href="/resume-writing/">Resume Services</Link>
          <Link href="/community/">Community</Link>
          <Link href="/contact/">Contact</Link>
        </nav>

        {/* Primary CTA & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            className="button button-primary button-sm"
            href="/resume-writing/get-started/"
          >
            Build My Resume <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about-dnic/" onClick={() => setMobileMenuOpen(false)}>About DNIC</Link>
          <Link href="/books/" onClick={() => setMobileMenuOpen(false)}>Books</Link>
          <Link href="/learning-hub/" onClick={() => setMobileMenuOpen(false)}>Learning Hub</Link>
          <Link href="/resume-writing/" onClick={() => setMobileMenuOpen(false)}>Resume Services</Link>
          <Link href="/community/" onClick={() => setMobileMenuOpen(false)}>Community</Link>
          <Link href="/contact/" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
            <Link
              className="button button-primary"
              style={{ width: "100%" }}
              href="/resume-writing/get-started/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Build My Resume <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
