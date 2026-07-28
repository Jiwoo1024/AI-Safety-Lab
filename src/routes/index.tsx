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

      <main className="container-page py-6 md:py-10">
        {/* HERO — split-screen card with overlaid stats */}
        <section className="relative isolate overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-black/40">
          <div className="relative min-h-[440px] md:min-h-[560px] lg:min-h-[640px]">
            <HeroAnimation />

            {/* 가독성용 좌→우 다크 그라데이션 */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_250/0.95)] via-[oklch(0.08_0.02_250/0.7)] to-[oklch(0.08_0.02_250/0.25)]" />

            <div className="relative z-10 grid min-h-[440px] grid-cols-1 items-center md:min-h-[560px] md:grid-cols-2 lg:min-h-[640px]">
              {/* 좌측 카피 */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/90">
                    AI × Industrial Safety Portfolio
                  </span>
                </div>

                <h1 className="font-display max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                  AI로 <span className="text-primary">산업안전</span>
                  <br />
                  실무를 더 빠르고 <span className="whitespace-nowrap">정확하게</span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                  AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며,
                  안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.
                </p>

                <div className="mt-9">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
                  >
                    Explore Projects
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              {/* 우측 통계 카드 오버레이 */}
              <div className="relative hidden items-end justify-end p-8 md:flex md:p-12 lg:p-16">
                <div className="flex flex-col gap-4 lg:flex-row">
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
            </div>
          </div>
        </section>

        {/* PROJECT STRIP — horizontal cards */}
        <RevealSection className="mt-10 md:mt-14">
          <h2 className="font-display mb-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            AI 산업안전 프로젝트
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, idx) => (
              <Link
                key={p.slug}
                to={p.link ? p.link : "/projects/$slug"}
                params={p.link ? undefined : { slug: p.slug }}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noopener noreferrer" : undefined}
                className="group block reveal is-visible"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-xl">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary transition-all group-hover:scale-110">
                    {projectIcons[p.slug] ?? <Sparkles className="h-6 w-6" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                      {p.type}
                    </p>
                    <h3 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </RevealSection>

        {/* INSIGHTS PREVIEW */}
        <RevealSection className="mt-24 md:mt-32">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Safety Insights
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                실무 관점의 안전 인사이트
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:inline"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.slice(0, 3).map((i) => (
              <InsightCard key={i.slug} i={i} />
            ))}
          </div>
        </RevealSection>
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
    <div className="glass-card min-w-[150px] rounded-2xl p-5 lg:min-w-[170px]">
      <div className="flex items-start justify-between">
        <div className="font-display text-4xl font-bold leading-none tracking-tight text-white">
          {number}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="mt-3 text-sm font-medium text-white/80">{label}</div>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-primary" />
    </div>
  );
}

function InsightCard({ i }: { i: (typeof insights)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary md:flex-row">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden md:aspect-auto md:w-[42%]">
        <img
          src={i.image}
          alt={i.title}
          loading="lazy"
          width={400}
          height={240}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 md:bg-gradient-to-l md:from-card/90 md:via-card/40 md:to-transparent" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {i.category}
          </span>
          <h4 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground">
            {i.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {i.excerpt}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{i.readTime}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </article>
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
