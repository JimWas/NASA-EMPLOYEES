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
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
        <p style={{ marginTop: "16px", fontSize: "0.8rem", opacity: 0.7 }}>
          This is NOT an official government website.
        </p>
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
