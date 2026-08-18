import * as React from "react";
import { useReveal } from "@/hooks/use-reveal";

export function RevealSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </section>
  );
}
