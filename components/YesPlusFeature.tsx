import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import RegMark from "@/components/RegMark";
import { yesPlusProducts, yesPlusEnquiryUrl } from "@/lib/yesplus";

// Yes Plus and Gurudev Enterprises logos, cut from the Yes Plus poster (transparent PNGs, for light backgrounds)
export function YesPlusWordmark({ className = "h-[1.3em]" }: { className?: string }) {
  return (
    <Image
      src="/assets/yesplus/yesplus-logo.png"
      alt="Yesplus"
      width={737}
      height={332}
      className={`inline-block w-auto align-middle ${className}`}
    />
  );
}

export function GurudevLogo({ className = "h-16", mark = false }: { className?: string; mark?: boolean }) {
  return mark ? (
    <Image src="/assets/yesplus/gurudev-mark.png" alt="Gurudev Enterprises" width={264} height={223} className={`w-auto ${className}`} />
  ) : (
    <Image src="/assets/yesplus/gurudev-logo.png" alt="Gurudev Enterprises" width={974} height={374} className={`w-auto ${className}`} />
  );
}

// Teaser band linking to /yes-plus — used on Home and About Us
export default function YesPlusFeature({ compact = false }: { compact?: boolean }) {
  const preview = yesPlusProducts.slice(0, compact ? 4 : 6);

  return (
    <section className="py-20 lg:py-24" style={{ background: "#fdf1d6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-5" style={{ color: "var(--maroon)" }}>
            <RegMark size={14} />
            From our group
          </p>
          <h2 className="font-display text-4xl lg:text-5xl mb-6" style={{ color: "var(--maroon)" }}>
            <YesPlusWordmark className="h-[1.5em] -ml-1 mr-2 -mt-3" /> cleaning products
          </h2>
          <p className="font-body text-lg leading-relaxed text-[#5c5245] mb-4">
            Yes Plus is a brand of <strong className="font-semibold text-[var(--ink)]">Gurudev Enterprises</strong>, a sister
            concern of Chitra Printers. South India&apos;s popular cleaning range is now available in Pune, from hand
            wash and dish wash to glass, tiles and car care.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <GurudevLogo mark className="h-10" />
            <p className="font-body text-base italic text-[#6b5f4f]">
              A Gurudev Enterprises brand. Be a part of all cleaning solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/yes-plus"
              className="inline-flex items-center gap-2 font-body font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: "var(--maroon)", color: "var(--yellow)" }}
            >
              View all 12 products <ArrowUpRight size={18} />
            </Link>
            <a
              href={yesPlusEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold px-7 py-3.5 rounded-full border-2 hover:bg-white/60 transition-colors duration-200"
              style={{ borderColor: "var(--maroon)", color: "var(--maroon)" }}
            >
              <MessageCircle size={18} /> Enquire
            </a>
          </div>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
          {preview.map((p) => (
            <Link
              key={p.name}
              href="/yes-plus"
              className="group bg-white rounded-2xl p-3 shadow-sm border hover:shadow-md transition-shadow duration-200"
              style={{ borderColor: "rgba(131,22,24,0.08)" }}
            >
              <div className="relative aspect-[5/6] overflow-hidden rounded-xl">
                <Image
                  src={p.image}
                  alt={`Yes Plus ${p.name}`}
                  fill
                  sizes="(min-width: 1024px) 200px, 45vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-body font-semibold text-sm text-center mt-3" style={{ color: "var(--maroon)" }}>
                {p.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
