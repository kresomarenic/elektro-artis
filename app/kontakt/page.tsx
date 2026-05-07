import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ContactSection from "@/components/sections/ContactSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Kontakt — Elektro Artis | Električar Zagreb 098 738 628",
  description:
    "Kontaktirajte Elektro Artis — Vaš pouzdani električar u Zagrebu. Telefon: 098 738 628 · Email: elektro.artis@gmail.com · Adresa: Alexandera von Humboldta 8, Zagreb. Dostupni 0–24h.",
  openGraph: {
    title: "Kontakt | Elektro Artis Zagreb",
  },
  alternates: {
    canonical: "https://elektro-artis.hr/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-blue pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                Javite nam se
              </p>
              <h1 className="font-[var(--font-dm-sans)] font-extrabold text-4xl sm:text-5xl text-white">
                Kontaktirajte nas
              </h1>
            </AnimatedSection>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
