import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AI Safety Lab" },
      {
        name: "description",
        content: "HAZOP, 위험성평가, 현장 사진 분석 등 AI 기반 산업안전 프로젝트 모음",
      },
      { property: "og:title", content: "Projects — AI Safety Lab" },
      { property: "og:description", content: "AI × 산업안전 프로젝트 카탈로그" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Projects
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--navy)] md:text-5xl">
          AI를 현장에 적용한 산업안전 프로젝트
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          안전관리자의 판단을 보조하는 도구부터 인사이트 라이브러리까지, 실무 관점에서 개발한
          프로젝트를 소개합니다.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--navy)] hover:shadow-[0_10px_40px_-20px_var(--navy)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)]/70">
                  {p.type}
                </span>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--navy)]">
                {p.title}
              </h3>
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
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
