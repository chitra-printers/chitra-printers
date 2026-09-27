import type { Metadata } from "next";
import { Playfair_Display, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { siteUrl, siteName } from "@/lib/site";
// Display face — classic high-contrast serif for an established, premium feel
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

// Body face
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// Utility face — job-ticket labels, tags, stats
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chitra Printers | Commercial & Industrial Printing in Pune",
    template: `%s | ${siteName}`,
  },
  description:
    "Your trusted printing partner in Pimpri, Pune since 1990. Visiting cards, letterheads, calendars, diaries, bill books, packaging and signage for businesses, schools and hospitals.",
  openGraph: {
    siteName,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className={`${workSans.className} bg-[var(--paper)] text-[var(--ink)]`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}