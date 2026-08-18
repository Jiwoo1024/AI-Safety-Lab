export function AmbientOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      <div className="orb-float absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/[0.14] blur-[100px]" />
      <div className="orb-float-slow absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/[0.05] blur-[110px]" />
    </div>
  );
}
