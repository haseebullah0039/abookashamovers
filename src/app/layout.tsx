import type { Metadata, Viewport } from "next";
import { Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { dictionaries } from "@/i18n/dictionaries";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://abookashamovers.com";
const en = dictionaries.en;
const ar = dictionaries.ar;

const keywordsEn = [
  "movers in Dubai",
  "moving company Dubai",
  "furniture movers Dubai",
  "house movers Dubai",
  "office relocation Dubai",
  "packers and movers Dubai",
  "best movers in Dubai",
  "moving and storage Dubai",
  "ABO Okasha Movers",
];
const keywordsAr = [
  "شركة نقل عفش دبي",
  "نقل اثاث دبي",
  "افضل شركة نقل عفش في دبي",
  "نقل مكاتب دبي",
  "شركة نقل عفش",
  "ابو عكاشة موفرز",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${en.meta.title} | ${ar.meta.title}`,
    template: `%s | ABO Okasha Movers`,
  },
  description: en.meta.description,
  keywords: [...keywordsEn, ...keywordsAr],
  applicationName: "ABO Okasha Movers",
  authors: [{ name: "ABO Okasha Movers", url: siteUrl }],
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      ar: siteUrl,
      "x-default": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    url: siteUrl,
    siteName: "ABO Okasha Movers",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
    type: "website",
    images: [
      {
        url: "/hero22.webp",
        width: 1448,
        height: 1086,
        alt: "ABO Okasha Movers — professional moving team in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
    images: ["/hero22.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "Moving & Storage Service",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1128",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${siteUrl}/#business`,
  name: "ABO Okasha Movers",
  alternateName: "شركة أبو عكاشة لنقل العفش",
  description: en.meta.description,
  url: siteUrl,
  image: `${siteUrl}/hero22.webp`,
  logo: `${siteUrl}/Main Logo.webp`,
  telephone: "+971566006415",
  email: "abookashamovers@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Quoz Industrial Area",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "City", name: "Umm Al Quwain" },
    { "@type": "City", name: "Al Ain" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: ["https://www.facebook.com/abookashamovers/"],
  makesOffer: en.services.items.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${poppins.variable} ${cairo.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
