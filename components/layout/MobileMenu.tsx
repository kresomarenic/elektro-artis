"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { SITE } from "@/lib/constants/site";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/hitne-intervencije", label: "Hitne intervencije" },
  { href: "/kontakt", label: "Kontakt" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="font-[var(--font-dm-sans)] font-bold text-text text-base">
                Elektro Artis
              </span>
              <button
                onClick={onClose}
                aria-label="Zatvori izbornik"
                className="p-2 rounded-lg hover:bg-surface transition-colors"
              >
                <X className="w-5 h-5 text-text" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-text font-medium hover:bg-surface hover:text-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 py-6 border-t border-border">
              <a
                href={SITE.phone.tel}
                className="flex items-center justify-center gap-2 w-full bg-blue hover:bg-blue-dark text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {SITE.phone.display}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
