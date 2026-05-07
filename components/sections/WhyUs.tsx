import AnimatedSection from "@/components/shared/AnimatedSection";
import { CheckCircle2, Zap, Phone } from "lucide-react";
import { SITE } from "@/lib/constants/site";

const reasons = [
  "Brz dolazak na lokaciju u najkraćem roku",
  "Dostupnost 24 sata, 7 dana u tjednu, 365 dana",
  "Više od 20 godina iskustva na terenu",
  "Licencirani i certificirani elektro tehničari",
  "Transparentno formiranje cijene bez skrivenih troškova",
  "Jamstvo na sve izvedene radove",
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — checklist */}
          <AnimatedSection direction="left">
            <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Zašto mi
            </p>
            <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-6">
              Pouzdanost koja se dokazuje svakodnevno
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Već više od 20 godina pružamo pouzdanu i brzu elektro uslugu
              građanima i tvrtkama u Zagrebu i okolici. Naš tim iskusnih
              tehničara dostupan je uvijek kada trebate.
            </p>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-text">
                  <CheckCircle2 className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right — blue-tint card */}
          <AnimatedSection direction="right">
            <div className="bg-blue-xlight border border-blue-light rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-light/40 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-light/40 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue" />
                </div>
                <h3 className="font-[var(--font-dm-sans)] font-bold text-2xl text-text mb-4">
                  20+ godina iskustva
                </h3>
                <blockquote className="text-muted leading-relaxed mb-6 italic">
                  &ldquo;Svaki posao pristupamo profesionalno i s punom odgovornosti —
                  od malih popravaka do kompleksnih elektroinstalacija.&rdquo;
                </blockquote>
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Nazovi odmah
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
