import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ServicesList from "@/components/sections/ServicesList";
import CtaBanner from "@/components/sections/CtaBanner";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title:
    "Usluge — Elektroinstalacije, LED, Podno grijanje, Atesti | Elektro Artis Zagreb",
  description:
    "Kompletne električne usluge u Zagrebu: elektroinstalacije, LED rasvjeta, podno grijanje, modernizacija osigurača, atesti, video nadzor, solarni sustavi. Pozovite za besplatnu konzultaciju.",
  openGraph: {
    title: "Električne usluge Zagreb | Elektro Artis",
  },
  alternates: {
    canonical: "https://elektro-artis.hr/usluge",
  },
};

export default function UslugePage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-blue pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                Naše usluge
              </p>
              <h1 className="font-[var(--font-dm-sans)] font-extrabold text-4xl sm:text-5xl text-white">
                Električne usluge za dom i poslovni prostor
              </h1>
            </AnimatedSection>
          </div>
        </section>

        <ServicesList />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
