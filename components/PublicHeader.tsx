"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { NavLink } from "@/lib/types";

type Props = {
  eyebrow: string;
  title: string;
  links: NavLink[];
};

export function PublicHeader({ eyebrow, title, links }: Props) {
  return (
    <header className="topbar">
      <Link href="/" className="topbar__brand">
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
      <div className="topbar__actions">
        <nav className="topbar__nav" aria-label="Primary navigation">
          {links.map((link) => {
            if (link.children && link.children.length > 0) {
              return (
                <details key={link.label} className="topbar__dropdown">
                  <summary className="topbar__dropdown-trigger">
                    {link.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
    </header>
  );
}
