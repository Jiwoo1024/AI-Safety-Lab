import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vibe-coding-safety-apps")({
  head: () => ({
    meta: [
      { title: "Vibe Coding_Safety Apps — AI Safety Lab" },
      {
        name: "description",
        content: "Vibe Coding으로 빠르게 만들어보는 Safety App 프로토타입과 실험 프로젝트",
      },
      { property: "og:title", content: "Vibe Coding_Safety Apps — AI Safety Lab" },
      {
        property: "og:description",
        content: "Vibe Coding으로 빠르게 만들어보는 Safety App 프로토타입과 실험 프로젝트",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VibeCodingSafetyAppsPage,
});

function VibeCodingSafetyAppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Vibe Coding
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--navy)] md:text-5xl">
          빠르게 만들고, 현장에서 검증하는
          <br />
          Safety App 프로젝트
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Vibe Coding으로 아이디어를 빠르게 프로토타입하고, 실무 피드백을 반영하며 발전시키는
          Safety App 실험 공간입니다. 곧 새로운 프로젝트가 추가됩니다.
        </p>

        <div className="mt-14 rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--navy)]">
              준비 중입니다
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              현재 AI 자동화 Tools 섹션에서 먼저 공개된 프로젝트들을 확인하실 수 있습니다.
            </p>
            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
            >
              AI 자동화 Tools 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Related Projects
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-[var(--navy)]"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--navy)]/70">
                  {p.type}
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--navy)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
