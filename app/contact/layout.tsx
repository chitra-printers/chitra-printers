import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or visit Chitra Printers at Masulkar Tower, Pimpri, Pune 411018 for printing quotes and orders.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
