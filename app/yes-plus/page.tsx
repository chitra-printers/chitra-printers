import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import RegMark from "@/components/RegMark";
import { YesPlusWordmark } from "@/components/YesPlusFeature";
import { yesPlusProducts, yesPlusEnquiryUrl } from "@/lib/yesplus";

export const metadata: Metadata = {
  title: "Yes Plus Cleaning Products | Gurudev Enterprises · Chitra Printers",
  description:
    "Yes Plus cleaning products by Gurudev Enterprises, a sister concern of Chitra Printers. Hand wash, dish wash, glass, tiles, toilet and car care, now in Pune.",
};

export default function YesPlusPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      {/* Banner */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border mb-6 bg-white/5"
            style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
          >
            <RegMark size={14} />
            A GURUDEV ENTERPRISES BRAND
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-white">
            Yesplus<sup className="font-body font-bold text-3xl lg:text-4xl ml-1" style={{ color: "var(--yellow)" }}>+</sup>{" "}
            Cleaning Products
          </h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            South India&apos;s most popular and favourite cleaning brand, now in Pune. One trusted range for
            your home, office, kitchen and car.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        <div className="halftone absolute inset-0 opacity-10 pointer-events-none" />
      </section>

      {/* Group relationship */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
        <div
          className="bg-white rounded-3xl shadow-xl border p-8 lg:p-10 grid md:grid-cols-3 gap-8 text-center md:text-left"
          style={{ borderColor: "rgba(131,22,24,0.08)" }}
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--orange)" }}>Brand</p>
            <p className="font-display text-2xl"><YesPlusWordmark /></p>
          </div>
          <div className="md:border-l md:pl-8" style={{ borderColor: "rgba(131,22,24,0.12)" }}>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--orange)" }}>Made by</p>
            <p className="font-display text-2xl" style={{ color: "var(--maroon)" }}>Gurudev Enterprises</p>
          </div>
          <div className="md:border-l md:pl-8" style={{ borderColor: "rgba(131,22,24,0.12)" }}>
            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--orange)" }}>Sister concern of</p>
            <Link href="/about" className="font-display text-2xl hover:opacity-80 transition-opacity" style={{ color: "var(--maroon)" }}>
              Chitra Printers
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-mono text-sm uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--maroon)" }}>Our Range</p>
          <h2 className="font-display text-4xl lg:text-5xl mb-5" style={{ color: "var(--maroon)" }}>Everything for a Cleaner Space</h2>
          <p className="font-body text-lg text-[#5c5245] max-w-2xl mx-auto leading-relaxed">
            Twelve everyday cleaning essentials, available in a range of pack sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {yesPlusProducts.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md border hover:shadow-xl transition-shadow duration-200"
              style={{ borderColor: "rgba(131,22,24,0.08)" }}
            >
              <div className="p-6" style={{ background: "linear-gradient(180deg, #f8f5ef, #f1ece2)" }}>
                <div className="relative aspect-[5/6] bg-white rounded-2xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Yes Plus ${p.name}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1 border-t-4" style={{ borderColor: "var(--maroon)" }}>
                <h3 className="font-display text-2xl mb-2" style={{ color: "var(--maroon)" }}>{p.name}</h3>
                <p className="font-body text-[#4a4038] leading-relaxed flex-1">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display italic text-2xl lg:text-3xl mb-4" style={{ color: "var(--orange)" }}>
            Be a part of all cleaning solution
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-6" style={{ color: "var(--maroon)" }}>
            Order for your home, office or business
          </h2>
          <p className="font-body text-xl mb-10 max-w-2xl mx-auto text-[#5c5245]">
            Retail and bulk orders welcome. Message us on WhatsApp or call and we&apos;ll share prices and pack sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={yesPlusEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body font-bold text-lg px-10 py-5 rounded-full shadow-xl hover:shadow-lg transition-shadow duration-200"
              style={{ background: "var(--maroon)", color: "var(--yellow)" }}
            >
              <MessageCircle size={22} /> Enquire on WhatsApp
            </a>
            <a
              href="tel:+919767742598"
              className="inline-flex items-center gap-3 font-body font-bold text-lg px-10 py-5 rounded-full border-2 hover:bg-white/60 transition-colors duration-200"
              style={{ borderColor: "var(--maroon)", color: "var(--maroon)" }}
            >
              <Phone size={20} /> 97677 42598
            </a>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1 font-body font-semibold mt-8 hover:opacity-80" style={{ color: "var(--maroon)" }}>
            All contact details <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
