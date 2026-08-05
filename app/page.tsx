"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  HeartPulse,
  Signpost,
  BookOpenText,
  Landmark,
  GraduationCap,
  Factory,
  Hotel,
  Truck,
  ArrowUpRight,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS (see <style> block below for the CSS custom props)  */
/*  maroon #831618 · yellow #f2cd21 · orange #f8a51b · paper #fdfdf6  */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      <HeroSection />
      <ClientStrip />
      <ServicesGrid />
      <IndustriesTabs />
      <StatsSection />
      <CtaBanner />
    </main>
  );
}

/* ------------------------- shared bits ------------------------- */

function RegMark({ className = "", size = 22, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function CornerMarks({ color = "var(--maroon)" }) {
  const pos = [
    "top-2 left-2",
    "top-2 right-2",
    "bottom-2 left-2",
    "bottom-2 right-2",
  ];
  return (
    <>
      {pos.map((p) => (
        <RegMark
          key={p}
          size={14}
          className={`absolute ${p} opacity-40`}
          style={{ color }}
        />
      ))}
    </>
  );
}

/* ---------------------------- 1. HERO ---------------------------- */

function HeroSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <div>
            <p className="font-body font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "var(--orange)" }}>
              Established 30+ Years
            </p>

            <h1
              className="font-display uppercase text-5xl lg:text-6xl leading-[1.05]"
              style={{ color: "var(--maroon)" }}
            >
              Every print
              <br />
              tells your story
              <br />
              <span style={{ color: "var(--orange)" }}>with precision.</span>
            </h1>

            <p className="font-body text-lg leading-relaxed mt-6 max-w-md text-[#4a4038]">
              For over three decades, Chitra Printers has produced everything
              from hospital files and CT scan bags to corporate diaries and
              wedding cards — engineered for durability, finished for
              design.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/contact"
                className="font-body font-semibold text-white px-7 py-3.5 rounded-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--maroon)" }}
              >
                Get a Custom Quote <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/services"
                className="font-body font-semibold px-7 py-3.5 rounded-sm border-2 inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                style={{ borderColor: "var(--maroon)", color: "var(--maroon)" }}
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image column, framed like a proof sheet */}
          <div className="relative">
            <div
              className="relative h-[420px] lg:h-[540px] w-full rounded-sm overflow-hidden border-[6px]"
              style={{ borderColor: "var(--maroon)" }}
            >
              <img
                src="/assets/printing.avif"
                alt="Industrial printing press"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(131,22,24,0.65), transparent 55%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display uppercase text-2xl">
                  Modern Technology
                </p>
                <p className="font-body text-orange-100 text-sm mt-1">
                  Customized printing solutions, built to last.
                </p>
              </div>
              <CornerMarks color="var(--yellow)" />
            </div>

            {/* Stamp badge - Shifted to the right */}
            <div
              className="absolute -bottom-6 -right-6 hidden md:flex items-center justify-center w-28 h-28 rounded-full font-display text-center text-sm rotate-[8deg] shadow-lg"
              style={{ background: "var(--yellow)", color: "var(--maroon)" }}
            >
              QUALITY
              <br />
              FIRST
            </div>
          </div>
        </div>
      </div>

      {/* faint halftone wash in the background */}
      <div
        className="halftone absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
      />
    </section>
  );
}

/* ------------------------ 2. CLIENT STRIP ------------------------ */

