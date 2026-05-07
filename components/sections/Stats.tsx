"use client";

import AnimatedCounter from "@/components/shared/AnimatedCounter";
import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { value: 20, suffix: "+", label: "Godina iskustva" },
  { value: 24, suffix: "/7", label: "Dostupnost" },
  { value: 100, suffix: "%", label: "Jamstvo na radove" },
  { value: 9, suffix: ".1/10", label: "Ocjena korisnika" },
];

export default function Stats() {
  return (
    <section className="bg-blue-xlight py-16 border-y border-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <div className="font-[var(--font-dm-sans)] font-extrabold text-4xl lg:text-5xl text-blue mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="text-muted text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
