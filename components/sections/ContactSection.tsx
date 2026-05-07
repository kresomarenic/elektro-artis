import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/constants/site";

export default function ContactSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h2 className="font-[var(--font-dm-sans)] font-extrabold text-3xl sm:text-4xl text-text mb-4">
            Stupite u kontakt
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Imate pitanje ili trebate procjenu? Javite nam se i odgovorit ćemo
            u najkraćem roku.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-[var(--font-dm-sans)] font-bold text-xl text-text mb-6">
                Pošaljite poruku
              </h3>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Map + info */}
          <AnimatedSection direction="right" className="space-y-6">
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ul className="space-y-4">
                {[
                  { icon: Phone, label: "Telefon", value: SITE.phone.display, href: SITE.phone.tel },
                  { icon: Mail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: MapPin, label: "Adresa", value: SITE.address.full, href: undefined },
                  { icon: Clock, label: "Radno vrijeme", value: SITE.hours, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-text text-sm font-medium hover:text-blue transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-text text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzU0LjAiTiAxNcKwNTgnNTUuMiJF!5e0!3m2!1shr!2shr!4v1234567890"
                className="w-full aspect-[4/3] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Elektro Artis na Google Kartama"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
