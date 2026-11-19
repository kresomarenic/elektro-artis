import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Stable address of the current price list (Pravilnik o načinu objave cjenika, NN 132/2026, čl. 6 st. 2:
// a changed list is published at the same URL). Each issue keeps its prescribed file name; this path
// always points to the newest one. Temporary (307) so clients never cache it.
// Keep in sync with app/cjenik/page.tsx.
const CURRENT_PRICE_LIST_PATH = "/cjenici/cjenik-usluga.csv";

// undefined only while no new-format issue exists; `pnpm build` fails earlier in that case (prebuild check).
function currentPriceListFile(): string | undefined {
  const data = JSON.parse(readFileSync(join(process.cwd(), "data/cjenik.json"), "utf8")) as {
    izdanja: { datoteka: string; stari_format?: boolean }[];
  };
  return data.izdanja.filter((iz) => !iz.stari_format).at(-1)?.datoteka;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  async redirects() {
    const file = currentPriceListFile();
    if (!file) return [];
    return [
      {
        source: CURRENT_PRICE_LIST_PATH,
        destination: `/cjenici/${encodeURIComponent(file)}`,
        permanent: false,
      },
    ];
  },
  // Price list CSVs must be machine-readable: explicit UTF-8 text/csv.
  async headers() {
    return [
      {
        source: "/cjenici/:file*",
        headers: [{ key: "Content-Type", value: "text/csv; charset=utf-8" }],
      },
    ];
  },
};

export default nextConfig;
