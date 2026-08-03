"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Presentation,
  IdCard,
  Book,
  CalendarDays,
  BookOpenText,
  Award,
  CalendarRange,
  ShoppingBag,
  FileText,
  Receipt,
  Contact,
  Mail,
  PartyPopper,
  Sticker,
  Signpost,
  Utensils,
  Library,
  HeartPulse,
  Printer,
  X
} from "lucide-react";
import RegMark from "@/components/RegMark";

type Category = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  desc: string;
  images: string[];
  stack?: boolean;   // vertical stack, full-width (Envelope)
  contain?: boolean; // show full image uncropped (Identity Card)
};

const categories: Category[] = [
  { title: "Hospital File", Icon: FileText, images: ["/assets/hf_1.webp", "/assets/hf_2.webp", "/assets/hf_3.webp"],
    desc: "Sturdy, custom-branded files that hospitals and clinics use to organise patient records, prescriptions, and reports. Printed with your logo, department colours, and patient detail fields, so every file leaving your reception looks consistent and professional." },
  { title: "CT Scan Bag", Icon: HeartPulse, images: ["/assets/ct_1.webp", "/assets/ct_2.webp", "/assets/ct_3.webp"],
    desc: "Reinforced carry bags sized specifically for MRI and CT scan film reports, so patients can safely transport and store their reports without them getting bent or damaged. Available with your diagnostic centre's branding printed directly on the bag." },
  { title: "Calendar", Icon: CalendarDays, images: ["/assets/cal_1.webp", "/assets/cal_2.webp", "/assets/cal_3.webp"],
    desc: "Full-size wall calendars designed for businesses, temples, and community organisations to gift throughout the year. We handle everything from the artwork and month layouts to festival dates, so your calendar looks festive and stays useful on the wall all year." },
  { title: "Standee", Icon: Presentation, images: ["/assets/standee -1.webp", "/assets/standee -2.webp", "/assets/standee -3.webp"],
    desc: "Roll-up standees built for exhibitions, product launches, and in-store promotions. Lightweight enough to carry between events but sturdy enough to stand through a full day of foot traffic, printed in bold colours that catch attention from across a room." },
  { title: "Identity Card", Icon: IdCard, images: ["/assets/icard_1.webp", "/assets/icard_2.webp", "/assets/icard_3.webp", "/assets/icard_4.webp"], contain: true,
    desc: "Professional ID cards and lanyards for corporate offices, schools, and colleges. We can include photos, QR codes, and barcodes, and print in bulk for entire staff or student batches without any drop in print quality." },
  { title: "Diarys", Icon: Book, images: ["/assets/dairy_1.webp", "/assets/dairy_2.webp", "/assets/dairy_3.webp"],
    desc: "Custom-printed diaries that make a great year-end corporate gift or student planner. Choose your cover material, add your company or school branding on the front, and we'll take care of the binding and page layout inside." },
  { title: "School Calendar", Icon: CalendarDays, images: ["/assets/sc_1.webp", "/assets/sc_2.webp", "/assets/sc_3.webp"],
    desc: "Academic calendars built around your school's term dates, holidays, and events, so parents always know what's coming up. Often combined with attendance registers or activity trackers, printed to survive a full academic year of daily use." },
  { title: "Brochure", Icon: BookOpenText, images: ["/assets/br_1.webp", "/assets/br_2.webp", "/assets/br_3.webp"],
    desc: "Multi-page, multi-fold brochures and catalogs that showcase your products or services in detail. We help lay out your content across pages and folds so the brochure reads smoothly and looks like a proper catalog, not just stapled pages." },
  { title: "Souvenir", Icon: Award, images: ["/assets/sr_1.webp", "/assets/sr_2.webp", "/assets/sr_3.webp"],
    desc: "Commemorative souvenir booklets for jubilees, anniversaries, and milestone events. We help pull together photos, sponsor pages, and messages into a keepsake booklet that guests will actually want to hold on to." },
  { title: "Table Calendar", Icon: CalendarRange, images: ["/assets/tc_1.webp", "/assets/tc_2.webp"],
    desc: "Compact desk calendars that put your brand in front of clients every day of the year. A great low-cost gifting option for offices, banks, and shops that want a constant, quiet reminder of your business on someone's desk." },
  { title: "Bags", Icon: ShoppingBag, images: ["/assets/bag_1.webp", "/assets/bag_2.webp", "/assets/bag_3.webp"],
    desc: "Paper and non-woven cloth bags for retail packaging, gifting, or events, printed with your logo and brand colours. A simple way to turn something functional into a small piece of walking advertising for your store." },
  { title: "Letter Head", Icon: FileText, images: ["/assets/lh_1.webp", "/assets/lh_2.webp", "/assets/lh_3.webp"],
    desc: "Official letterheads printed on premium paper stock, giving every company letter, quotation, and notice a consistent, professional look. We match your existing brand colours and logo placement exactly so nothing feels off." },
  { title: "Bill Book / Receipt", Icon: Receipt, images: ["/assets/bb_1.webp", "/assets/bb_3.webp"],
    desc: "Custom invoice books, duplicate/triplicate bill books, and receipt pads set up with your business name, GST details, and numbering exactly how you need them. Built for daily counter use without tearing or fading." },
  { title: "Visiting Card", Icon: Contact, images: ["/assets/vc_1.webp", "/assets/vc_2.webp", "/assets/vc_3.webp"],
    desc: "Premium visiting cards with finishes like matte lamination, spot UV, or embossing, so your card stands out the moment someone pulls it from their wallet. Perfect for making a strong first impression at meetings and events." },
  { title: "Envelop", Icon: Mail, images: ["/assets/envelope_1.webp", "/assets/envelope_2.webp", "/assets/envelope_3.webp"], stack: true,
    desc: "Custom-printed envelopes in various sizes for business correspondence, invitations, and official mailers. Printed with your logo and return address so even the outside of your mail looks intentional and branded." },
  { title: "Wedding Card / Invitation Card", Icon: PartyPopper, images: ["/assets/wc_1.webp", "/assets/wc_2.webp", "/assets/wc_3.webp", "/assets/wc_4.webp", "/assets/wc_5.webp", "/assets/wc_6.webp"],
    desc: "Beautifully designed invitation cards for weddings, housewarmings, and other celebrations, available in a range of styles from traditional to modern. We guide you through paper choice, foiling, and inserts so the card matches the tone of your event." },
  { title: "Vinyl Sticker", Icon: Sticker, images: ["/assets/vs_1.jpg"],
    desc: "Weatherproof vinyl stickers for product labeling, packaging, and vehicle or storefront branding. Cut to any shape you need, with colours that hold up outdoors without peeling or fading in the sun." },
  { title: "Vinyl Board", Icon: Signpost, images: ["/assets/vb_1.webp", "/assets/vb_2.webp", "/assets/vb_3.webp"],
    desc: "Weatherproof vinyl signage boards for outdoor storefronts and indoor directional signs. Built to handle sun, rain, and daily wear while keeping your business name clearly visible from a distance." },
  { title: "Menu", Icon: Utensils, images: ["/assets/m1.webp", "/assets/m2.webp"],
    desc: "Restaurant and hotel menus printed on sturdy stock and laminated for daily handling, spills, and wipe-downs. We can also help design the layout so dishes are easy to scan and your best items stand out." },
  { title: "Binding Works", Icon: Library, images: ["/assets/binding.jpg"],
    desc: "Professional document finishing including hardcover binding, spiral binding, and perfect binding for reports, theses, and manuals. A clean binding job is often what makes a document feel finished rather than just printed pages stapled together." }
];

