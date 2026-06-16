import Image from "next/image";
import Link from "next/link";
import { PageContent } from "@/lib/types";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

type Props = {
  content: PageContent;
};

const honoraryRoleCards = [
  {
    eyebrow: "Human Exploration",
    title: "Moon Habitat Builder",
    description: "Design safe places for explorers to live and work beyond Earth.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Earth & Climate",
    title: "Planet Protector",
    description: "Study Earth from space so people can protect life at home.",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Technology",
    title: "Deep Space Signal Keeper",
    description: "Keep missions connected as they travel farther into the unknown.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

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
            <Link href="/Audrey-Montgomery" className="button button--primary">
              Meet Audrey
            </Link>
            <Link href="https://www.nasa.gov/careers/" className="button button--ghost">
              NASA Careers
            </Link>
          </div>
        </div>
      </section>

      <section className="home-honorary" aria-labelledby="home-honorary-title">
        <div className="home-honorary__copy">
          <span className="section__eyebrow">Honorary NASA Employees</span>
          <h3 id="home-honorary-title">Add your dream role to the mission.</h3>
          <p>
            Students, kids, adults, and lifelong dreamers can add themselves to
            the honorary crew and share the NASA role they would choose to help
            preserve life and keep the light on for future generations.
          </p>
          <div className="hero__actions">
            <Link href="/honorary-nasa-employees" className="button button--primary">
              Join the Honorary Crew
            </Link>
            <Link href="/honorary-nasa-employees#join-honorary-crew" className="button button--ghost">
              Add a Dream Role
            </Link>
          </div>
        </div>
        <div className="home-honorary__cards">
          {honoraryRoleCards.map((card) => (
            <article key={card.title} className="home-honorary__card">
              <div
                className="home-honorary__card-image"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(6, 10, 16, 0.12), rgba(6, 10, 16, 0.68)), url(${card.image})` }}
                aria-hidden="true"
              />
              <div className="home-honorary__card-copy">
                <span>{card.eyebrow}</span>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
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

      <PublicFooter
        title={content.footer.title}
        text={content.footer.text}
      />
    </main>
  );
}
