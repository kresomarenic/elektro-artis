"use client";

import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

const images = [
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    alt: "Elektroinstalacije u Zagrebu — Elektro Artis",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Ugradnja LED rasvjete Zagreb",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    alt: "Električni razvodnik — modernizacija osigurača",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    alt: "Tehničar na terenu — Elektro Artis Zagreb",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=600&q=80",
    alt: "Električne instalacije poslovnog prostora",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Naš rad
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text">
            Iz prakse
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Tall image on the left */}
          <AnimatedSection className="row-span-2" direction="left">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </AnimatedSection>

          {/* 4 smaller images */}
          {images.slice(1).map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.08}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
