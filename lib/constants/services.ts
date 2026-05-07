import {
  Zap,
  AlertTriangle,
  Lightbulb,
  Thermometer,
  Shield,
  Camera,
  Sun,
  Settings,
} from "lucide-react";

export const SERVICES = [
  {
    id: "hitne-intervencije",
    icon: AlertTriangle,
    title: "Hitne intervencije",
    description:
      "Električni kvar, ispad struje, kratki spoj — dolazimo na lokaciju u najkraćem roku, 24/7.",
    alt: "Hitne električne intervencije Zagreb",
  },
  {
    id: "elektroinstalacije",
    icon: Zap,
    title: "Elektroinstalacije",
    description:
      "Unutarnje i vanjske elektroinstalacije za stambene i poslovne objekte, prema svim standardima.",
    alt: "Elektroinstalacije — unutarnje i vanjske",
  },
  {
    id: "led-rasvjeta",
    icon: Lightbulb,
    title: "LED rasvjeta",
    description:
      "Projektiranje i ugradnja LED rasvjete za uštedu energije i moderan izgled prostora.",
    alt: "Ugradnja LED rasvjete Zagreb",
  },
  {
    id: "podno-grijanje",
    icon: Thermometer,
    title: "Podno grijanje",
    description:
      "Ugradnja i servis sustava električnog podnog grijanja za udoban i energetski učinkovit dom.",
    alt: "Električno podno grijanje — ugradnja",
  },
  {
    id: "atesti",
    icon: Shield,
    title: "Atesti",
    description:
      "Električni atesti i certifikati ispravnosti elektroinstalacija za nekretnine i poslovne prostore.",
    alt: "Električni atesti — certifikati ispravnosti",
  },
  {
    id: "osiguraci",
    icon: Settings,
    title: "Modernizacija osigurača",
    description:
      "Zamjena starih osigurača modernim automatskim sklopkama i modernizacija razvodnih ormara.",
    alt: "Modernizacija razvodnih ormara i osigurača",
  },
  {
    id: "video-nadzor",
    icon: Camera,
    title: "Video nadzor",
    description:
      "Postavljanje sustava video nadzora za zaštitu doma i poslovnog prostora.",
    alt: "Ugradnja video nadzora Zagreb",
  },
  {
    id: "solarni-sustavi",
    icon: Sun,
    title: "Solarni sustavi",
    description:
      "Instalacija solarnih panela i sustava za vlastitu proizvodnju električne energije.",
    alt: "Ugradnja solarnih sustava Zagreb",
  },
] as const;
