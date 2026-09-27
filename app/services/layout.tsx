import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Printing Services",
  description:
    "Visiting cards, letterheads, ID cards, calendars, diaries, bill books, envelopes, bags, standees and more. Commercial printing services in Pimpri, Pune.",
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
