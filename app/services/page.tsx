import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  IdCard,
  CalendarDays,
  HeartPulse,
  PartyPopper,
} from "lucide-react";
import RegMark from "@/components/RegMark";

const categories = [
  {
    title: "Printed Marketing Material",
    Icon: BookOpenText,
    desc: "Collateral built to make an impression — from trade-show standees to jubilee souvenirs.",
    items: ["Brochures", "Standees", "Vinyl Stickers", "Vinyl Boards", "Souvenirs"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Corporate Stationery",
    Icon: IdCard,
    desc: "The everyday paperwork of a business, printed to look like it means business.",
    items: ["Visiting Cards", "Letterheads", "Envelopes", "Bill Books / Receipts", "File Folders"],
    img: "https://images.unsplash.com/photo-1616628182504-30a5f0e8c53c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Identity & Access",
    Icon: IdCard,
    desc: "Durable, wearable ID solutions for staff, students, and visitors.",
    items: ["ID Cards", "Lanyards"],
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Calendars & Diaries",
    Icon: CalendarDays,
    desc: "Annual staples that keep a brand on someone's desk all year long.",
    items: ["Table Calendars", "Wall Calendars", "School Calendars", "Diaries"],
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Healthcare Printing",
    Icon: HeartPulse,
    desc: "Specialized, high-durability printing for clinical and diagnostic use.",
    items: ["Hospital Files", "CT Scan Bags"],
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
  },
  {
    title: "Events & Occasions",
    Icon: PartyPopper,
    desc: "Printed pieces for the moments that matter most to your guests.",
    items: ["Wedding / Invitation Cards", "Hotel Menus"],
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop",
  },
];

const process = [
  { label: "Consultation", desc: "We understand your requirement, quantity, and timeline." },
  { label: "Design", desc: "Our team prepares or refines artwork to your specification." },
  { label: "Printing", desc: "Production on modern equipment, checked at every stage." },
  { label: "Delivery", desc: "Finished, packed, and delivered on schedule." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--paper)" }}>
      {/* Banner */}
      <section className="relative py-20" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-sm border mb-6"
            style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
          >
            <RegMark size={12} />
            15+ PRODUCT CATEGORIES
          </div>
          <h1 className="font-display uppercase text-5xl lg:text-6xl text-white">What We Print</h1>
          <p className="font-body text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Equipped with modern technology to meet the highest standards of durability and design.
          </p>
        </div>
      </section>

      {/* Category groups */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {categories.map(({ title, Icon, desc, items, img }, idx) => (
          <div
            key={idx}
            className="ticket-edge relative grid md:grid-cols-5 gap-0 bg-white rounded-sm overflow-hidden shadow-sm"
          >
            <RegMark size={14} className="absolute top-3 right-3 opacity-20 z-10" style={{ color: "var(--maroon)" }} />
            <div className="md:col-span-2 h-48 md:h-full relative">
              <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:col-span-3 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#fdf1d6" }}>
                  <Icon size={20} style={{ color: "var(--maroon)" }} />
                </div>
                <h2 className="font-display uppercase text-xl lg:text-2xl" style={{ color: "var(--maroon)" }}>
                  {title}
                </h2>
              </div>
              <p className="font-body text-[#4a4038] mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs uppercase tracking-wide px-3 py-1.5 rounded-sm border"
                    style={{ borderColor: "rgba(131,22,24,0.2)", color: "var(--maroon)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest mb-3 text-center" style={{ color: "var(--maroon)" }}>
            How It Works
          </p>
          <h2 className="font-display uppercase text-3xl lg:text-4xl text-center mb-14" style={{ color: "var(--maroon)" }}>
            From consultation to delivery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-display text-xl"
                  style={{ background: "var(--maroon)", color: "var(--yellow)" }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-display uppercase text-base mb-2" style={{ color: "var(--maroon)" }}>
                  {step.label}
                </h3>
                <p className="font-body text-sm text-[#5c5245]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--maroon)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display uppercase text-3xl lg:text-4xl mb-5 text-white">
            Need a custom print job?
          </h2>
          <p className="font-body text-lg mb-8 max-w-xl mx-auto text-white/70">
            Tell us what you need and we'll put together a quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-body font-bold px-9 py-4 rounded-sm shadow-xl hover:-translate-y-0.5 transition-transform"
            style={{ background: "var(--yellow)", color: "var(--maroon)" }}
          >
            Contact Us for a Quote <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}