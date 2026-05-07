import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import PhoneButton from "@/components/shared/PhoneButton";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants/site";

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
        {/* Hero */}
        <section className="bg-blue pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                Javite nam se
              </p>
              <h1 className="font-[var(--font-dm-sans)] font-extrabold text-4xl sm:text-5xl text-white mb-6">
                Kontaktirajte nas
              </h1>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                Električni problem? Nazovite odmah — dostupni smo 0–24h, 365 dana u godini.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Main contact section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Primary CTA — phone */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-4">
                Brz kontakt
              </p>
              <a
                href={SITE.phone.tel}
                className="inline-flex items-center gap-4 bg-blue hover:bg-blue-dark text-white font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl px-10 py-6 rounded-2xl transition-colors duration-200 active:scale-[0.97] shadow-lg shadow-blue/20"
              >
                <Phone className="w-8 h-8 shrink-0" />
                {SITE.phone.display}
              </a>
              <p className="mt-4 text-muted text-sm">Pritisnite za poziv</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp */}
              <AnimatedSection direction="left">
                <a
                  href={SITE.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl p-6 transition-colors duration-200 group"
                >
                  <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="font-[var(--font-dm-sans)] font-bold text-xl text-text group-hover:text-[#128c4f] transition-colors">
                      {SITE.phone.display}
                    </p>
                    <p className="text-sm text-muted mt-0.5">Pošaljite poruku</p>
                  </div>
                </a>
              </AnimatedSection>

              {/* Email */}
              <AnimatedSection direction="right">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-5 bg-blue-xlight hover:bg-blue-light border border-blue/10 rounded-2xl p-6 transition-colors duration-200 group"
                >
                  <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">E-mail</p>
                    <p className="font-[var(--font-dm-sans)] font-bold text-lg text-text group-hover:text-blue transition-colors break-all">
                      {SITE.email}
                    </p>
                    <p className="text-sm text-muted mt-0.5">Sporiji odgovor</p>
                  </div>
                </a>
              </AnimatedSection>

              {/* Address */}
              <AnimatedSection direction="left">
                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">Adresa</p>
                    <p className="font-[var(--font-dm-sans)] font-bold text-lg text-text">
                      {SITE.address.street}
                    </p>
                    <p className="text-sm text-muted mt-0.5">{SITE.address.postalCode} {SITE.address.city}</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Hours */}
              <AnimatedSection direction="right">
                <div className="flex items-center gap-5 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">Dostupnost</p>
                    <p className="font-[var(--font-dm-sans)] font-bold text-lg text-text">
                      {SITE.hours}
                    </p>
                    <p className="text-sm text-muted mt-0.5">Hitne intervencije uvijek</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Google Maps */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzU0LjAiTiAxNcKwNTgnNTUuMiJF!5e0!3m2!1shr!2shr!4v1234567890"
                  className="w-full aspect-video border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija Elektro Artis na Google Kartama"
                />
              </div>
            </AnimatedSection>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
