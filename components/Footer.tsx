"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

function RegMark({ size = 10, className = "", style = {} }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} fill="none">
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
    <footer className="relative text-white overflow-hidden" style={{ background: "var(--maroon)" }}>
      
      {/* Background Texture & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      <div className="halftone absolute inset-0 opacity-[0.03] pointer-events-none" />
      <RegMark size={400} className="absolute -bottom-24 -right-24 opacity-5 pointer-events-none" style={{ color: "var(--yellow)" }} />

      {/* Dashed Perforation Top Border */}
      <div
        className="h-[1px] w-full relative z-10"
        style={{
          backgroundImage: "repeating-linear-gradient(to right, rgba(242,205,33,0.5) 0 8px, transparent 8px 16px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-6 hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/logo.png"
                alt="Chitra Printers Logo"
                width={200}
                height={80}
                className="object-contain h-14 lg:h-16 w-auto"
              />
            </Link>
            <p className="font-body text-base leading-relaxed text-white/80 mb-8">
              Industrial &amp; commercial printers delivering premium-quality
              print with absolute precision. Building trust and long-lasting relationships since day one.
            </p>
            {/* Changed to simple font */}
            <span
              className="inline-flex items-center gap-2 font-body text-sm px-4 py-2 rounded-full border bg-white/5 backdrop-blur-sm"
              style={{ borderColor: "rgba(242,205,33,0.3)", color: "var(--yellow)" }}
            >
              <RegMark size={14} />
              Est. 30+ Years
            </span>
          </div>

          {/* Quick Links (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <h3 className="font-display uppercase text-lg tracking-widest mb-6" style={{ color: "var(--yellow)" }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center font-body text-base text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-[var(--orange)]">
                      <ArrowRight size={16} />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Spans 3 columns on desktop) */}
          <div className="lg:col-span-3">
            <h3 className="font-display uppercase text-lg tracking-widest mb-6" style={{ color: "var(--yellow)" }}>
              What We Print
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 font-body text-base text-white/70 group hover:text-white transition-colors cursor-pointer">
                  <RegMark size={10} className="text-[var(--maroon)] opacity-50 group-hover:text-[var(--orange)] group-hover:opacity-100 transition-colors" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Spans 3 columns on desktop) */}
          <div className="lg:col-span-3">
            <h3 className="font-display uppercase text-lg tracking-widest mb-6" style={{ color: "var(--yellow)" }}>
              Get In Touch
            </h3>
            <ul className="space-y-5 font-body text-base text-white/80">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--yellow)] transition-colors duration-300">
                  <Phone size={18} className="text-[var(--yellow)] group-hover:text-[var(--maroon)] transition-colors duration-300" />
                </div>
                <div className="flex flex-col pt-1">
                  <a href="tel:+919767742598" className="hover:text-[var(--orange)] transition-colors">97677 42598</a>
                  <a href="tel:+919226128947" className="hover:text-[var(--orange)] transition-colors">92261 28947</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--yellow)] transition-colors duration-300">
                  <Mail size={18} className="text-[var(--yellow)] group-hover:text-[var(--maroon)] transition-colors duration-300" />
                </div>
                <a href="mailto:chitraprinters7@gmail.com" className="pt-2 hover:text-[var(--orange)] transition-colors break-all">
                  chitraprinters7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--yellow)] transition-colors duration-300">
                  <MapPin size={18} className="text-[var(--yellow)] group-hover:text-[var(--maroon)] transition-colors duration-300" />
                </div>
                <span className="pt-1 leading-relaxed">
                  68/23, Masulkar Tower, <br /> Masulkar Colony, Pimpri, <br /> Pune - 411018
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Changed to simple font */}
          <p className="font-body text-sm text-white/60">
            © {new Date().getFullYear()} Chitra Printers. All Rights Reserved.
          </p>
          {/* Changed to simple font */}
          <p className="font-body text-sm text-white/60 inline-flex items-center gap-2">
            <RegMark size={14} style={{ color: "var(--yellow)" }} />
            Your Trusted Printing Partner
          </p>
        </div>
      </div>
    </footer>
  );
}