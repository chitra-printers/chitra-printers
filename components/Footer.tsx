import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function RegMark({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Corporate Stationery",
  "Industrial & Medical",
  "Signage & Branding",
  "Premium Publishing",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--maroon)" }} className="text-white">
      {/* dashed perforation, matching the navbar's bottom edge */}
      <div
        className="h-[1px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(242,205,33,0.5) 0 8px, transparent 8px 16px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <Image
              src="/assets/logo.png"
              alt="Chitra Printers Logo"
              width={160}
              height={70}
              className="object-contain h-12 w-auto mb-5"
            />
            <p className="font-body text-sm leading-relaxed text-white/70 max-w-xs">
              Industrial &amp; commercial printers delivering premium-quality
              print with precision, since day one.
            </p>
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-sm border mt-5"
              style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
            >
              <RegMark size={10} />
              Est. 30+ Yrs
            </span>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-display uppercase text-sm tracking-wider mb-5"
              style={{ color: "var(--yellow)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-display uppercase text-sm tracking-wider mb-5"
              style={{ color: "var(--yellow)" }}
            >
              What We Print
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="font-body text-sm text-white/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display uppercase text-sm tracking-wider mb-5"
              style={{ color: "var(--yellow)" }}
            >
              Get In Touch
            </h3>
            <ul className="space-y-3.5 font-body text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "var(--yellow)" }} />
                <span>9767742598, 9226128947, 9529827308</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0" style={{ color: "var(--yellow)" }} />
                <span>chitra.printer@rediffmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--yellow)" }} />
                <span>68/23, Masulkar Tower, Masulkar Colony, Pimpri, Pune - 411018</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs tracking-widest uppercase text-white/60">
            © {new Date().getFullYear()} Chitra Printers. All Rights Reserved.
          </p>
          <p className="font-mono text-xs tracking-widest uppercase text-white/60 inline-flex items-center gap-1.5">
            <RegMark size={10} />
            Your Trusted Printing Partner
          </p>
        </div>
      </div>
    </footer>
  );
}