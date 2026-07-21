import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        name: "description",
        content:
          "HAZOP, 위험성평가, 현장 사진 분석 및 안전교육에 AI를 적용하는 산업안전 프로젝트와 인사이트를 정리합니다.",
      },
      { property: "og:title", content: "AI Safety Lab" },
      {
        property: "og:description",
        content: "AI로 현장 안전관리의 가능성을 확장하는 프로젝트 포트폴리오",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const workflow = [
  { step: "01", title: "현장 정보 입력", desc: "공정, 사진, 편차 등 현장 데이터를 업로드합니다." },
  { step: "02", title: "AI 위험요인 분석", desc: "LLM · Vision 모델이 위험요인을 구조화합니다." },
  { step: "03", title: "법령 및 기준 연결", desc: "산업안전보건법, KOSHA Guide, PSM 요건과 매칭합니다." },
  { step: "04", title: "개선조치 도출", desc: "실무에 적용 가능한 개선조치를 우선순위와 함께 제안합니다." },
  { step: "05", title: "결과 보고서 생성", desc: "안전관리자가 바로 활용할 수 있는 문서로 출력합니다." },
];

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
              AI로 현장 안전관리의
              <br />
              가능성을 확장합니다
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              HAZOP, 위험성평가, 현장 사진 분석 및 안전교육에 AI를 적용하여 안전관리자의 판단과
              업무를 지원하는 프로젝트를 개발합니다.
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

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              { k: "4", v: "Active Projects" },
              { k: "5+", v: "Insight Articles" },
              { k: "KOSHA · PSM", v: "적용 표준" },
              { k: "LLM · Vision", v: "AI 스택" },
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
      <section className="container-page py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
              AI 기반 산업안전 프로젝트
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm font-medium text-[var(--navy)] hover:underline md:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-y border-border bg-card/40">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Safety Workflow
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--navy)] md:text-4xl">
              데이터에서 개선조치까지, AI가 지원하는 흐름
            </h2>
            <p className="mt-4 text-muted-foreground">
              현장 정보 입력부터 결과 보고서 생성까지, 안전관리자의 판단을 보조하는 5단계 워크플로우.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {workflow.map((w, i) => (
              <li
                key={w.step}
                className="relative rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-[var(--navy)]"
              >
                <div className="text-xs font-mono text-[var(--navy)]/60">{w.step}</div>
                <div className="mt-2 text-sm font-semibold text-[var(--navy)]">{w.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.desc}</p>
                {i < workflow.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-border md:block">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
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

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-[0_10px_40px_-20px_var(--navy)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)]/70">
          {p.type}
        </span>
        <span className="text-xs text-muted-foreground">↗</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--navy)]">{p.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.features.map((f) => (
          <span
            key={f}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-slate-ink"
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <div className="flex gap-2 text-[11px] text-muted-foreground">
          {p.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
        <Link
          to="/projects/$slug"
          params={{ slug: p.slug }}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--navy)] group-hover:gap-2 transition-all"
        >
          View Project →
        </Link>
      </div>
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
