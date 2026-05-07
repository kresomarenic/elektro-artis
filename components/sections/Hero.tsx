"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Star, Shield } from "lucide-react";
import { SITE } from "@/lib/constants/site";

const headlineWords = [
  { text: "Električni", accent: false },
  { text: "kvar?", accent: false },
  { text: "Dolazimo", accent: true },
  { text: "odmah.", accent: true },
];

const trustBadges = [
  { icon: MapPin, text: "Dolazak", bold: "za 1h" },
  { icon: Clock, text: "Dostupni", bold: "24/7, 365 dana" },
  { icon: Star, text: "", bold: "20+ godina iskustva" },
  { icon: Shield, text: "Jamstvo na", bold: "sve radove" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">

      {/* PCB circuit-board schematic — full hero background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1280 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Power / ground rails — thick, full-width ── */}
        <g stroke="#1565c0" strokeWidth="2.5" fill="none" opacity="0.16">
          <path d="M -10,80 H 1290" />
          <path d="M -10,720 H 1290" />
        </g>

        {/* ── Main signal traces ── */}
        <g stroke="#1565c0" strokeWidth="1.5" fill="none" opacity="0.18">
          {/* Row 1 — zig-zag just below top rail */}
          <path d="M 0,140 H 120 V 100 H 260 V 140 H 400 V 100 H 540 V 140 H 680 V 100 H 820 V 140 H 960 V 100 H 1100 V 140 H 1280" />
          {/* Row 2 — left segment */}
          <path d="M 0,220 H 80 V 260 H 220 V 220 H 360 V 260 H 500 V 220 H 640" />
          {/* Row 2 — right segment */}
          <path d="M 760,220 H 900 V 260 H 1040 V 220 H 1180 V 260 H 1280" />
          {/* Left trunk — connects row 2 down to row 6 */}
          <path d="M 80,220 V 300 H 200 V 340 H 80 V 420 H 160 V 500 H 80 V 580 H 200 V 620 H 80 V 720" />
          {/* Right trunk */}
          <path d="M 1040,220 V 300 H 1160 V 380 H 1040 V 460 H 1160 V 540 H 1040 V 620 H 1160 V 720" />
          {/* Row 2 center bridge */}
          <path d="M 640,220 V 300 H 700 V 220 H 760" />
          {/* Row 3 */}
          <path d="M 0,300 H 200 V 340 H 380 V 300 H 560 V 340 H 700" />
          <path d="M 820,300 H 960 V 340 H 1040" />
          {/* Row 3 center loop (voltage regulator area) */}
          <path d="M 700,300 V 380 H 620 V 460 H 700 V 540 H 780 V 460 H 860 V 380 H 780 V 300 H 700" />
          {/* Row 4 */}
          <path d="M 0,420 H 160 V 460 H 300 V 420 H 440 V 460 H 580 V 420 H 620" />
          <path d="M 860,420 H 960 V 460 H 1040" />
          {/* Row 5 */}
          <path d="M 200,500 H 380 V 540 H 520 V 500 H 660 V 540 H 780" />
          <path d="M 900,500 H 1040 V 540 H 1160" />
          {/* Row 6 — zig-zag above bottom rail */}
          <path d="M 0,580 H 200 V 620 H 380 V 580 H 520 V 620 H 660 V 580 H 800 V 620 H 960 V 580 H 1100 V 620 H 1280" />
          {/* Row 7 */}
          <path d="M 0,660 H 120 V 700 H 300 V 660 H 500 V 700 H 700 V 660 H 900 V 700 H 1100 V 660 H 1280" />
          {/* Vertical interconnects */}
          <path d="M 260,140 V 80" />
          <path d="M 540,140 V 80 V 40" />
          <path d="M 820,140 V 80" />
          <path d="M 1100,140 V 80" />
          <path d="M 400,100 V 40 H 700 V 80" />
          <path d="M 380,300 V 220" />
          <path d="M 220,260 V 300" />
          <path d="M 560,300 V 260 H 500" />
          <path d="M 300,420 V 340" />
          <path d="M 440,420 V 340 H 380" />
          <path d="M 580,420 V 340 H 700" />
          <path d="M 960,300 V 220 H 900" />
          <path d="M 960,420 V 340" />
          <path d="M 520,580 V 500" />
          <path d="M 660,540 V 580" />
          <path d="M 700,660 V 620 H 800 V 580" />
          <path d="M 500,660 V 580" />
          <path d="M 300,660 V 620" />
          <path d="M 900,660 V 620 H 960" />
        </g>

        {/* ── Thin detail traces ── */}
        <g stroke="#1565c0" strokeWidth="1" fill="none" opacity="0.13">
          <path d="M 160,500 V 580 H 200" />
          <path d="M 440,460 V 540 H 520" />
          <path d="M 860,460 V 540 H 900" />
          <path d="M 1160,380 V 500" />
          <path d="M 40,80 V 140" />
          <path d="M 40,660 V 720" />
          <path d="M 1240,80 V 140" />
          <path d="M 1240,660 V 720" />
          <path d="M 0,200 H 80" />
          <path d="M 160,420 V 340 H 200" />
        </g>

        {/* ── Resistor symbols (rectangles across traces) ── */}
        <g stroke="#1565c0" strokeWidth="1.2" fill="white" fillOpacity="0.6" opacity="0.22">
          <rect x="245" y="92" width="30" height="16" rx="2" />
          <rect x="525" y="132" width="30" height="16" rx="2" />
          <rect x="805" y="132" width="30" height="16" rx="2" />
          <rect x="1085" y="132" width="30" height="16" rx="2" />
          <rect x="365" y="292" width="30" height="16" rx="2" />
          <rect x="685" y="372" width="16" height="30" rx="2" />
          <rect x="505" y="492" width="30" height="16" rx="2" />
          <rect x="1045" y="372" width="16" height="30" rx="2" />
        </g>

        {/* ── Capacitor symbols (two parallel lines) ── */}
        <g stroke="#1565c0" strokeWidth="1.5" opacity="0.22">
          <line x1="112" y1="133" x2="112" y2="147" />
          <line x1="128" y1="133" x2="128" y2="147" />
          <line x1="632" y1="213" x2="632" y2="227" />
          <line x1="648" y1="213" x2="648" y2="227" />
          <line x1="772" y1="453" x2="772" y2="467" />
          <line x1="788" y1="453" x2="788" y2="467" />
          <line x1="152" y1="413" x2="152" y2="427" />
          <line x1="168" y1="413" x2="168" y2="427" />
          <line x1="952" y1="293" x2="952" y2="307" />
          <line x1="968" y1="293" x2="968" y2="307" />
          <line x1="290" y1="493" x2="290" y2="507" />
          <line x1="306" y1="493" x2="306" y2="507" />
        </g>

        {/* ── Large IC chip (upper-right quadrant) ── */}
        <g stroke="#1565c0" strokeWidth="1.5" fill="none" opacity="0.18">
          <rect x="878" y="178" width="124" height="164" rx="4" />
          <path d="M 930,178 A 10,10 0 0 1 950,178" />
          <line x1="878" y1="198" x2="858" y2="198" /><line x1="878" y1="218" x2="858" y2="218" />
          <line x1="878" y1="238" x2="858" y2="238" /><line x1="878" y1="258" x2="858" y2="258" />
          <line x1="878" y1="278" x2="858" y2="278" /><line x1="878" y1="298" x2="858" y2="298" />
          <line x1="878" y1="318" x2="858" y2="318" />
          <line x1="1002" y1="198" x2="1022" y2="198" /><line x1="1002" y1="218" x2="1022" y2="218" />
          <line x1="1002" y1="238" x2="1022" y2="238" /><line x1="1002" y1="258" x2="1022" y2="258" />
          <line x1="1002" y1="278" x2="1022" y2="278" /><line x1="1002" y1="298" x2="1022" y2="298" />
          <line x1="1002" y1="318" x2="1022" y2="318" />
        </g>

        {/* ── Small IC chips ── */}
        <g stroke="#1565c0" strokeWidth="1.2" fill="none" opacity="0.17">
          <rect x="188" y="358" width="84" height="64" rx="3" />
          <line x1="188" y1="374" x2="173" y2="374" /><line x1="188" y1="390" x2="173" y2="390" /><line x1="188" y1="406" x2="173" y2="406" />
          <line x1="272" y1="374" x2="287" y2="374" /><line x1="272" y1="390" x2="287" y2="390" /><line x1="272" y1="406" x2="287" y2="406" />
          <rect x="608" y="388" width="104" height="84" rx="3" />
          <line x1="608" y1="406" x2="590" y2="406" /><line x1="608" y1="426" x2="590" y2="426" /><line x1="608" y1="446" x2="590" y2="446" />
          <line x1="712" y1="406" x2="730" y2="406" /><line x1="712" y1="426" x2="730" y2="426" /><line x1="712" y1="446" x2="730" y2="446" />
        </g>

        {/* ── Via / junction dots ── */}
        <g fill="#1565c0" opacity="0.28">
          <circle cx="120" cy="140" r="3.5" /><circle cx="260" cy="140" r="3.5" /><circle cx="400" cy="140" r="3.5" />
          <circle cx="540" cy="140" r="3.5" /><circle cx="680" cy="140" r="3.5" /><circle cx="820" cy="140" r="3.5" />
          <circle cx="960" cy="140" r="3.5" /><circle cx="1100" cy="140" r="3.5" />
          <circle cx="80" cy="220" r="3.5" /><circle cx="220" cy="260" r="3.5" /><circle cx="360" cy="220" r="3.5" />
          <circle cx="500" cy="260" r="3.5" /><circle cx="640" cy="220" r="3.5" /><circle cx="760" cy="220" r="3.5" />
          <circle cx="900" cy="260" r="3.5" /><circle cx="1040" cy="220" r="3.5" />
          <circle cx="200" cy="300" r="3.5" /><circle cx="380" cy="300" r="3.5" /><circle cx="560" cy="300" r="3.5" />
          <circle cx="700" cy="300" r="3.5" /><circle cx="780" cy="300" r="3.5" /><circle cx="960" cy="300" r="3.5" />
          <circle cx="160" cy="420" r="3.5" /><circle cx="300" cy="420" r="3.5" /><circle cx="440" cy="420" r="3.5" />
          <circle cx="580" cy="420" r="3.5" /><circle cx="860" cy="420" r="3.5" /><circle cx="960" cy="420" r="3.5" />
          <circle cx="380" cy="500" r="3.5" /><circle cx="660" cy="540" r="3.5" />
          <circle cx="900" cy="500" r="3.5" /><circle cx="1040" cy="540" r="3.5" />
          <circle cx="200" cy="580" r="3.5" /><circle cx="380" cy="580" r="3.5" /><circle cx="520" cy="580" r="3.5" />
          <circle cx="660" cy="580" r="3.5" /><circle cx="800" cy="580" r="3.5" /><circle cx="960" cy="580" r="3.5" />
          <circle cx="1100" cy="580" r="3.5" />
          <circle cx="120" cy="660" r="3.5" /><circle cx="300" cy="660" r="3.5" /><circle cx="500" cy="660" r="3.5" />
          <circle cx="700" cy="660" r="3.5" /><circle cx="900" cy="660" r="3.5" /><circle cx="1100" cy="660" r="3.5" />
          <circle cx="40" cy="80" r="3" /><circle cx="540" cy="80" r="3" />
          <circle cx="700" cy="80" r="3" /><circle cx="1240" cy="80" r="3" />
        </g>

        {/* ── Animated current pulses ── */}
        {/* 1 — top power rail, left→right */}
        <path className="wire-current-1" filter="url(#electric-glow)"
          pathLength="1000" d="M -10,80 H 1290"
          stroke="#60a5fa" strokeWidth="7" fill="none" opacity="0.65" strokeDasharray="32 968" />
        {/* 2 — row-1 zig-zag */}
        <path className="wire-current-2" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 0,140 H 120 V 100 H 260 V 140 H 400 V 100 H 540 V 140 H 680 V 100 H 820 V 140 H 960 V 100 H 1100 V 140 H 1280"
          stroke="#60a5fa" strokeWidth="5" fill="none" opacity="0.55" strokeDasharray="26 974" />
        {/* 3 — left trunk, top→bottom */}
        <path className="wire-current-3" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 80,220 V 300 H 200 V 340 H 80 V 420 H 160 V 500 H 80 V 580 H 200 V 620 H 80 V 720"
          stroke="#93c5fd" strokeWidth="4" fill="none" opacity="0.55" strokeDasharray="22 978" />
        {/* 4 — center voltage-regulator loop */}
        <path className="wire-current-4" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 700,300 V 380 H 620 V 460 H 700 V 540 H 780 V 460 H 860 V 380 H 780 V 300 H 700"
          stroke="#60a5fa" strokeWidth="4" fill="none" opacity="0.50" strokeDasharray="22 978" />
        {/* 5 — bottom rail, right→left */}
        <path className="wire-current-5" filter="url(#electric-glow)"
          pathLength="1000" d="M 1290,720 H -10"
          stroke="#60a5fa" strokeWidth="7" fill="none" opacity="0.60" strokeDasharray="32 968" />
        {/* 6 — row-6 zig-zag, right→left */}
        <path className="wire-current-6" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 1280,580 H 1100 V 620 H 960 V 580 H 800 V 620 H 660 V 580 H 520 V 620 H 380 V 580 H 200 V 620 H 0"
          stroke="#93c5fd" strokeWidth="4" fill="none" opacity="0.48" strokeDasharray="22 978" />
        {/* 7 — right trunk */}
        <path className="wire-current-7" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 1040,220 V 300 H 1160 V 380 H 1040 V 460 H 1160 V 540 H 1040 V 620 H 1160 V 720"
          stroke="#93c5fd" strokeWidth="3.5" fill="none" opacity="0.45" strokeDasharray="18 982" />
        {/* 8 — row-3 signal path */}
        <path className="wire-current-8" filter="url(#electric-glow)"
          pathLength="1000"
          d="M 0,300 H 200 V 340 H 380 V 300 H 560 V 340 H 700 V 300"
          stroke="#bfdbfe" strokeWidth="3" fill="none" opacity="0.42" strokeDasharray="16 984" />
      </svg>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />
      {/* Soft radial fade — slightly less opaque so wires show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/75 to-blue-xlight/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-blue-xlight border border-blue-light text-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
            Zagreb i okolica · Hitne intervencije
          </motion.div>

          {/* Headline */}
          <h1 className="font-[var(--font-dm-sans)] font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`inline-block mr-3 ${word.accent ? "text-blue" : "text-text"}`}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="text-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Hitne električne intervencije, ugradnja i montaža instalacija. Više od 20 godina iskustva u Zagrebu i okolici.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href={SITE.phone.tel}
              className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-200 text-base"
            >
              <Phone className="w-5 h-5" />
              Nazovi odmah
            </a>
            <a
              href={SITE.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb355] text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-200 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Trust badges — full width */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {trustBadges.map(({ icon: Icon, text, bold }) => (
            <div key={bold} className="flex flex-col items-start gap-2 bg-white border border-border rounded-2xl p-5 shadow-sm">
              <Icon className="w-6 h-6 text-blue" />
              <p className="text-sm text-muted leading-snug">
                {text && <span>{text} </span>}
                <span className="font-semibold text-text">{bold}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
