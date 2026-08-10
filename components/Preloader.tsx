"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scrolling while the preloader is active
    document.body.style.overflow = "hidden";

    // Start fading out after 2.2 seconds (giving them time to read the legacy text)
    const timer = setTimeout(() => {
      setIsFading(true);
      
      // Completely remove the preloader from the DOM after the fade transition ends
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset"; // Unlock scrolling
      }, 800); 
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style jsx>{`
        .print-line {
          width: 0;
          animation: print 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        @keyframes print {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-all duration-[800ms] ease-in-out bg-[#0a0a0a] ${
          isFading 
            ? "opacity-0 invisible blur-md -translate-y-12" 
            : "opacity-100 visible blur-0 translate-y-0"
        }`}
      >
        {/* Subtle cinematic glow behind the logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[50vw] h-[50vw] opacity-[0.04] blur-[100px] rounded-full" style={{ background: "var(--orange)" }} />
        </div>

        <div className="relative flex flex-col items-center z-10 w-full px-6">
          
          {/* Enlarged Pulsing Logo */}
          <div className="animate-pulse duration-1000 mb-8">
            <Image
              src="/assets/logo.png"
              alt="Chitra Printers Logo"
              width={400}
              height={400}
              className="object-contain h-32 md:h-48 w-auto drop-shadow-2xl"
              priority
            />
          </div>
          
          {/* Brand Name */}
          <h1 
            className="font-display uppercase font-black text-4xl md:text-5xl tracking-widest text-white mb-4 text-center drop-shadow-md"
          >
            Chitra Printers
          </h1>

          {/* Legacy Tagline */}
          <p 
            className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-12 text-center"
            style={{ color: "var(--orange)" }}
          >
            Legacy since last 30+ years
          </p>

          {/* Premium Gradient Progress Line */}
          <div className="h-[2px] w-48 md:w-72 bg-white/10 overflow-hidden relative rounded-full">
            <div 
              className="absolute top-0 left-0 h-full print-line rounded-full" 
              style={{ background: "linear-gradient(90deg, var(--maroon), var(--orange), var(--yellow))" }}
            />
          </div>

        </div>
      </div>
    </>
  );
}