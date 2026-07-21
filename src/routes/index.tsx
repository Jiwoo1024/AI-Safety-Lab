import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { Scale, Camera, HelpCircle, BookOpen, ArrowRight, Sparkles } from "lucide-react";

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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--sky-soft), transparent 55%), radial-gradient(circle at 80% 0%, color-mix(in oklab, var(--navy) 12%, transparent), transparent 50%)",
          }}
        />
        <div className="container-page py-24 md:py-32">
          <div className="fade-up max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-[var(--navy)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--navy)]" />
              AI × Industrial Safety Portfolio
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--navy)] md:text-6xl">
              AI로 산업안전 실무를
              <br />
              더 빠르고 정확하게
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              산업안전 법령 자문, 위험성평가, 안전교육 자료 제작 등 실무에 필요한 작업을 AI로
              지원하는 도구들을 만들고 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-[var(--navy)] transition-colors hover:border-[var(--navy)]"
              >
                View Safety Insights
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
            {[
              { k: "4", v: "Active Projects" },
              { k: "5+", v: "Insight Articles" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-semibold text-[var(--navy)]">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="gradient-dark relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, color-mix(in oklab, oklch(0.55 0.12 245) 25%, transparent), transparent 40%), radial-gradient(circle at 20% 90%, color-mix(in oklab, oklch(0.4 0.08 230) 20%, transparent), transparent 45%)",
          }}
        />
        <div className="container-page relative">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                AI 기반 산업안전 프로젝트
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                현장 데이터를 분석하고 안전관리자의 판단을 지원하는 AI 도구들을 확인해보세요.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-medium text-white/80 hover:text-white hover:underline md:inline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>


      {/* INSIGHTS PREVIEW */}
      <section className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Safety Insights
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
              실무 관점의 안전 인사이트
            </h2>
          </div>
          <Link to="/insights" className="hidden text-sm font-medium text-[var(--navy)] hover:underline md:inline">
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
      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-[var(--navy)] px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h3 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            AI와 산업안전의 접점에서 함께 이야기해요
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/70">
            프로젝트 협업, 리서치, 실무 적용 문의 모두 환영합니다.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-[var(--navy)]"
          >
            Contact →
          </Link>
        </div>
      </section>

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

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] glow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--sky-soft)] text-[var(--navy)]">
        {projectIcons[p.slug] ?? <Sparkles className="h-6 w-6" />}
      </div>
      <span className="mt-5 w-fit rounded-full bg-[var(--sky-soft)]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--sky-soft)]">
        {p.type}
      </span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
      <Link
        to="/projects/$slug"
        params={{ slug: p.slug }}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--sky-soft)] px-4 py-2 text-sm font-medium text-[var(--navy)] transition-all hover:bg-white hover:gap-3"
      >
        View Project
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function InsightCard({ i }: { i: (typeof insights)[number] }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[var(--navy)]">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="rounded-full bg-[var(--sky-soft)]/40 px-2.5 py-1 text-[11px] font-medium text-[var(--navy)]">
          {i.category}
        </span>
        <span>{i.readTime}</span>
      </div>
      <h4 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[var(--navy)]">
        {i.title}
      </h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{i.excerpt}</p>
      <span className="mt-5 text-sm font-medium text-[var(--navy)]">Read →</span>
    </article>
  );
}