const process = [
  { label: "Discussion", desc: "Tell us what you need and how many copies." },
  { label: "Design Check", desc: "We prepare and check your design before printing." },
  { label: "Printing", desc: "We print your items with high-quality machines." },
  { label: "Delivery", desc: "Your items are packed and delivered on time." },
];

export default function ServicesPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-black/50 p-2 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={32} />
          </button>
          <img src={selectedImg} alt="Expanded view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}

      {/* Banner */}
      <section className="relative py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-sm border mb-6 bg-white/5" style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}>
            <RegMark size={14} />
            WHAT WE PROVIDE
          </div>
          <h1 className="font-display uppercase text-5xl lg:text-7xl text-white tracking-tight">Everything You Need, Printed Right</h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            From everyday office stationery to large event signage, our machines and team cover the full range —
            so whatever your business needs printed, you can get it done in one place, on time, and at the quality you expect.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-sm uppercase tracking-widest mb-4 text-center font-bold" style={{ color: "var(--maroon)" }}>How It Works</p>
          <h2 className="font-display uppercase text-4xl lg:text-5xl text-center mb-20" style={{ color: "var(--maroon)" }}>Simple Steps to Get Your Print</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="text-center relative group bg-white p-8 rounded-2xl shadow-md border-b-4 transition-shadow duration-200 hover:shadow-xl" style={{ borderColor: "var(--maroon)" }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-display text-3xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-200" style={{ background: "var(--maroon)", color: "var(--yellow)" }}>
                  {idx + 1}
                </div>
                <h3 className="font-display uppercase text-2xl mb-4" style={{ color: "var(--maroon)" }}>{step.label}</h3>
                <p className="font-body text-lg leading-relaxed text-[#5c5245]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services intro */}
      <section className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-mono text-sm uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--maroon)" }}>Our Services</p>
        <h2 className="font-display uppercase text-4xl lg:text-5xl mb-6" style={{ color: "var(--maroon)" }}>Items We Print</h2>
        <p className="font-body text-lg text-[#5c5245] max-w-2xl mx-auto leading-relaxed">
          A look at the range of everyday and specialty items we produce in-house — browse a category below to see real samples of our work.
        </p>
      </section>

      {/* Category grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map(({ title, Icon, desc, images, stack, contain }, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border transition-shadow duration-200 hover:shadow-2xl" style={{ borderColor: "rgba(131,22,24,0.08)" }}>
              <div className="w-full p-6" style={{ background: "linear-gradient(180deg, #f8f5ef, #f1ece2)" }}>
                <Gallery images={images} title={title} onSelect={setSelectedImg} stack={stack} contain={contain} />
              </div>
              <div className="w-full p-8 flex flex-col relative">
                <RegMark size={20} className="absolute top-6 right-6 opacity-10" style={{ color: "var(--maroon)" }} />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner" style={{ background: "#fdf1d6" }}>
                    <Icon size={28} style={{ color: "var(--maroon)" }} />
                  </div>
                  <h2 className="font-display uppercase text-2xl lg:text-3xl" style={{ color: "var(--maroon)" }}>{title}</h2>
                </div>
                <p className="font-body text-[#4a4038] text-lg leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — matched to "Simple Steps" section color */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display uppercase text-4xl lg:text-5xl mb-8 tracking-tight" style={{ color: "var(--maroon)" }}>Ready to print with us?</h2>
          <p className="font-body text-xl mb-12 max-w-2xl mx-auto text-[#5c5245]">
            Call us today or visit our shop in Pimpri. We will give you the best quality at the right price.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 font-body font-black text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-xl transition-shadow duration-200" style={{ background: "var(--maroon)", color: "var(--yellow)" }}>
            Contact Us Now <ArrowUpRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}

