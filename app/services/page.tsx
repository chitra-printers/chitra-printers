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
  ZoomIn,
  X
} from "lucide-react";
import RegMark from "@/components/RegMark"; 

// 20 Exact Categories mapping to the Brochure Pages 3-7
const categories = [
  { 
    title: "Hospital File", 
    Icon: FileText, 
    desc: "Custom printed files for hospitals and clinics.", 
    images: ["/assets/File.jpg", "/assets/final file-1.jpg"] 
  },
  { 
    title: "CT Scan Bag", 
    Icon: HeartPulse, 
    desc: "High-quality bags for MRI and CT scan reports.", 
    images: ["/assets/CT SCAN BAG.jpg"] 
  },
  { 
    title: "Calendar", 
    Icon: CalendarDays, 
    desc: "Custom wall calendars for businesses and temples.", 
    images: ["/assets/Sky Gold Wall Calendar 2026.jpg", "/assets/jaiganesh calendar.jpg", "/assets/January.jpg"] 
  },
  { 
    title: "Standee", 
    Icon: Presentation, 
    desc: "Roll-up standees for events and promotions.", 
    images: ["https://images.unsplash.com/photo-1621021151608-f463ce9d1e8d?q=80&w=1000&auto=format&fit=crop"] 
  },
  { 
    title: "Identity Card", 
    Icon: IdCard, 
    desc: "Professional ID cards and lanyards for corporate and school use.", 
    images: ["/assets/ID Cards.jpg", "/assets/ID cards-X std.jpg"] 
  },
  { 
    title: "Diarys", 
    Icon: Book, 
    desc: "Custom printed diaries for corporate gifting and schools.", 
    images: ["/assets/Diary Cover page.jpg"] 
  },
  { 
    title: "School Calendar", 
    Icon: CalendarDays, 
    desc: "Academic calendars and planners for educational institutes.", 
    images: ["/assets/GGIS_student_diary__attendance_register_cover.jpg"] 
  },
  { 
    title: "Brochure", 
    Icon: BookOpenText, 
    desc: "Multi-page brochures and catalogs for product showcases.", 
    images: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop"] 
  },
  { 
    title: "Souvenir", 
    Icon: Award, 
    desc: "Jubilee souvenirs and special event booklets.", 
    images: ["/assets/Silver Juble Cover.jpg"] 
  },
  { 
    title: "Table Calendar", 
    Icon: CalendarRange, 
    desc: "Compact table calendars for desk branding.", 
    images: ["/assets/table calendar.jpg", "/assets/table calendar 1.jpg"] 
  },
  { 
    title: "Bags", 
    Icon: ShoppingBag, 
    desc: "Paper and non-woven cloth bags for retail and gifting.", 
    images: ["https://images.unsplash.com/photo-1551842835-77981b23dbca?q=80&w=1000&auto=format&fit=crop"] 
  },
  { 
    title: "Letter Head", 
    Icon: FileText, 
    desc: "Official company letterheads printed on premium paper.", 
    images: ["/assets/Letter head.jpg", "/assets/letter head 1.jpg", "/assets/Hotel ARC International LH.jpg"] 
  },
  { 
    title: "Bill Book / Receipt", 
    Icon: Receipt, 
    desc: "Custom invoice books, bill books, and receipt pads.", 
    images: ["/assets/bill book.jpg"] 
  },
  { 
    title: "Visiting Card", 
    Icon: Contact, 
    desc: "Premium quality visiting cards with custom finishes.", 
    images: ["/assets/Visiting card 1.jpg", "/assets/Rasrang Visiting Card - 13 July.jpg"] 
  },
  { 
    title: "Envelop", 
    Icon: Mail, 
    desc: "Custom printed envelopes in various sizes.", 
    images: ["/assets/envelop.jpg"] 
  },
  { 
    title: "Wedding Card / Invitation Card", 
    Icon: PartyPopper, 
    desc: "Beautifully designed invitations for weddings and events.", 
    images: ["/assets/wedding marathi.jpg", "/assets/Invitation Opening.jpg", "/assets/Vastu Shanti Invitation.jpg"] 
  },
  { 
    title: "Vinyl Sticker", 
    Icon: Sticker, 
    desc: "Durable vinyl stickers for branding and labeling.", 
    images: ["/assets/vastu udyog.jpg"] 
  },
  { 
    title: "Vinyl Board", 
    Icon: Signpost, 
    desc: "Weatherproof vinyl boards for outdoor and indoor signage.", 
    images: ["/assets/vinl board.jpg"] 
  },
  { 
    title: "Menu", 
    Icon: Utensils, 
    desc: "Restaurant and hotel menus printed with lamination.", 
    images: ["/assets/Hotel Green Valley Menu.jpg"] 
  },
  { 
    title: "Binding Works", 
    Icon: Library, 
    desc: "Professional document finishing, including hardcover, spiral, and perfect binding.", 
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop"] 
  }
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
      
      {/* Full-Screen Image Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-black/50 p-2 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImg} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Banner */}
      <section className="relative py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-sm border mb-6 bg-white/5"
            style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
          >
            <RegMark size={14} />
            OUR PRINTING SERVICES
          </div>
          <h1 className="font-display uppercase text-5xl lg:text-7xl text-white tracking-tight">
            What We Print
          </h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            From everyday office items to large banners, we have the machines to print exactly what your business needs.
          </p>
        </div>
      </section>

      {/* 2-Column Grid for 20 Categories */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {categories.map(({ title, Icon, desc, images }, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border-2 hover:shadow-2xl transition-all duration-300"
              style={{ borderColor: "rgba(131,22,24,0.1)" }}
            >
              {/* Image Gallery Area - Pure CSS heights, strictly optimized */}
              <div className="w-full p-6 bg-slate-100 flex gap-4 h-[320px]">
                
                {images.length === 1 && (
                  <OptimizedImage 
                    src={images[0]} 
                    alt={title} 
                    onClick={() => setSelectedImg(images[0])} 
                    className="w-full h-full"
                  />
                )}

                {images.length === 2 && (
                  <>
                    <OptimizedImage 
                      src={images[0]} 
                      alt={`${title} 1`} 
                      onClick={() => setSelectedImg(images[0])} 
                      className="w-1/2 h-full"
                    />
                    <OptimizedImage 
                      src={images[1]} 
                      alt={`${title} 2`} 
                      onClick={() => setSelectedImg(images[1])} 
                      className="w-1/2 h-full"
                    />
                  </>
                )}

                {images.length >= 3 && (
                  <>
                    <OptimizedImage 
                      src={images[0]} 
                      alt={`${title} main`} 
                      onClick={() => setSelectedImg(images[0])} 
                      className="w-2/3 h-full"
                    />
                    <div className="w-1/3 flex flex-col gap-4 h-full">
                      {images.slice(1, 3).map((img, i) => (
                        <OptimizedImage 
                          key={i} 
                          src={img} 
                          alt={`${title} gallery ${i}`} 
                          onClick={() => setSelectedImg(img)} 
                          className="w-full flex-1"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Text Content Area */}
              <div className="w-full p-8 flex flex-col relative">
                <RegMark size={20} className="absolute top-6 right-6 opacity-10" style={{ color: "var(--maroon)" }} />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-inner" style={{ background: "#fdf1d6" }}>
                    <Icon size={28} style={{ color: "var(--maroon)" }} />
                  </div>
                  <h2 className="font-display uppercase text-2xl lg:text-3xl" style={{ color: "var(--maroon)" }}>
                    {title}
                  </h2>
                </div>
                
                <p className="font-body text-[#4a4038] text-lg leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-sm uppercase tracking-widest mb-4 text-center font-bold" style={{ color: "var(--maroon)" }}>
            How It Works
          </p>
          <h2 className="font-display uppercase text-4xl lg:text-5xl text-center mb-20" style={{ color: "var(--maroon)" }}>
            Simple Steps to Get Your Print
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="text-center relative group bg-white p-8 rounded-2xl shadow-md border-b-4" style={{ borderColor: "var(--maroon)" }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-display text-3xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300"
                  style={{ background: "var(--maroon)", color: "var(--yellow)" }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-display uppercase text-2xl mb-4" style={{ color: "var(--maroon)" }}>
                  {step.label}
                </h3>
                <p className="font-body text-lg leading-relaxed text-[#5c5245]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display uppercase text-4xl lg:text-5xl mb-8 text-white tracking-tight">
            Ready to print with us?
          </h2>
          <p className="font-body text-xl mb-12 max-w-2xl mx-auto text-white/80">
            Call us today or visit our shop in Pimpri. We will give you the best quality at the right price.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-body font-black text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
            style={{ background: "var(--yellow)", color: "var(--maroon)" }}
          >
            Contact Us Now <ArrowUpRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}

// ----------------------------------------------------------------------
// Highly Optimized Image Component
// Removed React State entirely. Relies purely on CSS heights and Lazy Loading.
// ----------------------------------------------------------------------
function OptimizedImage({ 
  src, 
  alt, 
  onClick,
  className = ""
}: { 
  src: string; 
  alt: string; 
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer bg-white border border-slate-200 group transition-all duration-300 shadow-sm hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" size={36} />
      </div>
    </div>
  );
}