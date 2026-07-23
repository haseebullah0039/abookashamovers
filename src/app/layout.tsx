import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ABO Okasha Movers | Best House & Furniture Movers in Dubai",
  description:
    "ABO Okasha Movers is a professional local moving company in Dubai, UAE. We offer residential moving, furniture moving, packing & unpacking, office relocation, and secure storage by road across Dubai. Get a free quote today.",
  openGraph: {
    title: "ABO Okasha Movers | Best House & Furniture Movers in Dubai",
    description:
      "Trusted local movers in Dubai for homes, offices, and furniture. Careful road-based moving, professional packing, and secure storage across Dubai and nearby areas.",
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
