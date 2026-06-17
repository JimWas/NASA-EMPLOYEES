import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicHeader } from "@/components/PublicHeader";
import { PublicFooter } from "@/components/PublicFooter";

export const metadata: Metadata = {
  title: "What Astronauts Eat in Space",
  description:
    "A documented guide to what astronauts eat in space, how the menu works, which dishes NASA has published, and what food systems are being developed for Artemis and Mars."
};

const foodClasses = [
  {
    title: "Rehydratable foods",
    text: "These start dry or concentrated. Astronauts add hot or room-temperature water in orbit. This class includes soups, eggs, cereals, rice dishes, and some fruit items."
  },
  {
    title: "Thermostabilized foods",
    text: "These are heat-processed and shelf-stable in pouches or cans. They cover many of the heavier main dishes because they can stay safe without refrigeration."
  },
  {
    title: "Natural-form foods",
    text: "Ready-to-eat items like nuts, cookies, granola bars, and similar snacks give the menu texture and familiarity without extra preparation."
  },
  {
    title: "Irradiated foods",
    text: "Some meat items can be sterilized with ionizing radiation so they remain safe for flight while keeping more of their original character."
  },
  {
    title: "Fresh foods",
    text: "Astronauts sometimes receive bonus containers with apples, carrots, oranges, or other fresh items, but these are limited and eaten early because they do not last long."
  },
  {
    title: "Beverages and condiments",
    text: "Drinks, sauces, spreads, and seasonings matter more than they seem. They help with hydration, morale, and flavor in a place where appetite can shift."
  }
];

const documentedMenuGroups = [
  {
    title: "Published rehydratable examples",
    text:
      "Chicken consommé, cream of mushroom soup, macaroni and cheese, chicken and rice, shrimp cocktail, scrambled eggs, cereals, and asparagus are all documented in NASA food-system materials."
  },
  {
    title: "Published thermostabilized examples",
    text:
      "Beef tips with mushrooms, tomatoes and eggplant, chicken a la king, ham, beef fajita strips, and apricot cobbler appear in NASA's current formulation and archive material."
  },
  {
    title: "Documented current crew favorites",
    text:
      "Tortillas, wheat flat bread, nuts, granola bars, cookies, peanut butter, jam, hot sauce, coffee, tea, lemonade, apple cider, and fruit drinks are part of the practical day-to-day menu logic NASA describes."
  },
  {
    title: "Artemis II menu examples NASA has published",
    text:
      "Vegetable quiche, breakfast sausage, granola with blueberries, almonds and cashews, couscous with nuts, mango salad, barbecued beef brisket, broccoli au gratin, spicy green beans, macaroni and cheese, tropical fruit salad, butternut squash, cauliflower, pudding, cobbler, cake, and chocolate all appear in NASA's Artemis II menu release."
  }
];

const menuItems = [
  "Chicken consommé",
  "Cream of mushroom soup",
  "Macaroni and cheese",
  "Chicken and rice",
  "Shrimp cocktail",
  "Scrambled eggs",
  "Asparagus",
  "Beef tips with mushrooms",
  "Tomatoes and eggplant",
  "Chicken a la king",
  "Ham",
  "Beef fajita strips",
  "Apricot cobbler",
  "Vegetable quiche",
  "Breakfast sausage",
  "Granola with blueberries",
  "Almonds",
  "Cashews",
  "Couscous with nuts",
  "Mango salad",
  "Barbecued beef brisket",
  "Broccoli au gratin",
  "Spicy green beans",
  "Tropical fruit salad",
  "Butternut squash",
  "Cauliflower",
  "Pudding",
  "Cake",
  "Cookies",
  "Chocolate",
  "Tortillas",
  "Wheat flat bread",
  "Peanut butter",
  "Strawberry jam",
  "Honey",
  "Hot sauce",
  "Spicy mustard",
  "Chocolate spread",
  "Coffee",
  "Tea",
  "Green tea",
  "Lemonade",
  "Apple cider",
  "Pineapple drink",
  "Chocolate breakfast drink",
  "Vanilla breakfast drink",
  "Strawberry breakfast drink",
  "Mango-peach smoothie",
  "Cocoa"
];

