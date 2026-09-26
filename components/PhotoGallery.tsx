"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Expand, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  contain?: boolean; // show the whole photo instead of cropping it to the tile
};

// Photo grid (with an optional large featured photo above it) whose tiles open a full-size view on click
export default function PhotoGallery({ photos: gridPhotos, featured }: { photos: GalleryPhoto[]; featured?: GalleryPhoto }) {
  const photos = featured ? [featured, ...gridPhotos] : gridPhotos;
  const offset = featured ? 1 : 0;
  const [index, setIndex] = useState<number | null>(null);
  const open = index === null ? null : photos[index];
  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      {featured && (
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="relative block w-full max-w-4xl mx-auto aspect-[4/3] mb-4 lg:mb-6 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group cursor-zoom-in border-4 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--yellow)]"
          aria-label={`Open photo: ${featured.alt}`}
        >
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            sizes="(min-width: 1024px) 900px, 95vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <span className="absolute inset-0 bg-[var(--maroon)]/0 group-hover:bg-[var(--maroon)]/30 transition-colors duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 font-body font-semibold text-sm text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <Expand size={16} /> View photo
            </span>
          </span>
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {gridPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i + offset)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-zoom-in focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--yellow)]"
            aria-label={`Open photo: ${photo.alt}`}
          >
            {photo.contain && (
              <Image src={photo.src} alt="" aria-hidden fill sizes="10vw" className="object-cover blur-xl scale-110 opacity-60" />
            )}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 33vw, 90vw"
              className={`${photo.contain ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
            />
            <span className="absolute inset-0 bg-[var(--maroon)]/0 group-hover:bg-[var(--maroon)]/35 transition-colors duration-300 flex items-center justify-center">
              <span className="flex items-center gap-2 font-body font-semibold text-sm text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Expand size={16} /> View photo
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:text-[var(--yellow)] transition-colors"
            onClick={() => setIndex(null)}
            aria-label="Close photo"
          >
            <X size={32} />
          </button>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 md:left-8 text-white bg-black/50 p-2 rounded-full hover:text-[var(--yellow)] transition-colors"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                className="absolute right-4 md:right-8 text-white bg-black/50 p-2 rounded-full hover:text-[var(--yellow)] transition-colors"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next photo"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={open.alt} className="max-w-[calc(100%-7rem)] md:max-w-[calc(100%-10rem)] max-h-[90vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
