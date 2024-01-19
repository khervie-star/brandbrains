"use client";

import type { Metadata } from "next";
import { Inter, Outfit, Sofia_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

// const BASE_URI = "https://brand-brains.vercel.app";

// export const metadata: Metadata = {
//   alternates: {
//     canonical: `${BASE_URI}`,
//     languages: {
//       "en-US": "/en-US",
//     },
//   },
//   openGraph: {
//     title: "Brand Brains | Branding and Marketing Company",
//     description:
//       "Embrace the distinctiveness of your brand; it's not a duplicate but an authentic masterpiece. Let your uniqueness radiate in all your marketing efforts, as there's immense power in being genuinely yourself..",
//     url: "",
//     siteName: "Brand Brains",
//     images: [
//       {
//         url: `${BASE_URI}/bb.png`, // Must be an absolute URL
//         width: 800,
//         height: 600,
//       },
//       {
//         url: `${BASE_URI}/bb.png`, // Must be an absolute URL
//         width: 1800,
//         height: 1600,
//         alt: "Brand Brains",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   title: "Brand Brains | Branding and Marketing Company",
//   description:
//     "Embrace the distinctiveness of your brand; it's not a duplicate but an authentic masterpiece. Let your uniqueness radiate in all your marketing efforts, as there's immense power in being genuinely yourself..",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
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
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
