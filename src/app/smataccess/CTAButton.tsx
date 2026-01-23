import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  text: string;
  href: string;
  variant: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
}

export default function CTAButton({
  text,
  href,
  variant,
  className = "",
  icon,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/80 shadow-lg hover:shadow-xl"
      : "bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
      {icon}
    </Link>
  );
}




