import { useEffect, useRef } from "react";
import { heroScrollSprite } from "@/assets/hero-scroll-sprite";

/**
 * 스크롤 위치에 따라 스프라이트 프레임을 전환하는 캔버스 배경.
 * requestAnimationFrame + lerp로 진행도를 부드럽게 보간하고,
 * 인접 프레임 간 crossfade로 끊김 없는 스크럽 애니메이션을 만든다.
 */
function HeroScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { frameWidth, frameHeight, cols, frameCount } = heroScrollSprite;

    const img = new Image();
    img.decoding = "async";
    img.src = heroScrollSprite.dataUrl;

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    const updateTarget = () => {
      const rect = container.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const scrolled = window.innerHeight - rect.top;
      targetRef.current = Math.min(1, Math.max(0, total > 0 ? scrolled / total : 0));
    };

    const onResize = () => {
      resize();
      updateTarget();
    };

    resize();
    updateTarget();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", updateTarget, { passive: true });

    const drawFrame = (idx: number, alpha: number) => {
      const clamped = Math.min(frameCount - 1, Math.max(0, idx));
      const col = clamped % cols;
      const row = Math.floor(clamped / cols);
      const sx = col * frameWidth;
      const sy = row * frameHeight;

      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / frameWidth, ch / frameHeight);
      const dw = frameWidth * scale;
      const dh = frameHeight * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.globalAlpha = alpha;
      ctx.drawImage(img, sx, sy, frameWidth, frameHeight, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    };

    let running = true;

    const tick = () => {
      if (!running) return;
      progressRef.current += (targetRef.current - progressRef.current) * 0.12;
      const p = progressRef.current;
      const exact = p * (frameCount - 1);
      const idx = Math.floor(exact);
      const nextIdx = Math.min(frameCount - 1, idx + 1);
      const blend = exact - idx;

      if (canvas.width && canvas.height && img.complete && img.naturalWidth) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFrame(idx, 1);
        if (blend > 0.01) drawFrame(nextIdx, blend);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    if (img.complete) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      img.onload = () => {
        rafRef.current = requestAnimationFrame(tick);
      };
    }

    return () => {
      running = false;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", updateTarget);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full [filter:brightness(1.1)_contrast(1.1)_saturate(1.12)]"
      />
    </div>
  );
}

/**
 * 스크롤 스크럽 캔버스 배경 + 절제된 CSS 모션 오버레이.
 * 8s loop: 0-3s 정상(흰색) → 3-5s 경고(레드) → 5-8s 정상 복귀.
 */
export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <HeroScrollCanvas />

      {/* 배관 라인을 따라 흐르는 흰색 글로우 */}
      <div className="motion-layer pointer-events-none absolute inset-x-0 top-[34%] h-[6%] overflow-hidden">
        <div className="glow-bar absolute top-0 h-full w-[28%] rounded-full blur-[14px]" />
      </div>

      {/* 밸브 위치 원형 pulse */}
      <div className="motion-layer pointer-events-none absolute left-[55%] top-[36%] h-40 w-40 -translate-x-1/2 -translate-y-1/2">
        <div className="valve-pulse absolute inset-0 rounded-full blur-2xl" />
        <div className="valve-core absolute inset-[35%] rounded-full blur-md" />
      </div>

      {/* 비네트 (약하게) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,oklch(0.18_0.02_200/0.28)_100%)]" />

      <style>{`
        @keyframes heroFlow {
          0%   { transform: translateX(-40%); opacity: 0; }
          15%  { opacity: 0.85; }
          85%  { opacity: 0.85; }
          100% { transform: translateX(400%); opacity: 0; }
        }
        @keyframes heroBarTint {
          0%, 36%   { background: linear-gradient(90deg, transparent, oklch(0.9 0 0 / 0.85), transparent); }
          40%, 60%  { background: linear-gradient(90deg, transparent, oklch(0.7 0.22 28 / 0.85), transparent); }
          64%, 100% { background: linear-gradient(90deg, transparent, oklch(0.9 0 0 / 0.85), transparent); }
        }
        @keyframes heroValve {
          0%   { background: oklch(0.9 0 0 / 0.35); transform: scale(0.85); opacity: 0.5; }
          18%  { transform: scale(1.05); opacity: 0.9; }
          37%  { background: oklch(0.9 0 0 / 0.35); transform: scale(0.85); opacity: 0.5; }
          40%  { background: oklch(0.68 0.24 28 / 0.5); transform: scale(1.1); opacity: 1; }
          46%  { opacity: 0.25; transform: scale(0.9); }
          52%  { background: oklch(0.68 0.24 28 / 0.5); opacity: 1; transform: scale(1.12); }
          58%  { opacity: 0.3; transform: scale(0.9); }
          62%  { background: oklch(0.9 0 0 / 0.35); opacity: 0.6; }
          80%  { transform: scale(1.04); opacity: 0.85; }
          100% { background: oklch(0.9 0 0 / 0.35); transform: scale(0.85); opacity: 0.5; }
        }
        .glow-bar {
          animation: heroFlow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite, heroBarTint 8s linear infinite;
        }
        .valve-pulse { animation: heroValve 8s ease-in-out infinite; }
        .valve-core {
          background: oklch(0.95 0 0 / 0.5);
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
