import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

const nasalization = localFont({
  src: "./fonts/NasalizationRg.otf",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "People of NASA",
  description: "Editable NASA-inspired people page with a full admin experience.",
  icons: {
    icon: "/nasa-logo.svg",
    shortcut: "/nasa-logo.svg",
    apple: "/nasa-logo.svg"
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
