"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight,ArrowRight } from "lucide-react";
import RegMark from "@/components/RegMark";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-12" style={{ background: "var(--paper)" }}>
      
      {/* Premium Banner */}
      <section className="relative pt-24 pb-40" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border border-white/20 mb-6 bg-white/5 backdrop-blur-sm"
            style={{ color: "var(--yellow)" }}
          >
            <RegMark size={14} />
            WE ARE HERE TO HELP
          </div>
          <h1 className="font-display uppercase text-5xl lg:text-7xl text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next printing project? Call, email, or visit our press directly. 
            We provide fast quotes and expert advice.
          </p>
        </div>
        
        {/* Subtle background texture/gradient for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        <div className="halftone absolute inset-0 opacity-10 pointer-events-none" />
      </section>

      {/* Main Content: Asymmetric Split Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 relative -mt-24 z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Details (5 columns wide) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Call Us Card */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "#fdf1d6", color: "var(--maroon)" }}>
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <div className="w-full">
                  <h2 className="font-display uppercase text-2xl mb-4" style={{ color: "var(--maroon)" }}>Call Us</h2>
                  <div className="flex flex-col space-y-3 font-body font-bold text-lg text-[#4a4038]">
                    <a href="tel:+919767742598" className="flex items-center justify-between group hover:text-[var(--orange)] transition-colors">
                      +91 97677 42598 <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                    <a href="tel:+919226128947" className="flex items-center justify-between group hover:text-[var(--orange)] transition-colors">
                      +91 92261 28947 <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                    <a href="tel:+919529827308" className="flex items-center justify-between group hover:text-[var(--orange)] transition-colors">
                      +91 95298 27308 <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a
                      href="https://wa.me/919767742598"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{ background: "#25D366" }}
                    >
                      <MessageCircle size={22} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "#fdf1d6", color: "var(--maroon)" }}>
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div className="w-full overflow-hidden">
                  <h2 className="font-display uppercase text-2xl mb-4" style={{ color: "var(--maroon)" }}>Email Us</h2>
                  <div className="flex flex-col space-y-4 font-body font-semibold text-[#4a4038]">
                    <a href="mailto:chitra.printer@rediffmail.com" className="block group hover:text-[var(--orange)] transition-colors truncate">
                      chitra.printer@rediffmail.com
                    </a>
                    <a href="mailto:chitraprinters7@gmail.com" className="block group hover:text-[var(--orange)] transition-colors truncate">
                      chitraprinters7@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Map & Location (7 columns wide) */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-full min-h-[600px]">
            
            {/* Location Info Header */}
            <div className="p-8 lg:p-10 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b border-slate-100 relative">
              <RegMark size={40} className="absolute right-6 top-6 opacity-5 pointer-events-none" style={{ color: "var(--maroon)" }} />
              
              <div className="flex items-start gap-5 flex-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner" style={{ background: "var(--maroon)", color: "var(--yellow)" }}>
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="font-display uppercase text-2xl mb-2" style={{ color: "var(--maroon)" }}>Visit Our Press</h2>
                  <p className="font-body text-[#5c5245] leading-relaxed max-w-sm">
                    68/23, Masulkar Tower, <br />
                    Masulkar Colony, Pimpri, <br />
                    Pune, Maharashtra - 411018.
                  </p>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="sm:pl-8 sm:border-l border-slate-200 flex items-center gap-4">
                <Clock size={32} style={{ color: "var(--orange)" }} className="opacity-80" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Working Hours</p>
                  <p className="font-body font-bold text-[#4a4038] whitespace-nowrap">Mon - Sat<br/>10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Full Bleed Map */}
            <div className="flex-1 w-full relative bg-slate-100">
              <iframe
                title="Chitra Printers Location"
                src="https://www.google.com/maps?q=Masulkar+Tower+Pimpri+Pune&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-125"
                loading="lazy"
                allowFullScreen
              />
            </div>
            
            {/* Quick Directions Bar */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=68/23,+Masulkar+Tower,+Masulkar+Colony,+Pimpri,+Pune+411018"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 text-center font-display uppercase tracking-widest text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              style={{ background: "var(--maroon)", color: "var(--yellow)" }}
            >
              Get Directions via Google Maps <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}