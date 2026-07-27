import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { customGPTs } from "@/data/gpts";
import { ArrowUpRight, Sparkles } from "lucide-react";


export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "AI 자동화 Tools — AI Safety Lab" },
      {
        name: "description",
        content:
          "산업안전 법령 자문과 사고 근본원인분석을 지원하는 커스텀 ChatGPT 도구를 만나보세요. AI Safety Lab의 AI 자동화 Tools입니다.",
      },
      { property: "og:title", content: "AI 자동화 Tools — AI Safety Lab" },
      {
        property: "og:description",
        content: "산업안전 법령 자문과 사고 근본원인분석을 지원하는 커스텀 ChatGPT 도구",
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
          name: "AI Safety Lab AI 자동화 Tools",
          description: "산업안전 실무에 특화된 커스텀 ChatGPT 도구 모음",
          url: "https://ai-safety-craft.lovable.app/projects",
        }),
      },
    ],
  }),
  component: AutomationToolsPage,
});


function AutomationToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          AI 자동화 Tools
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          산업안전 실무에 바로 쓰는 AI 도구
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          법령 해석부터 사고 원인 분석까지, ChatGPT 위에서 동작하는 커스텀 GPT로 반복적인 안전 업무를
          더 빠르고 정확하게 처리합니다.
        </p>

        <div className="mt-14">
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
        </div>

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
      </section>
      <SiteFooter />
    </div>
  );
}

