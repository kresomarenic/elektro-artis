"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, MessageCircle, Clock } from "lucide-react";
import { SITE } from "@/lib/constants/site";

export default function EmergencyHero() {
  return (
    <section className="relative min-h-[60vh] bg-blue flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue via-blue/95 to-blue-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6"
        >
          <AlertTriangle className="w-8 h-8 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-dm-sans)] font-extrabold text-4xl sm:text-5xl text-white mb-4"
        >
          Hitne električne intervencije —{" "}
          <span className="text-blue-light">Zagreb i okolica</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/75 text-lg max-w-2xl mx-auto mb-10"
        >
          Električni kvar, ispad struje, kratki spoj — dolazimo na lokaciju u
          najkraćem roku, 24 sata dnevno, 365 dana godišnje. Pozovite odmah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href={SITE.phone.tel}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-xlight text-blue font-bold px-7 py-4 rounded-xl shadow-lg text-base transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            {SITE.phone.display}
          </a>
          <a
            href={SITE.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-xl shadow-lg text-base transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-white/60 text-sm"
        >
          <Clock className="w-4 h-4 text-white/80" />
          <span>Prosječan dolazak za 1h</span>
        </motion.div>
      </div>
    </section>
  );
}
