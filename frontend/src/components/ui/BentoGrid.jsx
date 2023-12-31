import React from "react";
import Card from "./Card";

export function BentoGrid({ children, className}) {
  return (
    <div className={`grid gap-2 ${className}`}>
      {children}
    </div>
  );
}

export default BentoGrid;
