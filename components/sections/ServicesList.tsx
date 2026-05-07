"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { SERVICES } from "@/lib/constants/services";

export default function ServicesList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Što nudimo
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-4">
            Električne usluge za dom i poslovni prostor
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Specijalizirani smo za sve vrste elektro radova — od hitnih
            intervencija do kompleksnih elektroinstalacija. Svaki posao
            izvodimo profesionalno, sigurno i prema svim propisima.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.07}>
              <div className="flex gap-5 p-6 bg-surface rounded-2xl border border-gray-100 hover:border-blue/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-blue" />
                </div>
                <div>
                  <h3 className="font-[var(--font-dm-sans)] font-bold text-lg text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
