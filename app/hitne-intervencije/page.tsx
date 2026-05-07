import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import EmergencyHero from "@/components/sections/EmergencyHero";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Hitne Električne Intervencije Zagreb — Dolazak u najkraćem roku",
  description:
    "Hitne električne intervencije u Zagrebu i okolici. Električni kvar, ispad struje, kratki spoj — dolazimo na lokaciju u najkraćem roku, 24 sata dnevno, 365 dana godišnje. Pozovite 098 738 628.",
  openGraph: {
    title: "Hitne Električne Intervencije Zagreb | Elektro Artis",
  },
  alternates: {
    canonical: "https://elektro-artis.hr/hitne-intervencije",
  },
};

export default function HitneIntervencijePage() {
  return (
    <>
      <Header />
      <main>
        <EmergencyHero />
        <WhyUs />
        <Process />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
