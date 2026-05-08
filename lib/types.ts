export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type FeatureCard = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
};

export type MosaicCard = {
  name: string;
  role: string;
  image: string;
  href?: string;
};

export type StoryCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type Highlight = {
  title: string;
  text: string;
};

export type PageContent = {
  site: {
    eyebrow: string;
    pageTitle: string;
    intro: string;
    badge: string;
    nav: NavLink[];
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    backgroundImage: string;
    portraitImage: string;
    stats: Stat[];
  };
  mission: {
    title: string;
    bodyHtml: string;
    image: string;
    callouts: Highlight[];
  };
  gallery: {
    title: string;
    intro: string;
    items: MosaicCard[];
  };
  culture: {
    title: string;
    bodyHtml: string;
    image: string;
    benefits: string[];
  };
  explore: FeatureCard;
  resources: {
    title: string;
    cards: StoryCard[];
  };
  footer: {
    title: string;
    text: string;
    links: NavLink[];
  };
};
