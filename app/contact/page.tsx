"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import RegMark from "@/components/RegMark";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-12" style={{ background: "var(--paper)" }}>
      
      {/* Banner */}
      <section className="relative py-24" style={{ background: "var(--maroon)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-sm border mb-6"
            style={{ borderColor: "rgba(242,205,33,0.4)", color: "var(--yellow)" }}
          >
            <RegMark size={12} />
            REACH OUT
          </div>
          <h1 className="font-display uppercase text-5xl lg:text-7xl text-white tracking-tight">
            Contact Us
          </h1>
          <p className="font-body text-xl text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next printing project? Call, email, or visit our press directly. We are always ready to help.
          </p>
        </div>
      </section>

      {/* Medium-Sized, Wider Contact Cards */}
      <section className="py-20 px-6 lg:px-8">
        {/* max-w-5xl keeps the cards medium-sized while md:grid-cols-2 makes them wider than before */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative -mt-32">
          
          {/* Call Us Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-[10px] flex flex-col items-center text-center transition-transform hover:-translate-y-2 z-10" style={{ borderColor: "var(--maroon)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: "#fdf1d6", color: "var(--orange)" }}>
              <Phone size={36} />
            </div>
            <h2 className="font-display uppercase text-2xl mb-5" style={{ color: "var(--maroon)" }}>Call Us</h2>
            <div className="flex flex-col space-y-3 text-xl font-black text-[#4a4038] w-full">
              <a href="tel:+919767742598" className="hover:text-orange-600 transition-colors py-2 bg-slate-50 rounded-lg">9767742598</a>
              <a href="tel:+919226128947" className="hover:text-orange-600 transition-colors py-2 bg-slate-50 rounded-lg">9226128947</a>
              <a href="tel:+919529827308" className="hover:text-orange-600 transition-colors py-2 bg-slate-50 rounded-lg">9529827308</a>
            </div>
            
            <a
              href="https://wa.me/919767742598"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base text-white transition-transform hover:scale-105 shadow-md"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>

          {/* Email Us Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-[10px] flex flex-col items-center text-center transition-transform hover:-translate-y-2 z-10" style={{ borderColor: "var(--maroon)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: "#fdf1d6", color: "var(--orange)" }}>
              <Mail size={36} />
            </div>
            <h2 className="font-display uppercase text-2xl mb-5" style={{ color: "var(--maroon)" }}>Email Us</h2>
            <div className="flex flex-col space-y-4 text-lg font-bold text-[#4a4038] w-full mt-2">
              <a href="mailto:chitra.printer@rediffmail.com" className="hover:text-orange-600 transition-colors py-4 bg-slate-50 rounded-lg break-all px-4">
                chitra.printer@rediffmail.com
              </a>
              <a href="mailto:chitraprinters7@gmail.com" className="hover:text-orange-600 transition-colors py-4 bg-slate-50 rounded-lg break-all px-4">
                chitraprinters7@gmail.com
              </a>
            </div>
          </div>

          {/* Visit Us Card - Spans Both Columns */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-[10px] flex flex-col items-center text-center transition-transform hover:-translate-y-2 z-10 md:col-span-2" style={{ borderColor: "var(--maroon)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ background: "#fdf1d6", color: "var(--orange)" }}>
              <MapPin size={36} />
            </div>
            <h2 className="font-display uppercase text-2xl mb-6" style={{ color: "var(--maroon)" }}>Visit Us</h2>
            
            <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 md:gap-12">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=68/23,+Masulkar+Tower,+Masulkar+Colony,+Pimpri,+Pune+411018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#4a4038] hover:text-orange-600 transition-colors leading-relaxed py-5 px-8 bg-slate-50 rounded-lg w-full md:w-auto flex-1"
              >
                68/23, Masulkar Tower,<br />
                Masulkar Colony,<br />
                Pimpri, Pune - 411018.
              </a>

              {/* Divider (Vertical on Desktop, Horizontal on Mobile) */}
              <div className="hidden md:block w-px h-24 bg-slate-200"></div>
              <div className="md:hidden w-full h-px bg-slate-200"></div>
              
              <div className="flex flex-col items-center justify-center gap-2 text-[#4a4038] font-bold py-5 px-8 bg-slate-50 rounded-lg w-full md:w-auto flex-1 h-full">
                <span className="uppercase tracking-widest text-xs font-mono text-slate-500 mb-1">Working Hours</span>
                <div className="flex items-center gap-3">
                  <Clock size={28} style={{ color: "var(--orange)" }} />
                  <span className="text-lg text-left leading-snug">Mon - Sat<br/>10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Massive Full-Width Map */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-display uppercase text-3xl mb-8 text-center" style={{ color: "var(--maroon)" }}>
          Find us on the map
        </h2>
        <div className="bg-white p-3 rounded-3xl shadow-2xl border-[8px]" style={{ borderColor: "var(--maroon)" }}>
          <div className="rounded-2xl overflow-hidden w-full h-[500px]">
            <iframe
              title="Chitra Printers Location"
              src="https://www.google.com/maps?q=Masulkar+Tower+Pimpri+Pune&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </main>
  );
}