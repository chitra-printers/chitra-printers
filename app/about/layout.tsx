import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Chitra Printers has served Pune since 1990. Meet the family and team behind 30+ years of commercial and industrial printing for 400+ customers.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
