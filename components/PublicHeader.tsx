import Image from "next/image";
import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";

type HeaderLink = {
  label: string;
  href: string;
};

type Props = {
  eyebrow: string;
  title: string;
  links: HeaderLink[];
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
        <nav className="topbar__nav">
          {links.map((link) => (
            <Link key={`${link.label}-${link.href}`} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}
