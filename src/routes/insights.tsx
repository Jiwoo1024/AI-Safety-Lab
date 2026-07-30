import { createFileRoute } from "@tanstack/react-router";
import { requireUnlocked } from "@/lib/gate.functions";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/insights")({
  beforeLoad: () => requireUnlocked(),
  head: () => ({
    meta: [
      { title: "Safety Insights — AI Safety Lab" },
      {
        name: "description",
        content:
          "HAZOP, 위험성평가, 산업안전보건법과 KOSHA Guide 해석, 중대재해 사고사례를 산업안전 실무자 관점에서 정리한 인사이트 모음입니다.",
      },
      { property: "og:title", content: "Safety Insights — AI Safety Lab" },
      {
        property: "og:description",
        content: "HAZOP·법령·사고사례를 실무 관점으로 재구성한 산업안전 인사이트 라이브러리",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-safety-craft.lovable.app/insights" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-craft.lovable.app/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Safety Insights",
          description: "산업안전 실무자 관점의 HAZOP·법령·사고사례 인사이트 모음",
          url: "https://ai-safety-craft.lovable.app/insights",
        }),
      },
    ],
  }),
  component: InsightsPage,
});


function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Safety Insights
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          실무 관점의 산업안전 인사이트
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          HAZOP, 위험성평가, 법령 해석, 사고사례를 실무 관점으로 재구성한 짧은 글 모음입니다.
        </p>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight text-foreground">
          전체 인사이트
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((i) => (
            <article
              key={i.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/20 px-2.5 py-1 text-[11px] font-medium text-primary">
                  {i.category}
                </span>
                <span>{i.readTime}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">
                {i.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {i.excerpt}
              </p>
              <span className="mt-5 text-sm font-medium text-primary">Read →</span>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
