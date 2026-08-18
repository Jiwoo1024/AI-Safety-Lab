import heroFab from "@/assets/hero-semiconductor-fab.png";

/**
 * 히어로 배경 영상. 자동재생을 위해 muted+playsInline 필수.
 * poster는 영상 로딩 전/재생 불가 환경(저사양·데이터 절약 모드)의 폴백으로 기존 정적 이미지를 사용.
 */
export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="/hero-video.mp4"
        poster={heroFab}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover [filter:brightness(1.12)_contrast(1.12)_saturate(1.15)]"
      />

      {/* 비네트 (약하게) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,oklch(0.18_0.02_200/0.28)_100%)]" />
    </div>
  );
}