const developmentPriorities = [
  {
    title: "More fresh food, not just pouches",
    text: "NASA's Mars-focused food work is moving toward systems that let crews grow and eat at least some fresh produce instead of relying only on prepackaged meals."
  },
  {
    title: "Longer shelf life without a morale collapse",
    text: "Artemis and Mars crews need food that stays safe and nutritious for much longer than ISS food while still tasting good enough that people will actually keep eating it."
  },
  {
    title: "Less mass, less waste, fewer resupply assumptions",
    text: "Future systems have to reduce packaging waste, limit water and power demands, and work with much fewer cargo opportunities than low Earth orbit."
  },
  {
    title: "A small kitchen, not a restaurant",
    text: "NASA is studying how future crews might prepare, warm, season, and customize meals with better onboard equipment, but the system still has to stay reliable, compact, and safe."
  }
];

const sourceLinks = [
  {
    label: "NASA: Space Food Systems",
    href: "https://www.nasa.gov/directorates/esdmd/hhp/space-food-systems/"
  },
  {
    label: "NASA: Food in Space",
    href: "https://www.nasa.gov/ochmo/food-in-space/"
  },
  {
    label: "NASA: Artemis II - What's on the Menu?",
    href: "https://www.nasa.gov/missions/artemis/artemis-2/artemis-ii-whats-on-the-menu/"
  },
  {
    label: "NASA: The Menu for Mars - Designing a Deep Space Food System",
    href: "https://www.nasa.gov/humans-in-space/the-menu-for-mars-designing-a-deep-space-food-system/"
  },
  {
    label: "NASA PDF: Space Food Formulations - Rehydratable",
    href: "https://www.nasa.gov/wp-content/uploads/2024/06/nasa-space-food-formulations-rehydratable.pdf"
  },
  {
    label: "NASA PDF: Space Food Formulations - Thermostabilized",
    href: "https://www.nasa.gov/wp-content/uploads/2024/06/nasa-space-food-formulations-thermostabilized.pdf"
  }
];

