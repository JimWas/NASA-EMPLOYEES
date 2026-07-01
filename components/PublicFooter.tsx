import Image from "next/image";
import Link from "next/link";
import { readContent } from "@/lib/content";

type Props = {
  title: string;
  text?: string;
};

export async function PublicFooter({ title, text }: Props) {
  const content = await readContent();
  const links = content.site.nav;

  return (
    <footer className="footer footer--rich">
      <div className="footer__brand">
        <div className="footer__wordmark">
          <Image
            src="/nasa-logo.svg"
            alt="NASA logo"
            width={36}
            height={36}
            className="footer__wordmark-logo"
          />
          <h3>{title}</h3>
        </div>
        {text ? <p>{text}</p> : null}
        <p>This is NOT an official government website.</p>
      </div>
      <div className="footer__nav">
        {links.map((group) => (
          <div key={group.label} className="footer__group">
            <span className="footer__group-title">{group.label}</span>
            <div className="footer__group-links">
              {group.children?.map((link) => (
                <Link key={`${link.label}-${link.href}`} href={link.href || "#"}>
                  {link.label}
                </Link>
              ))}
              {!group.children && group.href && (
                <Link href={group.href}>
                  {group.label}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
