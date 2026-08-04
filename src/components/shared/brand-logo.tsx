import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "full" | "compact";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  return (
    <Image
      src="/brand/ss-logo-trimmed.png"
      alt="Safety Sphere Solution"
      width={variant === "compact" ? 160 : 220}
      height={variant === "compact" ? 50 : 70}
      priority={priority}
      className={cn(
        "h-10 w-auto object-contain object-left sm:h-11",
        variant === "compact" && "h-9 sm:h-10",
        className
      )}
    />
  );
}
