import { cn } from "@/lib/utils";

interface PulsatingDotProps {
  className?: string;
  coreDotClassName?: string;
  outerDotClassName?: string;
}

const PulsatingDot = ({
  className,
  coreDotClassName,
  outerDotClassName,
}: PulsatingDotProps) => {
  return (
    <div className={cn("relative w-6 h-6", className)}>
      {/* Core dot */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
          coreDotClassName
        )}
      />

      {/* Pulsing rings */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 animate-ping",
          outerDotClassName
        )}
      />
    </div>
  );
};

export default PulsatingDot;
