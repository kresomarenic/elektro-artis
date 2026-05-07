import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/constants/site";
import Providers from "@/components/providers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Elektro Artis | Električar | Hitne intervencije Zagreb",
    template: "%s | Elektro Artis",
  },
  description:
    "Hitne električne intervencije u Zagrebu i okolici. Dolazimo na lokaciju u najkraćem roku, 24/7, 365 dana. Više od 20 godina iskustva. Elektroinstalacije, LED rasvjeta, podno grijanje, atesti.",
  keywords: [
    "električar Zagreb",
    "hitne električne intervencije",
    "elektroinstalacije Zagreb",
    "električni kvar",
    "hitni električar",
    "elektro artis",
    "LED rasvjeta Zagreb",
    "podno grijanje",
    "atesti elektroinstalacija",
  ],
  authors: [{ name: "Elektro Artis d.o.o." }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    siteName: "Elektro Artis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Providers>{children}</Providers>
      </body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer=window.dataLayer||[];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','${SITE.ga4}');
      `}</Script>
    </html>
  );
}