// Grid pattern per image count: [columns, aspect ratio]
const GRID_CONFIG: Record<number, { cols: string; aspect: string }> = {
  1: { cols: "grid-cols-1", aspect: "aspect-[16/9]" },
  2: { cols: "grid-cols-2", aspect: "aspect-[4/3]" },
  3: { cols: "grid-cols-3", aspect: "aspect-square" },
  4: { cols: "grid-cols-2", aspect: "aspect-square" },
};
const DEFAULT_CONFIG = { cols: "grid-cols-3", aspect: "aspect-square" };

function Gallery({
  images,
  title,
  onSelect,
  stack = false,
  contain = false
}: {
  images: string[];
  title: string;
  onSelect: (src: string) => void;
  stack?: boolean;
  contain?: boolean;
}) {
  const { cols, aspect } = stack ? { cols: "", aspect: "aspect-[16/7]" } : (GRID_CONFIG[images.length] ?? DEFAULT_CONFIG);

  return (
    <div className={stack ? "flex flex-col gap-4" : `grid ${cols} gap-4`}>
      {images.map((img, i) => (
        <ImageTile
          key={i}
          src={img}
          alt={`${title} ${i + 1}`}
          onClick={() => onSelect(img)}
          className={`w-full ${aspect}`}
          contain={contain}
        />
      ))}
    </div>
  );
}

function ImageTile({
  src,
  alt,
  onClick,
  className = "",
  contain = false
}: {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
  contain?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer border-2 group transition-shadow duration-200 shadow-sm hover:shadow-lg [border-color:rgba(131,22,24,0.08)] hover:[border-color:var(--yellow)] ${className}`}
      style={{ background: contain ? "#fff" : undefined }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full h-full ${contain ? "object-contain p-2" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10"
        style={{ background: contain ? "rgba(131,22,24,0.06)" : "linear-gradient(180deg, rgba(131,22,24,0.15), rgba(131,22,24,0.55))" }}
      >
        <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-200" style={{ background: "var(--yellow)" }}>
          <Printer size={20} style={{ color: "var(--maroon)" }} />
        </div>
      </div>
    </div>
  );
}