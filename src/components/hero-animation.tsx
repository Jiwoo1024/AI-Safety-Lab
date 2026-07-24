import * as React from "react";

/**
 * Animated SVG: 가스 누출 감지 → 인터록 밸브 자동 차단 시퀀스
 * Pure SVG/CSS, no external deps.
 * 8s loop: [0-2s] 정상 흐름 → [2-3.5s] 누출 감지 알람 → [3.5-5s] 밸브 차단 → [5-8s] 안전 상태
 */
export function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.9_0.09_160/0.35),transparent_60%),radial-gradient(ellipse_at_80%_70%,oklch(0.85_0.12_190/0.3),transparent_55%)]" />

      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main scene */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-label="AI 가스 누출 감지 및 인터록 자동 차단 시뮬레이션"
      >
        <defs>
          <linearGradient id="pipeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.05 200)" />
            <stop offset="50%" stopColor="oklch(0.55 0.06 200)" />
            <stop offset="100%" stopColor="oklch(0.4 0.04 200)" />
          </linearGradient>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.7 0.18 160)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.75 0.2 165)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 160)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="leak" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="oklch(0.85 0.2 60)" stopOpacity="0.7" />
            <stop offset="60%" stopColor="oklch(0.75 0.2 40)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 30)" stopOpacity="0" />
          </radialGradient>
          <filter id="softglow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Horizontal pipe */}
        <g>
          <rect x="60" y="290" width="480" height="44" rx="10" fill="url(#pipeGrad)" stroke="oklch(0.3 0.03 200)" strokeWidth="1.5" />
          <rect x="60" y="290" width="480" height="6" rx="3" fill="oklch(0.95 0.02 190)" opacity="0.35" />

          {/* Flanges */}
          <rect x="52" y="282" width="10" height="60" rx="2" fill="oklch(0.45 0.04 200)" />
          <rect x="538" y="282" width="10" height="60" rx="2" fill="oklch(0.45 0.04 200)" />

          {/* Flow particles inside pipe — normal state */}
          <g className="flow-normal">
            {Array.from({ length: 6 }).map((_, i) => (
              <circle
                key={i}
                cy="312"
                r="3"
                fill="oklch(0.85 0.15 160)"
                style={{
                  animation: `pipeFlow 2.2s linear infinite`,
                  animationDelay: `${i * 0.35}s`,
                }}
              />
            ))}
          </g>

          {/* Sensor above valve */}
          <g transform="translate(300 260)">
            <rect x="-22" y="-32" width="44" height="30" rx="6" fill="oklch(0.25 0.03 200)" stroke="oklch(0.55 0.06 200)" />
            <circle cx="0" cy="-17" r="5" fill="oklch(0.75 0.2 160)" className="sensor-led" />
            <text x="0" y="-40" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="oklch(0.5 0.05 200)" letterSpacing="2">
              GAS SENSOR
            </text>
          </g>

          {/* Interlock Valve at center */}
          <g transform="translate(300 312)" className="valve-group">
            {/* Valve body */}
            <circle r="34" fill="oklch(0.28 0.04 200)" stroke="oklch(0.6 0.06 200)" strokeWidth="2" />
            <circle r="34" fill="none" stroke="oklch(0.75 0.2 160)" strokeWidth="2" className="valve-ring" strokeDasharray="4 3" />
            {/* Handle/gate — rotates on shutdown */}
            <g className="valve-handle">
              <rect x="-3" y="-26" width="6" height="52" rx="2" fill="oklch(0.85 0.15 160)" />
              <circle r="6" fill="oklch(0.95 0.05 190)" />
            </g>
          </g>

          {/* Leak plume — appears at leak point */}
          <g transform="translate(410 290)" className="leak-group">
            <circle r="55" fill="url(#leak)" filter="url(#softglow)" className="leak-plume" />
            {Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                r="2.5"
                fill="oklch(0.8 0.18 55)"
                style={{
                  animation: `leakParticle 2.2s ease-out infinite`,
                  animationDelay: `${i * 0.35}s`,
                  opacity: 0,
                }}
              />
            ))}
          </g>
        </g>

        {/* Radar sweep — AI scan */}
        <g transform="translate(300 312)" opacity="0.35">
          <circle r="180" fill="none" stroke="oklch(0.7 0.15 160)" strokeWidth="1" strokeDasharray="2 4" className="radar-ring" />
          <circle r="120" fill="none" stroke="oklch(0.7 0.15 160)" strokeWidth="1" strokeDasharray="2 4" className="radar-ring" style={{ animationDelay: "1s" }} />
        </g>

        {/* HUD readouts */}
        <g fontFamily="ui-monospace, monospace" fill="oklch(0.4 0.04 200)">
          <g transform="translate(70 90)">
            <text fontSize="10" letterSpacing="2" fill="oklch(0.55 0.06 200)">SYSTEM STATUS</text>
            <text y="22" fontSize="16" fontWeight="700" fill="oklch(0.35 0.05 200)" className="hud-status">MONITORING</text>
          </g>
          <g transform="translate(70 470)">
            <text fontSize="10" letterSpacing="2" fill="oklch(0.55 0.06 200)">CH4 // PPM</text>
            <text y="24" fontSize="22" fontWeight="700" fill="oklch(0.35 0.05 200)" className="hud-ppm">018</text>
          </g>
          <g transform="translate(430 470)" textAnchor="start">
            <text fontSize="10" letterSpacing="2" fill="oklch(0.55 0.06 200)">INTERLOCK</text>
            <text y="24" fontSize="16" fontWeight="700" fill="oklch(0.35 0.05 200)" className="hud-lock">ARMED</text>
          </g>
        </g>
      </svg>

      <style>{`
        @keyframes pipeFlow {
          0%   { transform: translateX(70px); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(530px); opacity: 0; }
        }
        @keyframes leakParticle {
          0%   { transform: translate(0, 0) scale(1); opacity: 0; }
          20%  { opacity: 0.9; }
          100% { transform: translate(${Math.random() > 0.5 ? 20 : -20}px, -70px) scale(0.3); opacity: 0; }
        }
        @keyframes leakCycle {
          0%, 25%   { opacity: 0; transform: scale(0.4); }
          35%, 55%  { opacity: 1; transform: scale(1); }
          75%, 100% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes valveHandle {
          0%, 40%   { transform: rotate(0deg); }
          55%, 100% { transform: rotate(90deg); }
        }
        @keyframes valveRing {
          0%, 40%   { stroke: oklch(0.75 0.2 160); }
          45%, 70%  { stroke: oklch(0.75 0.22 45); }
          75%, 100% { stroke: oklch(0.75 0.2 160); }
        }
        @keyframes sensorLed {
          0%, 30%   { fill: oklch(0.75 0.2 160); }
          35%, 65%  { fill: oklch(0.78 0.22 45); }
          70%, 100% { fill: oklch(0.75 0.2 160); }
        }
        @keyframes radarSweep {
          0%   { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes flowStop {
          0%, 35%   { opacity: 1; }
          45%, 70%  { opacity: 0; }
          80%, 100% { opacity: 1; }
        }
        @keyframes hudPpm {
          0%, 25%   { fill: oklch(0.35 0.05 200); }
          35%, 65%  { fill: oklch(0.6 0.25 30); }
          75%, 100% { fill: oklch(0.35 0.05 200); }
        }
        .valve-handle { transform-origin: center; transform-box: fill-box; animation: valveHandle 8s ease-in-out infinite; }
        .valve-ring { transform-origin: center; animation: valveRing 8s ease-in-out infinite; }
        .sensor-led { animation: sensorLed 8s ease-in-out infinite; }
        .leak-plume { transform-origin: center; transform-box: fill-box; animation: leakCycle 8s ease-in-out infinite; }
        .leak-group circle:not(.leak-plume) { animation-play-state: running; }
        .radar-ring { transform-origin: center; transform-box: fill-box; animation: radarSweep 3s ease-out infinite; }
        .flow-normal circle { animation-play-state: running; }
        .hud-ppm { animation: hudPpm 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .valve-handle, .valve-ring, .sensor-led, .leak-plume, .radar-ring, .hud-ppm, .flow-normal circle, .leak-group circle { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
