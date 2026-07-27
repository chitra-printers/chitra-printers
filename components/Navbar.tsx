"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

// Registration mark — the same signature motif used across the site
function RegMark({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg relative"
      style={{ background: "var(--maroon)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo + est. tag */}
          <div className="flex items-center gap-3">
            <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Chitra Printers Logo"
                width={220}
                height={100}
                priority
                className="object-contain h-16 lg:h-20 w-auto"
              />
            </Link>
            <span
              className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded-sm border"
              style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
            >
              <RegMark size={10} />
              Est. 30+ Yrs
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-9 items-center ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-body font-semibold text-sm uppercase tracking-wider pb-1 transition-colors duration-300 group"
                  style={{ color: isActive ? "var(--yellow)" : "rgba(255,255,255,0.85)" }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {isActive && <RegMark size={9} />}
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "var(--yellow)" }}
                  />
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-body font-bold text-sm px-6 py-2.5 rounded-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ background: "var(--yellow)", color: "var(--maroon)" }}
            >
              Get a Quote <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/85 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* dashed "perforation" divider under the nav */}
      <div
        className="h-[1px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(242,205,33,0.5) 0 8px, transparent 8px 16px)",
        }}
      />

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "var(--maroon-dark)" }}
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-sm text-base font-body font-medium tracking-wide transition-colors"
                style={
                  isActive
                    ? { background: "var(--yellow)", color: "var(--maroon)" }
                    : { color: "rgba(255,255,255,0.85)" }
                }
              >
                {isActive && <RegMark size={12} />}
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full font-body font-bold px-4 py-3 rounded-sm shadow-md transition-colors"
              style={{ background: "var(--yellow)", color: "var(--maroon)" }}
            >
              Get a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}