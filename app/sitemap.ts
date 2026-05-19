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
      url: `${siteUrl}/employee-spotlights`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/honorary-nasa-employees`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
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
    }
  ];
}
