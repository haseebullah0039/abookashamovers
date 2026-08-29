import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: `${dictionaries.en.meta.title} | ${dictionaries.ar.meta.title}`,
  description: dictionaries.en.meta.description,
  openGraph: {
    title: dictionaries.en.meta.title,
    description: dictionaries.en.meta.description,
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${poppins.variable} ${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
