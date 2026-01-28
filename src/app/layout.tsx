import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H&H Plumbing | Blocked Drains, Solar Hot Water & Skylights | Gold Coast",
  description: "Reliable, quality plumbing servicing Gold Coast & Northern NSW. Blocked drains, solar hot water, skylights installation. Call 0401 662 907 for a free quote.",
  keywords: "plumber Gold Coast, blocked drains Currumbin, solar hot water Gold Coast, skylight installation, plumbing services Northern NSW",
  openGraph: {
    title: "H&H Plumbing | Gold Coast Plumbing Specialists",
    description: "Reliable, quality plumbing servicing Gold Coast & Northern NSW. Blocked drains, solar hot water, skylights installation.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "H&H Plumbing",
    "description": "Reliable, quality plumbing servicing Gold Coast & Northern NSW. Specialists in blocked drains, solar hot water, and skylight installations.",
    "telephone": "0401 662 907",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Currumbin",
      "addressLocality": "Currumbin",
      "addressRegion": "QLD",
      "postalCode": "4223",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Gold Coast" },
      { "@type": "City", "name": "Currumbin" },
      { "@type": "City", "name": "Tugun" },
      { "@type": "City", "name": "Tweed Heads" },
      { "@type": "State", "name": "Northern NSW" }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-17:00, Sa 08:00-12:00",
    "url": "https://hnhplumbing.pages.dev",
    "image": "/images/Logo_2BSlogan_2BHnH_2BPlumbing-1920w.png",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blocked Drain Clearing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Hot Water Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skylight Installation" } }
      ]
    }
  };

  return (
    <html lang="en" className={`${archivoBlack.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[var(--color-surface)] text-[var(--color-text)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
