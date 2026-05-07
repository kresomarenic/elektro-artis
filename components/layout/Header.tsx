"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { SITE } from "@/lib/constants/site";
import Logo from "@/components/shared/Logo";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/hitne-intervencije", label: "Hitne intervencije" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
    setScrolled(latest > 10);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-30 bg-blue transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" aria-label="Elektro Artis – početna">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={SITE.phone.tel}
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-light text-blue font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                {SITE.phone.display}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Otvori izbornik"
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
