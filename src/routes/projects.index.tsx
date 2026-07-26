import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { projects } from "@/data/projects";
import { customGPTs } from "@/data/gpts";
import { ArrowUpRight, Sparkles } from "lucide-react";


export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — AI Safety Lab" },
      {
        name: "description",
        content:
          "HAZOP 분석, 사진 기반 위험성평가, 안전교육 퀴즈, 법령 검토 커스텀 GPT까지 산업안전 실무를 지원하는 AI 도구 프로젝트를 한 곳에 모았습니다.",
      },
      { property: "og:title", content: "Projects — AI Safety Lab" },
      {
        property: "og:description",
        content: "HAZOP·위험성평가·안전교육을 지원하는 AI 산업안전 프로젝트 카탈로그",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-safety-craft.lovable.app/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-craft.lovable.app/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI Safety Lab Projects",
          description: "AI 기반 산업안전 도구 프로젝트 모음",
          url: "https://ai-safety-craft.lovable.app/projects",
        }),
      },
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
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
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
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-20px_var(--primary)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {p.type}
                </span>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Custom GPTs 섹션 */}
        <div className="mt-24">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Custom GPTs
          </div>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            실무자를 위한 커스텀 GPT
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            산업안전 실무에 특화된 프롬프트와 지식 베이스로 튜닝된 ChatGPT 도구입니다. 클릭 시 ChatGPT에서 바로 실행됩니다.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {customGPTs.map((gpt) => (
              <a
                key={gpt.id}
                href={gpt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-20px_var(--primary)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    <Sparkles className="h-3 w-3" />
                    ChatGPT
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {gpt.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {gpt.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {gpt.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Try on ChatGPT
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

