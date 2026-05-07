import AnimatedSection from "@/components/shared/AnimatedSection";
import { Phone, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Nazovite ili pišite",
    description:
      "Opišite nam problem telefonom ili putem WhatsAppa. Odmah procjenjujemo situaciju i koordiniramo odlazak tehničara.",
  },
  {
    icon: Wrench,
    title: "Dolazimo na lokaciju",
    description:
      "Naš majstor dolazi u najkraćem roku — za hitne intervencije u roku od 1 sat za Zagreb i okolicu.",
  },
  {
    icon: CheckCircle,
    title: "Problem riješen",
    description:
      "Profesionalno otklanjamo kvar uz transparentno formiranje cijene i jamstvo na sve izvedene radove.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Kako radimo
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-4">
            Brz i jednostavan proces
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-light via-blue/30 to-blue-light" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15} className="relative">
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-white border-2 border-border rounded-2xl flex items-center justify-center shadow-sm">
                    <step.icon className="w-8 h-8 text-blue" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-[var(--font-dm-sans)] font-bold text-lg text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
