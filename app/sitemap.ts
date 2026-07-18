import type { MetadataRoute } from "next";

const siteUrl = "https://nasaemployees.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/honorary-nasa-employees`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/dream-nasa-role-id`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: `${siteUrl}/jim-washkau`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/join-the-team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/nasa-fundamentals`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/space-shuttle-missions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/spacex-starship`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/women-at-nasa`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${siteUrl}/ground-laser-propulsion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${siteUrl}/future-mars-colony`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${siteUrl}/south-pole-space-journey`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/europa-hopper-mission`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/what-astronauts-eat`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/what-astronauts-drink`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/space-faqs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/mars-relay`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/deep-space-echo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/starship-orbit-simulator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/mars-unity-mission`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/iss-docking-simulator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/starship-game`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteUrl}/nasa-logo-history`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
