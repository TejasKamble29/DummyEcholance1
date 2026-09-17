import React from "react";
import { cn } from "@/lib/utils";

interface ConcentricLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export const ConcentricLogo: React.FC<ConcentricLogoProps> = ({
  size = "md",
  className,
  showText = true,
}) => {
  const sizeMap = {
    sm: { outer: "w-6 h-6 border-[1.5px]", inner: "w-2.5 h-2.5 border" },
    md: { outer: "w-7 h-7 border-2", inner: "w-3 h-3 border" },
    lg: { outer: "w-10 h-10 border-2", inner: "w-5 h-5 border-[1.5px]" },
  };

  const { outer, inner } = sizeMap[size];

  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div
        className={cn(
          "rounded-full border-foreground/60 flex items-center justify-center transition-transform duration-300 hover:scale-105",
          outer
        )}
        aria-hidden="true"
      >
        <div className={cn("rounded-full border-foreground/60", inner)} />
      </div>
      {showText && (
        <span className="font-bold text-lg md:text-xl tracking-tight text-foreground">
          Echolance
        </span>
      )}
    </div>
  );
};
