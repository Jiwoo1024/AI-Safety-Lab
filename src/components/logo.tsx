/**
 * 자체 호스팅 SVG 로고. shield + pulse 라인으로 "AI가 지켜보는 안전"을 표현.
 * 외부 에셋 URL에 의존하지 않아 어떤 환경에 배포해도 항상 렌더링된다.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id="logoMarkGrad"
          x1="2"
          y1="2"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="oklch(0.6 0.23 29)" />
          <stop offset="100%" stopColor="oklch(0.4 0.2 29)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logoMarkGrad)" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.14"
      />
      <path
        d="M20 8.5 L13.5 11.3 V18.6 C13.5 23.7 16.2 27.7 20 29.3 C23.8 27.7 26.5 23.7 26.5 18.6 V11.3 Z"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 19.8 H17.8 L19.2 16.2 L21.1 23.4 L22.3 19.8 H24.5"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  iconClassName = "h-9 w-9",
  showWordmark = true,
}: {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={iconClassName} />
      {showWordmark && (
        <span className="font-display text-[17px] font-bold leading-none tracking-tight text-foreground">
          AI Safety Lab
        </span>
      )}
    </span>
  );
}
