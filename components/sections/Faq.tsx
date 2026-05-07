"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const faqs = [
  {
    question: "Koliko brzo možete doći na lokaciju?",
    answer:
      "Nastojimo doći na lokaciju u najkraćem mogućem roku, ovisno o dostupnosti tehničara i udaljenosti. Za hitne slučajeve (ispad struje, kratki spoj) prioritetno reagiramo.",
  },
  {
    question: "Radite li vikendom i praznikom?",
    answer:
      "Da, dostupni smo 24/7, 365 dana godišnje. Električni kvarovi ne biraju dan ni sat, a ni mi.",
  },
  {
    question: "Koje područje pokrivate?",
    answer:
      "Primarno pokrivamo Zagreb i šire zagrebačko područje, uključujući okolne gradove i općine.",
  },
  {
    question: "Koliko koštaju usluge?",
    answer:
      "Cijena ovisi o vrsti i opsegu radova. Uvijek transparentno informiramo o cijeni prije početka rada. Kontaktirajte nas za besplatnu procjenu.",
  },
  {
    question: "Imate li jamstvo na radove?",
    answer:
      "Da, dajemo jamstvo na sve izvedene radove. Kvaliteta i sigurnost naših elektroinstalacija je naš prioritet.",
  },
  {
    question: "Možete li izraditi elektro atestat?",
    answer:
      "Da, izrađujemo ateste i certifikate ispravnosti elektroinstalacija za stambene i poslovne prostore, neophodne za promjenu vlasništva nekretnine.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface transition-colors duration-200"
      >
        <span className="font-semibold text-text text-sm pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Često postavljana pitanja
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl text-text">
            Imate pitanja?
          </h2>
        </AnimatedSection>

        <AnimatedSection className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
