"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { NavLink } from "@/lib/types";

type Props = {
  eyebrow: string;
  title: string;
  links: NavLink[];
};

export function PublicHeader({ eyebrow, title, links }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on route change or Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="topbar">
        <Link href="/" className="topbar__brand" onClick={() => setMenuOpen(false)}>
          <div className="topbar__logo-wrap">
            <Image
              src="/nasa-logo.svg"
              alt="NASA logo"
              width={48}
              height={48}
              className="topbar__logo"
              priority
            />
          </div>
          <div>
            <span className="topbar__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="topbar__actions">
          <nav className="topbar__nav" aria-label="Primary navigation">
            {links.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <details key={link.label} className="topbar__dropdown" name="nav-dropdown">
                    <summary className="topbar__dropdown-trigger">
                      {link.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="topbar__dropdown-menu">
                      {link.children.map((child) => (
                        <Link
                          key={`${child.label}-${child.href}`}
                          href={child.href || "#"}
                          className="topbar__dropdown-link"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <Link key={`${link.label}-${link.href}`} href={link.href || "#"}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <LanguageSelector />
        </div>

        {/* Mobile hamburger */}
        <button
          className="topbar__hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`topbar__hamburger-icon${menuOpen ? " topbar__hamburger-icon--open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        ref={drawerRef}
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <nav>
          {links.map((link) => {
            if (link.children && link.children.length > 0) {
              return (
                <div key={link.label} className="mobile-nav__group">
                  <span className="mobile-nav__group-label">{link.label}</span>
                  {link.children.map((child) => (
                    <Link
                      key={`${child.label}-${child.href}`}
                      href={child.href || "#"}
                      className="mobile-nav__link mobile-nav__link--child"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href || "#"}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mobile-nav__footer">
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}
