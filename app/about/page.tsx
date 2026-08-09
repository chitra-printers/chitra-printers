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
          <h1 className="font-display uppercase text-5xl lg:text-7xl text-white tracking-tight">
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
            <h2 className="font-display uppercase text-3xl lg:text-4xl mb-6" style={{ color: "var(--maroon)" }}>
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
            {/* PLACEHOLDER: Replace with your actual Old Press / Timeline Photo */}
            <Image 
              src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1000&auto=format&fit=crop" 
              alt="Vintage Printing Press"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-white/50">
              <p className="font-display uppercase text-xl" style={{ color: "var(--maroon)" }}>Since 1990</p>
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
                {/* PLACEHOLDER: Replace with the actual Founder/Family photo */}
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Founder and Family"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full opacity-20 pointer-events-none" style={{ background: "var(--maroon)" }} />
            </div>
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest mb-4 font-bold" style={{ color: "var(--orange)" }}>
                The Visionaries
              </div>
              <h2 className="font-display uppercase text-4xl lg:text-5xl mb-8" style={{ color: "var(--maroon)" }}>
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
          <h2 className="font-display uppercase text-4xl lg:text-5xl mb-4" style={{ color: "var(--maroon)" }}>Our Facility & Team</h2>
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
            {/* PLACEHOLDER: Replace with Staff Working Photo */}
            <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" alt="Staff Working" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Skilled Operators</h3>
            </div>
          </div>

          {/* Staff Working 2 */}
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg group">
            {/* PLACEHOLDER: Replace with Staff Team Photo */}
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Our Team" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Dedicated Team</h3>
            </div>
          </div>

          {/* Machine Close Up */}
          <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden shadow-lg group">
            {/* PLACEHOLDER: Replace with Machine Closeup or Workshop Photo */}
            <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" alt="Precision Equipment" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-white font-display text-2xl tracking-wide">Precision Equipment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WE SERVE (INDUSTRIES WITH BACKGROUND IMAGES) */}
      <section className="py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display uppercase text-4xl lg:text-5xl mb-4 text-white">We Serve</h2>
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
                  <h3 className="font-display uppercase text-lg text-white mb-1 tracking-wide group-hover:text-[var(--yellow)] transition-colors duration-300">{ind.name}</h3>
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
            <h2 className="text-3xl font-display uppercase mb-6" style={{ color: "var(--orange)" }}>Our Vision</h2>
            <p className="text-[#4a4038] font-body text-xl leading-relaxed italic relative z-10">
              "To be a leading and most trusted industrial and commercial printing partner, recognized for quality, innovation, and dependable service while continuously evolving with modern printing technologies."
            </p>
          </div>

          <div className="p-10 rounded-3xl shadow-xl border border-white/20 relative overflow-hidden" style={{ background: "var(--maroon)" }}>
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
              <Target size={120} />
            </div>
            <h2 className="text-3xl font-display uppercase mb-6 text-[var(--yellow)]">Our Mission</h2>
            <ul className="space-y-4 text-white/90 font-body text-lg relative z-10">
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Deliver premium-quality printing with precision.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Provide fast, reliable, and cost-effective services.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Build long-term relationships through service.</li>
              <li className="flex items-start gap-3"><RegMark size={16} className="mt-1 text-[var(--yellow)] shrink-0" /> Invest in modern technology & skilled pros.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display uppercase text-4xl lg:text-5xl" style={{ color: "var(--maroon)" }}>Our Core Values</h2>
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
              <h3 className="font-display uppercase text-xl mb-2" style={{ color: "var(--maroon)" }}>{val.title}</h3>
              <p className="font-body text-[#5c5245]">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CHITRA FAMILY TRIP GALLERY (6 Images) */}
      <section className="py-24" style={{ background: "#fdf1d6" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display uppercase text-4xl lg:text-5xl mb-4" style={{ color: "var(--maroon)" }}>Life at Chitra</h2>
            <p className="font-body text-lg text-[#5c5245] max-w-2xl mx-auto">
              We believe a strong team is built beyond the press floor. Glimpses from our annual company retreats and team celebrations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                {/* PLACEHOLDER: Replace with actual trip images (trip_1.jpg to trip_6.jpg) */}
                <Image 
                  src={`https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=600&auto=format&fit=crop&sig=${num}`} 
                  alt={`Company Trip ${num}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT LOGOS GRID (55 Logos) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display uppercase text-3xl lg:text-4xl mb-4" style={{ color: "var(--maroon)" }}>
              Our Esteemed Customers
            </h2>
            <p className="font-body text-lg font-medium text-[#c0392b] max-w-3xl mx-auto">
              We have more than 400 Valuable Customers but we are not in a position to display all their logos.
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