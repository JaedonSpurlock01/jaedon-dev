import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "tracking-widest font-mono font-light text-muted-foreground flex items-center gap-4",
        className
      )}
    >
      <div className="w-7 h-[1px] bg-blue-400" />
      {children}
    </div>
  );
};

export default Title;
