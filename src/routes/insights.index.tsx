import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { insights } from "@/data/insights";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights/")({
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
      <section className="container-page py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Safety Insights</p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-[2.6rem]">
          실무 관점의 산업안전 인사이트
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          HAZOP, 위험성평가, 법령 해석, 사고사례를 실무 관점으로 재구성한 짧은 글 모음입니다.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((i) => {
            const published = i.body.length > 0;
            const inner = (
              <>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {i.category}
                  </span>
                  <span>{i.readTime}</span>
                </div>
                <h2 className="font-display mt-4 text-lg font-semibold leading-snug tracking-tight text-foreground">
                  {i.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{i.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{i.date}</span>
                  {published ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      읽기 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
              </>
            );

            const cardClass =
              "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300";

            return published ? (
              <Link
                key={i.slug}
                to="/insights/$slug"
                params={{ slug: i.slug }}
                className={`${cardClass} hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.8)]`}
              >
                {inner}
              </Link>
            ) : (
              <article key={i.slug} className={`${cardClass} opacity-70`}>
                {inner}
              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
