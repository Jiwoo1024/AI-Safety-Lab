import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { Scale, Camera, HelpCircle, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        name: "description",
        content:
          "산업안전 법령 자문, 위험성평가, 안전교육 자료 제작 등 실무에 필요한 작업을 AI로 지원하는 도구들을 만들고 있습니다.",
      },
      { property: "og:title", content: "AI Safety Lab" },
      {
        property: "og:description",
        content: "AI로 산업안전 실무를 더 빠르고 정확하게",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-page py-8 md:py-12">
        {/* HERO — split-screen card */}
        <section className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:col-span-7 lg:p-16">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  AI × Industrial Safety Portfolio
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                AI로 <span className="text-primary">산업안전</span>
                <br />
                실무를 더 빠르고 <span className="whitespace-nowrap">정확하게</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                산업안전 법령 자문, 위험성평가, 안전교육 자료 제작 등 실무에 필요한 작업을 AI로
                지원하는 도구들을 만들고 있습니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                >
                  Explore Projects
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  View Safety Insights
                </Link>
              </div>

              {/* Mobile stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="font-display text-2xl font-bold text-foreground">04</div>
                  <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                    Active Projects
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="font-display text-2xl font-bold text-foreground">05+</div>
                  <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                    Insight Articles
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] md:min-h-[500px] lg:col-span-5 lg:min-h-[600px] group bg-secondary/30">
              <HeroAnimation />
              <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-card via-card/40 to-transparent lg:block" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="absolute right-6 top-6 rounded-lg border border-border bg-card/80 p-3 text-[10px] font-mono text-primary backdrop-blur-md">
                SCAN_CORE_ALPHA // 0.982
              </div>

              {/* Desktop stats — overlap the animation */}
              <div className="absolute bottom-6 left-6 hidden gap-4 md:flex">
                <div className="rounded-2xl border border-border bg-card/90 p-5 shadow-xl backdrop-blur-xl">
                  <div className="font-display text-3xl font-bold text-foreground">04</div>
                  <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                    Active Projects
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card/90 p-5 shadow-xl backdrop-blur-xl">
                  <div className="font-display text-3xl font-bold text-foreground">05+</div>
                  <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                    Insight Articles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT STRIP — horizontal image cards */}
        <RevealSection className="mt-10 md:mt-14">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {projects.map((p, idx) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block reveal is-visible"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary transition-all group-hover:border-primary/50 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-card/80 text-primary transition-all group-hover:scale-110 group-hover:rotate-6">
                      {projectIcons[p.slug] ?? <Sparkles className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 transition-all group-hover:bg-transparent">
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-foreground/20 text-foreground opacity-0 transition-all group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary/80">
                  {p.type}
                </p>
                <h3 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                  {p.title} +
                </h3>
              </Link>
            ))}
          </div>
        </RevealSection>

        {/* INSIGHTS PREVIEW */}
        <section className="mt-24 md:mt-32">
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
        </section>

        {/* CTA */}
        <section className="mt-24 pb-8 md:mt-32">
          <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center md:px-16 md:py-20">
            <h3 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              AI와 산업안전의 접점에서 함께 이야기해요
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              프로젝트 협업, 리서치, 실무 적용 문의 모두 환영합니다.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Contact →
            </Link>
          </div>
        </section>
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

function InsightCard({ i }: { i: (typeof insights)[number] }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-medium text-primary">
          {i.category}
        </span>
        <span>{i.readTime}</span>
      </div>
      <h4 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">
        {i.title}
      </h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{i.excerpt}</p>
      <span className="mt-5 text-sm font-medium text-primary">Read →</span>
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

