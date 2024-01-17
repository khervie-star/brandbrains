import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://brand-brains.vercel.app",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Brand Brains | Branding and Marketing Company",
    description:
      "Embrace the distinctiveness of your brand; it's not a duplicate but an authentic masterpiece. Let your uniqueness radiate in all your marketing efforts, as there's immense power in being genuinely yourself..",
    url: "",
    siteName: "Brand Brains",
    images: [
      {
        url: "https://brand-brains.vercel.app/bb.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://brand-brains.vercel.app/bb.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Brand Brains",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Brand Brains | Branding and Marketing Company",
  description:
    "Embrace the distinctiveness of your brand; it's not a duplicate but an authentic masterpiece. Let your uniqueness radiate in all your marketing efforts, as there's immense power in being genuinely yourself..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
