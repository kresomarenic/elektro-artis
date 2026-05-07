interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm"
      style={{ background: "#0D1B3E" }}
    >
      {/* Circular icon: yellow ring + blue circle + white E + lightning */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="19" stroke="#F5A623" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="20" r="16" fill="#1565C0" />
        <text
          x="9"
          y="27"
          fontFamily="system-ui, sans-serif"
          fontWeight="800"
          fontSize="18"
          fill="white"
        >
          E
        </text>
        <path d="M26 12 L22 20 L25 20 L21 28 L27 19 L24 19 Z" fill="white" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-[var(--font-dm-sans)] font-bold tracking-wide text-sm"
          style={{ color: "#ffffff" }}
        >
          ELEKTRO ARTIS
        </span>
        <span
          className="text-[8px] tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          ELEKTRIČAR | HITNE INTERVENCIJE
        </span>
      </div>
    </div>
  );
}
