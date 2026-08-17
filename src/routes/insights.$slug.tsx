import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getInsight, publishedInsights } from "@/data/insights";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight || insight.body.length === 0) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — AI Safety Lab" }, { name: "robots", content: "noindex" }],
      };
    }
    const { insight } = loaderData;
    const url = `https://ai-safety-craft.lovable.app/insights/${insight.slug}`;
    return {
      meta: [
        { title: `${insight.title} — AI Safety Lab` },
        { name: "description", content: insight.excerpt },
        { property: "og:title", content: insight.title },
        { property: "og:description", content: insight.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: insight.title,
            description: insight.excerpt,
            articleSection: insight.category,
            datePublished: insight.date.replace(/\./g, "-"),
            url,
          }),
        },
      ],
    };
  },
  notFoundComponent: InsightNotFound,
  component: InsightDetailPage,
});

function InsightDetailPage() {
  const { insight } = Route.useLoaderData();
  const others = publishedInsights.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="container-page py-14 md:py-20">
        <Link
          to="/insights"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Safety Insights
        </Link>

        <header className="mt-6 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {insight.category}
          </span>
          <h1 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-[2.6rem]">
            {insight.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {insight.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{insight.date}</span>
            <span className="opacity-40">|</span>
            <span>{insight.readTime}</span>
          </div>
        </header>

        <div className="mt-8 h-px w-full bg-border" />

        <div className="mt-8 max-w-3xl space-y-6">
          {insight.body.map((p, idx) => (
            <p key={idx} className="text-[15px] leading-[1.85] text-foreground/85 md:text-base">
              {p}
            </p>
          ))}
        </div>

        {others.length > 0 && (
          <section className="mt-16 border-t border-border pt-10">
            <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">
              다른 인사이트
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/insights/$slug"
                  params={{ slug: o.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {o.category}
                  </span>
                  <h3 className="font-display mt-2 text-base font-semibold leading-snug text-foreground">
                    {o.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    읽기 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}

function InsightNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">
          아직 공개되지 않은 글입니다
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          곧 발행될 예정입니다. 다른 인사이트를 먼저 살펴보세요.
        </p>
        <Link
          to="/insights"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Safety Insights 보기
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
