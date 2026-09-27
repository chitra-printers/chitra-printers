"use client";

import Image from "next/image";
import {
  Target,
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  Leaf,
  Award,
  Landmark,
  Factory,
  HardHat,
  HeartPulse,
  Banknote,
  Hotel,
  Gem,
  GraduationCap,
  Truck,
  Library
} from "lucide-react";
import RegMark from "@/components/RegMark";
import YesPlusFeature from "@/components/YesPlusFeature";
import PhotoGallery from "@/components/PhotoGallery";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)] pb-12 overflow-hidden">
      
      {/* 1. PREMIUM HERO BANNER */}
      <section className="relative pt-24 pb-32" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm"
            style={{ color: "var(--yellow)" }}
          >
            <RegMark size={14} />
            ESTABLISHED 30+ YEARS
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-white">
            Our Legacy
          </h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
            For over three decades, Chitra Printers has been a trusted name in industrial and commercial printing. 
            We blend traditional craftsmanship with modern technology to deliver excellence in every print.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
        <div className="halftone absolute inset-0 opacity-10 pointer-events-none" />
      </section>

      {/* 2. THE CHITRA STORY & TIMELINE (Old Press Photos) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 relative -mt-16 z-20 mb-24">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="font-display text-3xl lg:text-4xl mb-6" style={{ color: "var(--maroon)" }}>
              A Tradition of Excellence
            </h2>
            <p className="font-body text-lg text-[#4a4038] leading-relaxed mb-6">
              What started as a modest printing setup has grown into a fully equipped, modern facility. Over the years, we have continuously evolved, adopting the latest machinery while maintaining the meticulous attention to detail that our foundational years taught us.
            </p>
            <p className="font-body text-lg text-[#4a4038] leading-relaxed">
              Our long-standing relationships with clients across Maharashtra stand as a testament to our reliability. When you print with Chitra, you are partnering with decades of proven expertise.
            </p>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image 
              src="/assets/tradition.jpg" 
              alt="The original Chitra Printers shop front, with its old 'Chithra Printing & Binding Works' sign"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[65%_0%]"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-white/50">
              <p className="font-display text-xl" style={{ color: "var(--maroon)" }}>Since 1990</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER & FAMILY SECTION */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <Image 
                  src="/assets/owner.jpg" 
                  alt="Owner of Chitra Printers at his desk"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full opacity-20 pointer-events-none" style={{ background: "var(--maroon)" }} />
            </div>
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--orange)" }}>
                The Visionaries
              </div>
              <h2 className="font-display text-4xl lg:text-5xl mb-8" style={{ color: "var(--maroon)" }}>
                Family Owned, <br/> Professionally Run
              </h2>
              <blockquote className="border-l-4 pl-6 italic font-body text-2xl text-[#5c5245] mb-8 leading-relaxed" style={{ borderColor: "var(--yellow)" }}>
                "We built Chitra Printers not just to run a business, but to build lasting relationships. Every client is an extension of our family, and every project is handled with personal care and professional precision."
              </blockquote>
              <p className="font-body text-lg text-[#4a4038] leading-relaxed mb-8">
                As a family-owned enterprise, our core values of honesty, hard work, and integrity are deeply embedded in everything we do. The dedication of our founders has been passed down, ensuring that our commitment to quality remains as strong today as it was on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKSPACE & TEAM FACILITY */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl mb-4" style={{ color: "var(--maroon)" }}>Our Facility & Team</h2>
          <p className="font-body text-lg text-[#5c5245] max-w-2xl mx-auto">
            Equipped with modern machinery and powered by a highly skilled workforce, our press floor is where ideas turn into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Landscape Shot */}
          <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden shadow-lg group">
            {/* PLACEHOLDER: Replace with Press/Machine Floor Landscape Photo */}
            <Image src="/assets/press.jpg" alt="Press Floor" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Modern Press Floor</h3>
            </div>
          </div>

          {/* Staff Working 1 */}
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg group">
            <Image src="/assets/workspace.jpeg" alt="Chitra Printers workspace" fill sizes="(min-width: 768px) 25vw, 90vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Skilled Operators</h3>
            </div>
          </div>

          {/* Finishing */}
          <div className="relative h-80 lg:h-[26rem] rounded-3xl overflow-hidden shadow-lg group">
            <Image src="/assets/creasing.jpg" alt="Operator running the autofeed creasing machine" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Precision Finishing</h3>
            </div>
          </div>

          {/* Staff Working 2 */}
          <div className="md:col-span-2 relative h-80 lg:h-[26rem] rounded-3xl overflow-hidden shadow-lg group">
            <Image src="/assets/team.jpeg" alt="The Chitra Printers team" fill sizes="(min-width: 768px) 60vw, 90vw" className="object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Dedicated Team</h3>
            </div>
          </div>

        </div>
      </section>

      {/* GROUP COMPANY: YES PLUS */}
      <YesPlusFeature compact />

      {/* 5. WE SERVE (INDUSTRIES WITH BACKGROUND IMAGES) */}
      <section className="py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl mb-4 text-white">We Serve</h2>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              The firm is fully equipped to provide a complete range of quality printing services to our esteemed customers across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Government", sub: "Central, State & Corp", icon: Landmark, img: "/assets/govt.jpg" },
              { name: "Industries", sub: "Chemical & Tooling", icon: Factory, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
              { name: "Constructions", sub: "Builders & Developers", icon: HardHat, img: "/assets/cons.avif" },
              { name: "Hospitals", sub: "Healthcare & Clinics", icon: HeartPulse, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
              { name: "Financial", sub: "Inclusion & Banking", icon: Banknote, img: "https://images.unsplash.com/photo-1616803140344-6682afb13cda?q=80&w=600&auto=format&fit=crop" },
              { name: "Hotels", sub: "Hospitality & Restro", icon: Hotel, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop" },
              { name: "Jewellers", sub: "Retail & Wholesale", icon: Gem, img: "/assets/jewel.avif" },
              { name: "Schools", sub: "Primary & Secondary", icon: Library, img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop" },
              { name: "Transports", sub: "Logistics & Fleet", icon: Truck, img: "/assets/transport.webp" },
              { name: "Colleges", sub: "Higher Education", icon: GraduationCap, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" },
            ].map((ind, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-white/20 text-center hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--yellow)] transition-all duration-300 group min-h-[220px] flex flex-col justify-center items-center p-6">
                
                {/* Background Image */}
                <Image
                  src={ind.img}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/65 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <ind.icon size={26} style={{ color: "var(--maroon)" }} />
                  </div>
                  <h3 className="font-display text-lg text-white mb-1 tracking-wide group-hover:text-[var(--yellow)] transition-colors duration-300">{ind.name}</h3>
                  <p className="font-body text-xs text-white/90 uppercase tracking-wider">{ind.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISION, MISSION & VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 rounded-3xl bg-white shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Lightbulb size={120} />
            </div>
            <h2 className="text-3xl font-display mb-6" style={{ color: "var(--orange)" }}>Our Vision</h2>
            <p className="text-[#4a4038] font-body text-xl leading-relaxed italic relative z-10">
              "To be a leading and most trusted industrial and commercial printing partner, recognized for quality, innovation, and dependable service while continuously evolving with modern printing technologies."
            </p>
          </div>

          <div className="p-10 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden" style={{ background: "var(--maroon)" }}>
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
              <Target size={120} />
            </div>
            <h2 className="text-3xl font-display mb-6 text-[var(--yellow)]">Our Mission</h2>
            <ul className="space-y-4 text-white/90 font-body text-lg relative z-10">
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Deliver premium-quality printing with precision.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Provide fast, reliable, and cost-effective services.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Build long-term relationships through service.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Invest in modern technology & skilled pros.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display text-4xl lg:text-5xl" style={{ color: "var(--maroon)" }}>Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Quality First", desc: "Excellence in every print.", icon: Award },
            { title: "Satisfaction", desc: "Your success is our priority.", icon: HeartHandshake },
            { title: "Innovation", desc: "Modern solutions for every need.", icon: Lightbulb },
            { title: "Integrity", desc: "Honest, transparent, and reliable.", icon: ShieldCheck },
            { title: "Commitment", desc: "On-time delivery, consistent quality.", icon: Target },
            { title: "Sustainability", desc: "Eco-friendly printing practices.", icon: Leaf }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 mx-auto rounded-full mb-4 flex items-center justify-center" style={{ background: "#fdf1d6", color: "var(--orange)" }}>
                <val.icon size={24} />
              </div>
              <h3 className="font-display text-xl mb-2" style={{ color: "var(--maroon)" }}>{val.title}</h3>
              <p className="font-body text-[#5c5245]">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LIFE AT CHITRA GALLERY */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl mb-4" style={{ color: "var(--maroon)" }}>Life at Chitra</h2>
            <p className="font-body text-lg text-[#5c5245] max-w-2xl mx-auto">
              We believe a strong team is built beyond the press floor. Glimpses from our annual company retreats and team celebrations.
            </p>
          </div>

          <PhotoGallery
            featured={{ src: "/assets/team_5.jpeg", alt: "The Chitra Printers team at the office" }}
            photos={[
              { src: "/assets/team_2.jpeg", alt: "Chitra team get-together" },
              { src: "/assets/team_3.jpeg", alt: "Chitra team members together" },
              { src: "/assets/team_4.jpeg", alt: "Chitra team outing", contain: true },
            ]}
          />

          <div className="mt-4 lg:mt-6">
            <PhotoGallery
              columns={2}
              photos={[
                { src: "/assets/office_team.jpg", alt: "The Chitra Printers office team at their desks" },
                { src: "/assets/office_desk.jpg", alt: "Chitra team member at the design desk beside the Docucolor press", contain: true },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 8. CLIENT LOGOS GRID (55 Logos) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl mb-4" style={{ color: "var(--maroon)" }}>
              Our Esteemed Customers
            </h2>
            <p className="font-body text-lg font-medium text-[#c0392b] max-w-3xl mx-auto">
              We are proud to serve more than 400 valued customers. Here are just a few of them.
            </p>
          </div>

          {/* 5-Column Grid matching the brochure layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {Array.from({ length: 55 }, (_, i) => i + 1).map((num) => {
              // Ensure formatting matches "logo_01.png" style
              const formattedNum = String(num).padStart(2, '0');
              return (
                <div 
                  key={num} 
                  className="bg-white rounded-xl border-[1.5px] border-slate-200 p-4 flex items-center justify-center h-24 hover:border-[var(--orange)] hover:shadow-lg transition-all duration-300"
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
          
        </div>
      </section>

    </main>
  );
}