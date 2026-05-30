import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

const heightPx = { sm: 28, md: 36, lg: 44 } as const;

export default function Logo({ size = "md" }: LogoProps) {
  const h = heightPx[size];

  return (
    <Image
      src="/logo.png"
      alt="Elektro Artis"
      width={245}
      height={65}
      priority
      style={{ height: h, width: "auto" }}
    />
  );
}