export default function WhatAstronautsEatPage() {
  const navLinks = [
    { label: "People of NASA", href: "/" },
    { label: "Space Drinks", href: "/what-astronauts-drink" },
    { label: "Space FAQs", href: "/space-faqs" },
    { label: "Join the Team", href: "/join-the-team" }
  ];

  return (
    <main className="page-shell page-shell--space-food">
      <PublicHeader
        eyebrow="Space Living"
        title="Space Food"
        links={navLinks}
      />

      <section className="hero hero--compact hero--space-food">
        <div className="hero__backdrop">
          <Image
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="hero__bg-image"
          />
        </div>
        <div className="hero__content hero__content--single">
          <div className="hero__copy">
            <span className="pill">Life support, nutrition, morale</span>
            <h2>What do astronauts eat in space?</h2>
            <p>
              Not one fixed menu and not just squeeze tubes. NASA crews eat a
              controlled mix of rehydratable foods, thermostabilized entrees,
              ready-to-eat snacks, drinks, condiments, and occasional fresh
              items. The menu is built around safety, shelf life, nutrition,
              mass, packaging, and crew morale.
            </p>
            <div className="hero__actions">
              <Link href="#documented-menu" className="button button--primary">
                See the Dishes
              </Link>
              <Link href="#future-food" className="button button--ghost">
                Food for Mars
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">Important Caveat</span>
            <h3>NASA publishes menu examples and formulation books, not one perfect master list of every space meal ever flown.</h3>
          </div>
          <p>
            So this page is built from NASA&apos;s official food-system pages,
            current formulation PDFs, archive descriptions, and the published
            Artemis II menu. It is a documented archive, not a fake claim to a
            complete menu database NASA itself does not publish as one file.
          </p>
        </div>
      </section>

      <section className="section" id="how-the-menu-works">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">How the Menu Works</span>
            <h3>Astronaut food is a system before it is a cuisine.</h3>
          </div>
          <p>
            Food in orbit has to survive launch, store safely for long periods,
            work in microgravity, and still give crews enough variety to keep
            eating well under stress.
          </p>
        </div>
        <div className="callout-grid">
          {foodClasses.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="documented-menu" className="section section--split section--alt">
        <div className="section__copy">
          <span className="section__eyebrow">Documented Dishes</span>
          <h3>These are real menu items NASA has publicly documented.</h3>
          <p>
            Some come from current 2024 formulation books. Some come from NASA
            archive explanations of the shuttle and ISS menu. Some come from
            the officially released Artemis II crew menu.
          </p>
          <div className="callout-grid space-food-callout-grid">
            {documentedMenuGroups.map((item) => (
              <article key={item.title} className="callout-card">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">Menu Archive</span>
          <h3>Published examples across shuttle, station, and Artemis-era food.</h3>
          <div className="space-food-menu-grid">
            {menuItems.map((item) => (
              <span key={item} className="space-food-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="section__copy">
          <span className="section__eyebrow">What It Feels Like</span>
          <h3>Space meals are ordinary on purpose.</h3>
          <p>
            The point is not novelty. The point is stability. NASA wants crews
            to have meals that feel understandable: eggs, soup, rice, flat
            bread, fruit, brisket, vegetables, dessert, coffee. That
            familiarity matters because eating in space is already physically
            and psychologically different.
          </p>
          <p>
            Even small things like hot sauce, peanut butter, jam, or a cookie
            can matter because they make a sealed technical environment feel
            more human.
          </p>
        </div>
        <div className="section__copy">
          <span className="section__eyebrow">A Few Practical Rules</span>
          <ul className="benefit-list">
            <li>No crumb-heavy food that can drift into equipment.</li>
            <li>No open bowls of soup or floating drinks.</li>
            <li>Packaging has to be compact, safe, and easy to manage in orbit.</li>
            <li>Nutrition has to hold up over long storage periods.</li>
            <li>Variety matters because appetite and morale change during missions.</li>
          </ul>
        </div>
      </section>

      <section id="future-food" className="section">
        <div className="section-heading">
          <div>
            <span className="section__eyebrow">In Development</span>
            <h3>NASA&apos;s next food challenge is not a single new recipe. It is a whole deep-space food system.</h3>
          </div>
          <p>
            For the Moon and especially Mars, NASA is working toward food that
            can last longer, waste less, support better health, and eventually
            include more fresh production by the crew.
          </p>
        </div>
        <div className="callout-grid">
          {developmentPriorities.map((item) => (
            <article key={item.title} className="callout-card">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band__image">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="cover-image"
          />
        </div>
        <div className="feature-band__overlay">
          <span className="section__eyebrow">The Big Idea</span>
          <h3>What astronauts eat in space is really a story about how far a mission can support human life.</h3>
          <p>
            Food is not a side detail. It is a life-support problem, a
            packaging problem, a nutrition problem, a logistics problem, and a
            morale problem all at once. The farther humans go from Earth, the
            more serious that food system becomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading section-heading--stacked">
          <div>
            <span className="section__eyebrow">Sources</span>
            <h3>Primary NASA references</h3>
          </div>
          <p>
            These are the official NASA sources used for the documented dish
            names, food categories, and future-development descriptions on this
            page.
          </p>
        </div>
        <ul className="benefit-list">
          {sourceLinks.map((source) => (
            <li key={source.href}>
              <Link href={source.href}>{source.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <PublicFooter
        title="Fueling the Future"
        text="From the first tube of applesauce to advanced Martian greenhouses, space food is a cornerstone of human exploration."
        
      />
    </main>
  );
}
