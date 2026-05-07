"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants/site";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CtaBanner() {
  return (
    <section className="bg-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-blue-100/70 text-sm font-semibold uppercase tracking-widest mb-4">
            Dostupni 24/7
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Problem s električnom instalacijom?
          </h2>
          <p className="text-blue-100/70 mb-10 max-w-lg mx-auto">
            Naš tim je spreman izaći na teren u najkraćem roku.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
            <motion.a
              href={SITE.phone.tel}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white text-blue font-extrabold text-xl sm:text-2xl px-7 py-4 rounded-2xl shadow-xl hover:shadow-white/20 transition-shadow duration-200"
            >
              <Phone className="w-6 h-6" />
              {SITE.phone.display}
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SITE.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl active:scale-[0.97] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Piši na WhatsApp
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-blue-dark hover:bg-dark text-white font-semibold px-6 py-3 rounded-xl active:scale-[0.97] transition-all duration-200"
            >
              Kontakt informacije
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
