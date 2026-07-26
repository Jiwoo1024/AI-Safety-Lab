import heroFab from "@/assets/hero-fab.jpg";

/**
 * 사실적 팹 클린룸 배경 이미지 + 절제된 CSS 모션 오버레이.
 * 8s loop: 0-3s 정상(그린) → 3-5s 경고(레드) → 5-8s 정상 복귀.
 * 벡터 도형을 그리지 않고 blur된 글로우 바/원형 글로우만 사용.
 */
export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={heroFab}
        alt="반도체 팹 클린룸 내부의 가스 배관과 인터록 밸브"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 배관 라인을 따라 흐르는 그린 글로우 */}
      <div className="motion-layer pointer-events-none absolute inset-x-0 top-[34%] h-[6%] overflow-hidden">
        <div className="glow-bar absolute top-0 h-full w-[28%] rounded-full blur-[14px]" />
      </div>

      {/* 밸브 위치 원형 pulse */}
      <div className="motion-layer pointer-events-none absolute left-[55%] top-[36%] h-40 w-40 -translate-x-1/2 -translate-y-1/2">
        <div className="valve-pulse absolute inset-0 rounded-full blur-2xl" />
        <div className="valve-core absolute inset-[35%] rounded-full blur-md" />
      </div>

      {/* 비네트 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,oklch(0.18_0.02_200/0.55)_100%)]" />

      <style>{`
        @keyframes heroFlow {
          0%   { transform: translateX(-40%); opacity: 0; }
          15%  { opacity: 0.85; }
          85%  { opacity: 0.85; }
          100% { transform: translateX(400%); opacity: 0; }
        }
        @keyframes heroBarTint {
          0%, 36%   { background: linear-gradient(90deg, transparent, oklch(0.78 0.19 160 / 0.85), transparent); }
          40%, 60%  { background: linear-gradient(90deg, transparent, oklch(0.7 0.22 28 / 0.85), transparent); }
          64%, 100% { background: linear-gradient(90deg, transparent, oklch(0.78 0.19 160 / 0.85), transparent); }
        }
        @keyframes heroValve {
          0%   { background: oklch(0.78 0.19 160 / 0.35); transform: scale(0.85); opacity: 0.5; }
          18%  { transform: scale(1.05); opacity: 0.9; }
          37%  { background: oklch(0.78 0.19 160 / 0.35); transform: scale(0.85); opacity: 0.5; }
          40%  { background: oklch(0.68 0.24 28 / 0.5); transform: scale(1.1); opacity: 1; }
          46%  { opacity: 0.25; transform: scale(0.9); }
          52%  { background: oklch(0.68 0.24 28 / 0.5); opacity: 1; transform: scale(1.12); }
          58%  { opacity: 0.3; transform: scale(0.9); }
          62%  { background: oklch(0.78 0.19 160 / 0.35); opacity: 0.6; }
          80%  { transform: scale(1.04); opacity: 0.85; }
          100% { background: oklch(0.78 0.19 160 / 0.35); transform: scale(0.85); opacity: 0.5; }
        }
        .glow-bar {
          animation: heroFlow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite, heroBarTint 8s linear infinite;
        }
        .valve-pulse { animation: heroValve 8s ease-in-out infinite; }
        .valve-core {
          background: oklch(0.9 0.12 165 / 0.5);
          animation: heroValve 8s ease-in-out infinite;
        }
        @media (max-width: 767px) {
          .motion-layer { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .glow-bar, .valve-pulse, .valve-core { animation: none !important; opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
