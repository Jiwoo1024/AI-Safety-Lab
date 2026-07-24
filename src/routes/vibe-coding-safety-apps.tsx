import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { vibeApps } from "@/data/vibe-apps";
import { ArrowUpRight, Code2 } from "lucide-react";

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
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          빠르게 만들고, 현장에서 검증하는
          <br />
          Safety App 프로젝트
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Vibe Coding으로 아이디어를 빠르게 프로토타입하고, 실무 피드백을 반영하며 발전시키는
          Safety App 실험 공간입니다.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {vibeApps.map((app) => {
            const isReady = Boolean(app.url);
            const CardInner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    <Code2 className="h-3 w-3" />
                    {app.type}
                  </span>
                  {isReady ? (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  ) : (
                    <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {app.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {app.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {app.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${
                    isReady ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {isReady ? "Open App" : "링크 준비 중"}
                  {isReady && <ArrowUpRight className="h-3.5 w-3.5" />}
                </span>
              </>
            );

            const baseClass =
              "group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all";
            const activeClass =
              " hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_40px_-20px_var(--primary)]";

            return isReady ? (
              <a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClass + activeClass}
              >
                {CardInner}
              </a>
            ) : (
              <div
                key={app.id}
                aria-disabled
                className={baseClass + " opacity-80"}
              >
                {CardInner}
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-dashed border-border bg-card/50 p-6 text-sm text-muted-foreground">
          <p>
            새 앱을 추가하려면 <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">src/data/vibe-apps.ts</code>{" "}
            파일에 항목을 추가하고 <code className="rounded bg-secondary px-1.5 py-0.5 text-foreground">url</code> 값을 채우면
            버튼이 자동으로 활성화됩니다.
          </p>
          <Link
            to="/projects"
            className="mt-4 inline-flex items-center gap-1.5 text-primary hover:gap-2"
          >
            AI 자동화 Tools 보기 <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
