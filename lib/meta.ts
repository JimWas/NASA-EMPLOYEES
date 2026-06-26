import type { Metadata } from "next";

const SITE_URL = "https://www.nasaemployees.com";
const SITE_NAME = "NASA Employees";
const FALLBACK_IMAGE = "/images/NASA-ILLPHATED.jpg";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const { title, description, path, image = FALLBACK_IMAGE } = opts;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
