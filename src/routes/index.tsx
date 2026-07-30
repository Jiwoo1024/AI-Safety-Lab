import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import {
  Scale,
  Camera,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  TrendingUp,
  FileText,
} from "lucide-react";
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
        content:
          "HAZOP, 위험성평가, 법령 검토, 안전교육을 지원하는 AI 산업안전 도구와 인사이트 모음",
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


        <div className="container-page relative z-10 grid min-h-[280px] items-center gap-8 py-8 md:min-h-[300px] md:grid-cols-[1fr_1.1fr] md:py-9">
          {/* 좌측 카피 */}
          <div className="max-w-xl">
            <h1 className="font-display text-3xl font-bold leading-[1.2] tracking-tight text-white md:text-[2.6rem]">
              AI로 산업안전 실무를
              <br />더 빠르고 정확하게
            </h1>

            <p className="mt-4 text-[13px] leading-relaxed text-white/65 md:text-sm">
              AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며,
              <br />
              안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.
            </p>

            <div className="mt-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>


          {/* 통계 카드 */}
          <div className="flex items-center justify-start gap-3">
            <StatCard
              number="04"
              label="Active Projects"
              icon={<TrendingUp className="h-5 w-5" />}
            />
            <StatCard
              number="05+"
              label="Insight Articles"
              icon={<FileText className="h-5 w-5" />}
            />
          </div>
        </div>

      </section>

      <main>
        {/* PROJECT STRIP — horizontal cards */}
        <section className="border-y border-border/60 bg-[oklch(0.09_0.008_20)]">
          <div className="container-page py-5">
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
              {projects.map((p, idx) => (
                <ProjectCard key={p.slug} p={p} idx={idx} />
              ))}
            </div>
          </div>
        </section>


        {/* INSIGHTS PREVIEW */}
        <div className="container-page py-8 md:py-9">
          <RevealSection>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display relative pb-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
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
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {insights.slice(0, 3).map((i) => (
                <InsightCard key={i.slug} i={i} />
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
  "ai-hazop-assistant": <Scale className="h-6 w-6" />,
  "ai-photo-risk-assessment": <Camera className="h-6 w-6" />,
  "safety-quiz": <HelpCircle className="h-6 w-6" />,
  "safety-insight-library": <BookOpen className="h-6 w-6" />,
};

function ProjectCard({ p, idx }: { p: (typeof projects)[number]; idx: number }) {
  const card = (
    <div className="group flex h-full items-center gap-4 rounded-xl border border-border/60 bg-[oklch(0.10_0.015_250)] p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-[oklch(0.11_0.015_250)]">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-primary/50 text-primary transition-all group-hover:scale-110">
        {projectIcons[p.slug] ?? <Sparkles className="h-6 w-6" />}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {p.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {p.description}
        </p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
    </div>
  );

  const className = "block h-full reveal is-visible";
  const style = { transitionDelay: `${idx * 80}ms` };


  if (p.link) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {card}
      </a>
    );
  }

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className={className}
      style={style}
    >
      {card}
    </Link>
  );
}

function StatCard({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="min-w-[138px] rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-md lg:min-w-[150px]">
      <div className="flex items-start justify-between gap-4">
        <div className="font-display text-3xl font-bold leading-none tracking-tight text-white">
          {number}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="mt-2.5 text-[13px] font-medium text-white/75">{label}</div>
      <div className="mt-3 h-0.5 w-9 rounded-full bg-primary" />
    </div>
  );
}

function InsightCard({ i }: { i: (typeof insights)[number] }) {
  return (
    <Link to="/insights" hash={i.slug} className="group block h-full">
      <article className="flex h-full flex-col gap-3 rounded-xl border border-border/60 bg-[oklch(0.10_0.008_20)] p-3 transition-all hover:-translate-y-1 hover:border-primary/50 md:flex-row">

        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg md:aspect-auto md:h-[112px] md:w-[140px] md:self-center">
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {i.category}
            </span>
            <h4 className="mt-1.5 text-base font-semibold leading-snug tracking-tight text-foreground">
              {i.title}
            </h4>
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {i.excerpt}
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              {i.date} <span className="px-1.5 opacity-40">|</span> {i.readTime}
            </span>

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </div>

      </article>
    </Link>
  );
}

function RevealSection({
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
