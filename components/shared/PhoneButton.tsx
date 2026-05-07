import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants/site";

interface PhoneButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function PhoneButton({
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: PhoneButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-blue text-white hover:bg-blue-dark font-semibold rounded-lg shadow-sm hover:shadow-md active:scale-[0.97] transition-all duration-200",
    outline:
      "border-2 border-blue text-blue hover:bg-blue hover:text-white font-semibold rounded-lg active:scale-[0.97] transition-all duration-200",
    ghost:
      "text-blue hover:text-blue-dark font-semibold transition-colors duration-200",
  };

  return (
    <a
      href={SITE.phone.tel}
      className={`inline-flex items-center gap-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <Phone className="w-4 h-4" />}
      {SITE.phone.display}
    </a>
  );
}
