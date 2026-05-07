import AnimatedSection from "@/components/shared/AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marko Horvat",
    rating: 5,
    date: "Studeni 2024.",
    text: "Odlična usluga! Nazvao sam navečer zbog ispada struje, tehničar je stigao za manje od sat vremena. Profesionalan i ljubazan pristup. Preporučujem svima.",
  },
  {
    name: "Ana Kovač",
    rating: 5,
    date: "Listopad 2024.",
    text: "Koristila sam njihove usluge za kompletnu elektroinstalaciju stana. Radovi su izvedeni uredno, na vrijeme i po dogovorenoj cijeni. Vrlo zadovoljna.",
  },
  {
    name: "Ivan Šimić",
    rating: 5,
    date: "Rujan 2024.",
    text: "Brz dolazak, fer cijena, stručan rad. Kratki spoj u garaži — riješili za dva sata. Ovo je moj prvi izbor za sve električne radove u budućnosti.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Recenzije
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-6">
            Što kažu naši klijenti
          </h2>

          {/* Aggregate badge */}
          <div className="inline-flex items-center gap-3 bg-blue-xlight border border-blue-light rounded-2xl px-6 py-3">
            <div>
              <div className="font-[var(--font-dm-sans)] font-extrabold text-2xl text-blue leading-none">9.1</div>
              <div className="text-xs text-muted">od 10</div>
            </div>
            <div className="w-px h-8 bg-blue-light" />
            <div className="text-left">
              <StarRating rating={5} />
              <p className="text-xs text-muted mt-0.5">Google recenzije</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.1}>
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-semibold text-text text-sm">{review.name}</p>
                    <p className="text-xs text-muted">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
