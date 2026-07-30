import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { Scale, Camera, HelpCircle, BookOpen, ArrowRight, Sparkles, TrendingUp, FileText } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        name: "description",
        content:
          "AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며, 안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.",
      },
      { property: "og:title", content: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        property: "og:description",
        content: "HAZOP, 위험성평가, 법령 검토, 안전교육을 지원하는 AI 산업안전 도구와 인사이트 모음",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-safety-craft.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-craft.lovable.app/" }],
  }),

  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO — full-width bleed */}
      <section className="relative isolate overflow-hidden">
        <HeroAnimation />

        {/* 좌→우 다크 그라데이션 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_20/0.98)] from-[8%] via-[oklch(0.08_0.02_20/0.55)] via-[38%] to-transparent to-[62%]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_20/0.45)] via-transparent to-transparent" />

        <div className="container-page relative z-10 grid min-h-[285px] items-center gap-4 py-6 md:min-h-[320px] md:grid-cols-[1fr_1.15fr] md:py-8">
          {/* 좌측 카피 */}
          <div className="max-w-xl">
            <h1 className="font-display text-[1.85rem] font-bold leading-[1.18] tracking-tight text-white md:text-[2.25rem]">
              AI로 산업안전 실무를
              <br />더 빠르고 정확하게
            </h1>

            <p className="mt-3.5 max-w-[360px] text-[13px] leading-relaxed text-white/70">
              AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며, 안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.
            </p>

            <div className="mt-5">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* 우측 이미지 공간 + 떠 있는 통계 카드 */}
          <div className="relative hidden h-full min-h-[inherit] md:block">
            <div className="absolute bottom-[14%] left-0 flex items-end gap-2.5">
              <StatCard number="04" label="Active Projects" icon={<TrendingUp className="h-3.5 w-3.5" />} size="lg" />
              <StatCard number="05+" label="Insight Articles" icon={<FileText className="h-3.5 w-3.5" />} />
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[oklch(0.145_0_0)]">
        {/* PROJECT STRIP — horizontal cards */}
        <section className="border-y border-border/60 bg-[oklch(0.145_0_0)]">
          <div className="container-page py-3">
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((p, idx) => (
                <ProjectCard key={p.slug} p={p} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS PREVIEW */}
        <div className="container-page py-3.5">
          <RevealSection>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display relative pb-2 text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Safety Insights
                <span className="absolute bottom-0 left-0 h-0.5 w-14 rounded-full bg-primary" />
              </h2>
              <Link
                to="/insights"
                className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:inline-flex"
              >
                View All Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-2.5 grid gap-3 md:grid-cols-3">
              {insights.slice(0, 3).map((i, idx) => (
                <InsightCard key={i.slug} i={i} idx={idx} />
              ))}
            </div>
          </RevealSection>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

const projectIcons: Record<string, React.ReactNode> = {
  "ai-hazop-assistant": <Scale className="h-5 w-5" />,
  "ai-photo-risk-assessment": <Camera className="h-5 w-5" />,
  "safety-quiz": <HelpCircle className="h-5 w-5" />,
  "safety-insight-library": <BookOpen className="h-5 w-5" />,
};

function ProjectCard({ p, idx }: { p: (typeof projects)[number]; idx: number }) {
  const ref = useReveal<HTMLDivElement>();
  const card = (
    <div className="group relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-3.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.215_0_0)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_32px_-16px_oklch(0.55_0.2_25/0.55)]">
      {/* hover sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/[0.07] text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/70 group-hover:shadow-[0_0_18px_-4px_oklch(0.55_0.2_25/0.7)]">
        {projectIcons[p.slug] ?? <Sparkles className="h-5 w-5" />}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[13px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {p.title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{p.description}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
    </div>
  );

  const className = "block h-full";
  const style = { transitionDelay: `${idx * 90}ms` };

  return (
    <div ref={ref} className="reveal h-full" style={style}>
      {p.link ? (
        <a href={p.link} target="_blank" rel="noopener noreferrer" className={className}>
          {card}
        </a>
      ) : (
        <Link to="/projects/$slug" params={{ slug: p.slug }} className={className}>
          {card}
        </Link>
      )}
    </div>
  );
}

function StatCard({
  number,
  label,
  icon,
  size = "md",
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <div
      className={`rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_8px_28px_-14px_rgba(0,0,0,0.5)] backdrop-blur-md ${
        isLg ? "min-w-[140px] p-3.5" : "min-w-[124px] p-3"
      }`}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div
          className={`font-display font-bold leading-none tracking-tight text-white ${isLg ? "text-[2rem]" : "text-[1.75rem]"}`}
        >
          {number}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
      <div className={`mt-2 font-medium text-white/75 ${isLg ? "text-xs" : "text-[11px]"}`}>{label}</div>
      <div className="mt-2 h-[2px] w-8 rounded-full bg-primary" />
    </div>
  );
}

function InsightCard({ i, idx = 0 }: { i: (typeof insights)[number]; idx?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${idx * 90}ms` }}>
      <Link to="/insights" hash={i.slug} className="group block h-full">
        <article className="relative flex h-full flex-col gap-2.5 overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.215_0_0)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_32px_-16px_oklch(0.55_0.2_25/0.55)] md:flex-row">
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg md:aspect-auto md:h-[64px] md:w-[88px] md:self-center">
          <img
            src={i.image}
            alt={i.title}
            loading="lazy"
            width={400}
            height={240}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between py-1 pr-1">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{i.category}</span>
            <h4 className="mt-1 line-clamp-2 text-[13px] font-semibold leading-snug tracking-tight text-foreground">
              {i.title}
            </h4>
            <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{i.excerpt}</p>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>
              {i.date} <span className="px-1.5 opacity-40">|</span> {i.readTime}
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </div>
        </article>
      </Link>
    </div>
  );
}

function RevealSection({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </section>
  );
}