function ClientStrip() {
  const totalLogos = 19;
  const logos = Array.from({ length: totalLogos }, (_, i) => i + 1);

  return (
    <section
      className="py-12 overflow-hidden relative shadow-inner"
      style={{
        background: "var(--maroon)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center font-display text-2xl lg:text-3xl text-white">
          Trusted by 400+ customers across industries, including
        </p>
      </div>
      <div className="flex w-[200%] animate-marquee gap-8 items-center pl-8">
        {[...logos, ...logos].map((num, i) => {
          const formattedNum = String(num).padStart(2, '0');
          
          return (
            <div 
              key={i} 
              className="flex-shrink-0 w-64 h-32 bg-white rounded-xl flex items-center justify-center p-5 shadow-lg border-2 border-transparent hover:border-[var(--yellow)] hover:scale-105 transition-all duration-300 relative group"
            >
              <img
                src={`/assets/logo_${formattedNum}.png`}
                alt={`Client Logo ${formattedNum}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      
      {/* Know More Trigger */}
      <div className="max-w-7xl mx-auto px-6 mt-10 text-center relative z-10">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 font-body font-semibold text-white/90 hover:text-[var(--yellow)] transition-colors border-b border-dashed border-white/40 hover:border-[var(--yellow)] pb-1"
        >
          Know more about us <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------ 3. SERVICES GRID ------------------------ */

function ServicesGrid() {
  const services = [
    {
      title: "Corporate Stationery",
      desc: "Table calendars, diaries, letterheads, visiting cards and ID cards.",
      Icon: CalendarDays,
      img: "/assets/tc_2.webp"
    },
    {
      title: "Industrial & Medical",
      desc: "CT scan bags, hospital files, and operation & maintenance manuals.",
      Icon: HeartPulse,
      img: "/assets/ct_2.webp"
    },
    {
      title: "Signage & Branding",
      desc: "Standees, vinyl boards, vinyl stickers, and reception signage.",
      Icon: Signpost,
      img: "/assets/standee -2.webp"
    },
    {
      title: "Premium Publishing",
      desc: "Silver jubilee souvenirs, brochures, and wedding invitation cards.",
      Icon: BookOpenText,
      img: "/assets/sr_1.webp"
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-2xl mb-16">
        <p
          className="font-display text-2xl lg:text-3xl mb-4"
          style={{ color: "var(--orange)" }}
        >
          What we produce
        </p>
        <h2
          className="font-display uppercase text-4xl lg:text-5xl leading-tight"
          style={{ color: "var(--maroon)" }}
        >
          Complete printing solutions
        </h2>
        <p className="font-body text-lg text-[#4a4038] mt-4">
          Equipped with modern technology, built to meet the highest
          standards of durability and design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, desc, Icon, img }, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group min-h-[340px] flex flex-col p-8 border-b-4 border-transparent hover:border-[var(--yellow)]"
          >
            {/* Background Image */}
            <img 
              src={img} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Dark Gradient Overlay for Perfect Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container (z-10 keeps it above the image and overlay) */}
            <div className="relative z-10 flex flex-col h-full">
              
              {/* Glassmorphism Icon Box */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-[var(--yellow)]/20 group-hover:border-[var(--yellow)]/50"
              >
                <Icon size={26} className="text-white group-hover:text-[var(--yellow)] transition-colors duration-300" />
              </div>

              {/* Text Blocks */}
              <div className="mt-8 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                <h3
                  className="font-display uppercase text-2xl mb-3 text-white group-hover:text-[var(--yellow)] transition-colors duration-300"
                >
                  {title}
                </h3>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- 4. INDUSTRIES TABS ----------------------- */

function IndustriesTabs() {
  const [active, setActive] = useState(0);

  const industries = [
    {
      name: "Government",
      Icon: Landmark,
      img: "/assets/govt.jpg", 
      desc: "Serving Central, State & Corporation offices with secure, reliable documentation printing.",
    },
    {
      name: "Hospitals",
      Icon: HeartPulse,
      img: "/assets/hospital.webp", 
      desc: "Patient files, CT scan bags, and diagnostic reports designed for daily clinical use.",
    },
    {
      name: "Education",
      Icon: GraduationCap,
      img: "/assets/school.jpg", 
      desc: "School calendars, student ID cards, diaries, and college souvenirs.",
    },
    {
      name: "Industrial",
      Icon: Factory,
      img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=2069&auto=format&fit=crop", 
      desc: "Operation manuals, safety vinyl boards, and tooling documentation for manufacturing.",
    },
    {
      name: "Hotels",
      Icon: Hotel,
      img: "/assets/restro.webp", 
      desc: "Menus, standees, and guest collateral finished to a hospitality-grade standard.",
    },
    {
      name: "Transport",
      Icon: Truck,
      img: "/assets/transport.webp", 
      desc: "Fleet signage, bill books, and logistics documentation built for the road.",
    },
  ];

  const Active = industries[active];

  return (
    <section className="py-24" style={{ background: "var(--maroon)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p
          className="font-display text-2xl lg:text-3xl mb-4 text-center"
          style={{ color: "var(--yellow)" }}
        >
          Many industries, one press
        </p>
        <h2 className="font-display uppercase text-4xl lg:text-5xl text-center text-white mb-12">
          Some of the industries we serve
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="font-body text-sm font-semibold px-5 py-2.5 rounded-sm inline-flex items-center gap-2 transition-colors border"
              style={
                active === idx
                  ? {
                      background: "var(--yellow)",
                      color: "var(--maroon)",
                      borderColor: "var(--yellow)",
                    }
                  : {
                      background: "transparent",
                      color: "white",
                      borderColor: "rgba(255,255,255,0.25)",
                    }
              }
            >
              <ind.Icon size={16} />
              {ind.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
              style={{ background: "#fdf1d6" }}
            >
              <Active.Icon size={26} style={{ color: "var(--maroon)" }} />
            </div>
            <h3
              className="font-display uppercase text-3xl mb-4"
              style={{ color: "var(--maroon)" }}
            >
              {Active.name}
            </h3>
            <p className="font-body text-lg leading-relaxed text-[#4a4038]">
              {Active.desc}
            </p>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img
              src={Active.img}
              alt={Active.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="halftone absolute inset-0 opacity-10 mix-blend-multiply"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- 5. STATS -------------------------- */

function StatsSection() {
  const stats = [
    { value: "30+", label: "Years established" },
    { value: "400+", label: "Valuable customers" },
    { value: "15+", label: "Product categories" },
    { value: "100%", label: "Quality commitment" },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="text-center px-6 py-4"
            style={{
              borderLeft:
                idx !== 0
                  ? "1px dashed rgba(131,22,24,0.25)"
                  : "none",
            }}
          >
            <div
              className="font-display text-5xl lg:text-6xl rotate-[-2deg] inline-block"
              style={{ color: "var(--orange)" }}
            >
              {s.value}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest mt-3 text-[#6b5f4f]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- 6. CTA BANNER ------------------------- */

function CtaBanner() {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(120deg, var(--orange), var(--yellow))",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="font-display uppercase text-3xl lg:text-4xl mb-5"
          style={{ color: "var(--maroon)" }}
        >
          Ready to put it in print?
        </h2>
        <p className="font-body text-lg mb-8 max-w-xl mx-auto text-[#5c2e0f]">
          Partner with Chitra Printers for fast, reliable, and
          cost-effective printing — from the first proof to final delivery.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-body font-bold px-9 py-4 rounded-sm shadow-xl hover:-translate-y-0.5 transition-transform"
          style={{ background: "var(--maroon)", color: "white" }}
        >
          Contact Us Today <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}