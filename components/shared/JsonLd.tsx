import { SITE } from "@/lib/constants/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    name: "Elektro Artis d.o.o.",
    description:
      "Hitne električne intervencije i elektroinstalacije u Zagrebu i okolici.",
    url: SITE.url,
    telephone: "+385-98-738-628",
    email: SITE.email,
    taxID: SITE.oib,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.815,
      longitude: 15.9819,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.815,
        longitude: 15.9819,
      },
      geoRadius: "40000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Installments",
    sameAs: ["https://www.facebook.com/elektroartis"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
