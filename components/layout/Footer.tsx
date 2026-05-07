import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { SITE } from "@/lib/constants/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Vaš pouzdani partner za hitne električne intervencije i
              elektroinstalacije u Zagrebu i okolici. Dostupni 24/7, 365 dana.
            </p>
          </div>

          {/* Stranice */}
          <div>
            <h3 className="font-[var(--font-dm-sans)] font-semibold text-xs uppercase tracking-widest text-white/50 mb-4">
              Stranice
            </h3>
            <nav className="space-y-3">
              {[
                { href: "/", label: "Početna" },
                { href: "/usluge", label: "Usluge" },
                { href: "/hitne-intervencije", label: "Hitne intervencije" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-[var(--font-dm-sans)] font-semibold text-xs uppercase tracking-widest text-white/50 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                <a href={SITE.phone.tel} className="hover:text-white transition-colors">
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                <span>{SITE.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Dostupnost */}
          <div>
            <h3 className="font-[var(--font-dm-sans)] font-semibold text-xs uppercase tracking-widest text-white/50 mb-4">
              Dostupnost
            </h3>
            <div className="flex items-start gap-3 text-sm text-white/70 mb-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
              <div>
                <p className="font-semibold text-white">{SITE.hours}</p>
                <p className="text-xs mt-0.5">Ponedjeljak – Nedjelja</p>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-4">
              Hitne intervencije dostupne bez prekida.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {year} {SITE.name} d.o.o. &middot; OIB: {SITE.oib}</p>
          <p>Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}
