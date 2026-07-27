"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Printer } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 shadow-md relative"
      style={{ background: "var(--yellow)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Chitra Printers Logo"
                width={280}
                height={120}
                priority
                className="object-contain h-20 lg:h-24 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-body font-semibold text-sm lg:text-base uppercase tracking-wider pb-1 transition-colors duration-300 group"
                  style={{ color: "var(--maroon)", opacity: isActive ? 1 : 0.75 }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {/* Swapped to Printer Icon */}
                    {isActive && <Printer size={14} />}
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "var(--maroon)" }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors"
              style={{ color: "var(--maroon)" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* dashed "perforation" divider under the nav — maroon on yellow */}
      <div
        className="h-[1px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(131,22,24,0.4) 0 8px, transparent 8px 16px)",
        }}
      />

      {/* Mobile Menu Dropdown — kept dark for hierarchy/contrast against the yellow bar above it */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "var(--maroon-dark)" }}
      >
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-4 py-3.5 rounded-sm text-base font-body font-medium tracking-wide transition-colors"
                style={
                  isActive
                    ? { background: "var(--yellow)", color: "var(--maroon)" }
                    : { color: "rgba(255,255,255,0.85)" }
                }
              >
                {/* Swapped to Printer Icon for mobile */}
                {isActive && <Printer size={18} />}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}