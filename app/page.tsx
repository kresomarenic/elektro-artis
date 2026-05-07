import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import JsonLd from "@/components/shared/JsonLd";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Elektro Artis | Električar | Hitne intervencije Zagreb",
  description:
    "Hitne električne intervencije u Zagrebu i okolici, dostupni 24/7. Dolazimo na lokaciju u najkraćem roku. Elektroinstalacije, LED rasvjeta, podno grijanje, atesti. Više od 20 godina iskustva.",
  openGraph: {
    title: "Elektro Artis — Hitni Električar Zagreb",
    description:
      "Električni kvar? Dolazimo odmah. Hitne intervencije 24/7, Zagreb i okolica.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://elektro-artis.hr/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <WhyUs />
        <Gallery />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
