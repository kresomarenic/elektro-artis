import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
  // Price list CSVs (NN 101/2026) must be machine-readable: explicit UTF-8 text/csv.
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
