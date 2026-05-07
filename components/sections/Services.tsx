"use client";

import ServiceCard from "@/components/shared/ServiceCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SERVICES } from "@/lib/constants/services";

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Što nudimo
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-4">
            Naše usluge
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Od hitnih intervencija do kompleksnih elektroinstalacija — pokrivamo
            sve vaše električne potrebe.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
