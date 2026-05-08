import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/lib/types";
import { PublicHeader } from "@/components/PublicHeader";

type Props = {
  content: PageContent;
};

function RichText({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function MosaicProfile({ item }: { item: PageContent["gallery"]["items"][number] }) {
  const content = (
    <>
      <div className="mosaic-card__image">
        <Image src={item.image} alt={item.name} fill className="cover-image" />
      </div>
      <div className="mosaic-card__meta">
        <h4>{item.name}</h4>
        <p>{item.role}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} target="_blank" rel="noreferrer" className="mosaic-card">
        {content}
      </Link>
    );
  }

  return <article className="mosaic-card">{content}</article>;
}

export function PublicPage({ content }: Props) {
  return (
    <main className="page-shell page-shell--home">
      <PublicHeader
        eyebrow={content.site.eyebrow}
        title={content.site.pageTitle}
        links={content.site.nav}
      />

      <section className="hero">
        <div className="hero__backdrop">
          <Image src={content.hero.backgroundImage} alt="" fill priority className="hero__bg-image" />
        </div>
        <div className="hero__content">
          <div className="hero__copy">
            <span className="pill">{content.site.badge}</span>
            <h2>{content.hero.title}</h2>
            <p>{content.hero.subtitle}</p>
            <div className="hero__actions">
              <Link href={content.hero.primaryCta.href} className="button button--primary">
                {content.hero.primaryCta.label}
              </Link>
              <Link href={content.hero.secondaryCta.href} className="button button--ghost">
                {content.hero.secondaryCta.label}
              </Link>
            </div>
            <dl className="stat-grid">
              {content.hero.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__portrait">
            <Image src={content.hero.portraitImage} alt={content.hero.title} fill priority className="cover-image" />
          </div>
        </div>
      </section>

      <section className="home-spotlight" aria-labelledby="home-spotlight-title">
        <div className="home-spotlight__media">
          <Image
            src="/images/audrey-montgomery.png"
            alt="Audrey Montgomery"
            fill
            priority
            className="cover-image"
          />
        </div>
        <div className="home-spotlight__copy">
          <span className="section__eyebrow">Employee Spotlight</span>
          <h3 id="home-spotlight-title">Audrey Montgomery</h3>
          <p>
            Procurement Team Lead in the International Space Station Procurement
            Office at NASA Johnson Space Center, supporting ISS research,
            integration, and major mission procurements.
          </p>
          <div className="home-spotlight__facts">
            <span>NASA</span>
            <span>Houston, Texas</span>
            <span>ISS Procurement</span>
          </div>
          <div className="hero__actions">
            <Link href="/employee-spotlights" className="button button--primary">
              Meet Audrey
            </Link>
            <Link href="https://www.nasa.gov/careers/" className="button button--ghost">
              NASA Careers
            </Link>
          </div>
        </div>
      </section>

      <section id="mission" className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">What We Do</span>
          <h3>{content.mission.title}</h3>
          <RichText html={content.mission.bodyHtml} />
          <div className="callout-grid">
            {content.mission.callouts.map((callout) => (
              <article key={callout.title} className="callout-card">
                <h4>{callout.title}</h4>
                <p>{callout.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section__visual">
          <Image src={content.mission.image} alt={content.mission.title} fill className="cover-image" />
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Faces of NASA</span>
            <h3>{content.gallery.title}</h3>
          </div>
          <p>{content.gallery.intro}</p>
        </div>
        <div className="mosaic-grid">
          {content.gallery.items.map((item) => (
            <MosaicProfile key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section id="culture" className="section section--split section--alt">
        <div className="section__visual">
          <Image src={content.culture.image} alt={content.culture.title} fill className="cover-image" />
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Life at NASA</span>
          <h3>{content.culture.title}</h3>
          <RichText html={content.culture.bodyHtml} />
          <ul className="benefit-list">
            {content.culture.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="explore" className="feature-band">
        <div className="feature-band__image">
          <Image src={content.explore.image} alt={content.explore.title} fill className="cover-image" />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">{content.explore.eyebrow}</span>
          <h3>{content.explore.title}</h3>
          <p>{content.explore.text}</p>
        </div>
      </section>

      <section id="resources" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Discover More</span>
            <h3>{content.resources.title}</h3>
          </div>
        </div>
        <div className="resource-grid">
          {content.resources.cards.map((card) => (
            <Link key={card.title} href={card.href} className="resource-card">
              <div className="resource-card__image">
                <Image src={card.image} alt={card.title} fill className="cover-image" />
              </div>
              <div className="resource-card__content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <span className="section__eyebrow">Admin-enabled build</span>
          <h3>{content.footer.title}</h3>
          <p>{content.footer.text}</p>
        </div>
        <div className="footer__links">
          {content.footer.links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </footer>
    </main>
  );
}
