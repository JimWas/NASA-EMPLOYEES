import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

const nasalization = localFont({
  src: "./fonts/NasalizationRg.otf",
  variable: "--font-display"
});

const siteUrl = "https://www.nasaemployees.com";
const socialImageUrl = `${siteUrl}/images/NASA-ILLPHATED.jpg`;
const siteDescription =
  "Explore the people, purpose, and mission of NASA through employee stories, career pathways, and the work to preserve life and keep the light on for future generations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "People of NASA | NASA Employees",
    template: "%s | NASA Employees"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "People of NASA | NASA Employees",
    description: siteDescription,
    url: siteUrl,
    siteName: "NASA Employees",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "People of NASA"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "People of NASA | NASA Employees",
    description: siteDescription,
    images: [socialImageUrl]
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nasalization.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
