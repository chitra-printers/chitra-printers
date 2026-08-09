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
      {/* Changed to w-full and increased padding to push logo to the extreme left */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 lg:h-28">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="transition-transform duration-300 hover:scale-105 flex items-center gap-3 lg:gap-5">
              <Image
                src="/assets/logo.png"
                alt="Chitra Printers Logo"
                width={180}
                height={100}
                priority
                className="object-contain h-16 lg:h-20 w-auto"
              />
              {/* Brand Text added with white color */}
              <span 
                className="font-display uppercase font-black text-2xl lg:text-4xl tracking-tight hidden sm:block text-maroon" 
              >
                Chitra Printers
              </span>
            </Link>
          </div>

          {/* Desktop Menu - Font size slightly reduced */}
          <div className="hidden md:flex space-x-10 items-center ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-body font-bold text-sm lg:text-base uppercase tracking-wider pb-1 transition-colors duration-300 group"
                  style={{ color: "var(--maroon)", opacity: isActive ? 1 : 0.8 }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {isActive && <Printer size={16} />}
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
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors"
              style={{ color: "var(--maroon)" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "var(--maroon-dark)" }}
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-4 rounded-sm text-base font-body font-bold tracking-wide transition-colors"
                style={
                  isActive
                    ? { background: "var(--yellow)", color: "var(--maroon)" }
                    : { color: "rgba(255,255,255,0.9)" }
                }
              >
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