import { useEffect, useRef } from "react";
import { heroScrollSprite } from "@/assets/hero-scroll-sprite";

/**
 * 스크롤에 반응하는 팹 영상 프레임 시퀀스.
 * 24프레임 WebP 스프라이트를 캔버스에 그리고, 스크롤 진행도에 따라
 * 프레임을 보간(lerp)+크로스페이드하여 끊김 없이 부드럽게 재생한다.
 */
function HeroScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { dataUrl, frameWidth, frameHeight, cols, frameCount } = heroScrollSprite;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const img = new Image();
    let imgReady = false;
    img.onload = () => {
      imgReady = true;
    };
    img.src = dataUrl;

    let cssW = 0;
    let cssH = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = 0;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = rect.width;
      cssH = rect.height;
      canvas.width = Math.max(1, Math.round(cssW * dpr));
      canvas.height = Math.max(1, Math.round(cssH * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function computeProgress() {
      const section = canvas!.closest("section");
      if (!section) return 0;
      const rect = section.getBoundingClientRect();
      const raw = -rect.top / (rect.height * 0.85);
      return Math.min(1, Math.max(0, raw));
    }

    function drawCover(frameIndex: number, alpha: number) {
      const i = Math.max(0, Math.min(frameCount - 1, Math.round(frameIndex)));
      const sx = (i % cols) * frameWidth;
      const sy = Math.floor(i / cols) * frameHeight;
      const scale = Math.max(cssW / frameWidth, cssH / frameHeight);
      const drawW = frameWidth * scale;
      const drawH = frameHeight * scale;
      const dx = (cssW - drawW) / 2;
      const dy = (cssH - drawH) / 2;
      ctx!.globalAlpha = alpha;
      ctx!.drawImage(img, sx, sy, frameWidth, frameHeight, dx, dy, drawW, drawH);
    }

    function render() {
      if (!imgReady) return;
      ctx!.clearRect(0, 0, cssW, cssH);
      const scaled = currentProgress * (frameCount - 1);
      const lower = Math.floor(scaled);
      const upper = Math.min(frameCount - 1, lower + 1);
      const frac = scaled - lower;
      drawCover(lower, 1);
      if (frac > 0.01) drawCover(upper, frac);
      ctx!.globalAlpha = 1;
    }

    function tick() {
      targetProgress = computeProgress();
      currentProgress += (targetProgress - currentProgress) * 0.12;
      render();
      rafId = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      img.onload = () => {
        imgReady = true;
        currentProgress = 0.4;
        render();
      };
    } else {
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full [filter:brightness(1.1)_contrast(1.1)_saturate(1.12)]"
      aria-hidden="true"
    />
  );
}

/**
 * 사실적 팹 클린룸 스크롤 영상 배경 + 절제된 CSS 모션 오버레이.
 * 스크롤 진행도에 따라 24프레임 시퀀스가 부드럽게 스크럽되고,
 * 배관/밸브 글로우 오버레이가 8초 루프로 계속 은은하게 움직인다.
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
