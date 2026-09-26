"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  contain?: boolean; // show the whole photo instead of cropping it to the tile
};

// Photo grid whose tiles open a full-size view on click
export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpen(photo)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-zoom-in"
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
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:text-[var(--yellow)] transition-colors"
            onClick={() => setOpen(null)}
            aria-label="Close photo"
          >
            <X size={32} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={open.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </>
  );
}
