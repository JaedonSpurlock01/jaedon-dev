import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tracking-widest font-mono font-light text-muted-foreground flex items-center gap-4">
      <div className="w-7 h-[1px] bg-blue-400" />
      {children}
    </div>
  );
};

export default Title;
