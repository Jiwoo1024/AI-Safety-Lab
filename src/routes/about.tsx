import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AI Safety Lab" },
      {
        name: "description",
        content: "산업안전공학 기반으로 AI를 안전관리 업무에 적용하는 사람의 이야기",
      },
      { property: "og:title", content: "About — AI Safety Lab" },
      { property: "og:description", content: "AI Safety Lab을 만든 사람 소개" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const experience = [
  { label: "전공", value: "산업안전공학" },
  { label: "실무 영역", value: "위험성평가 · 공정안전 · 화학안전 · 현장 안전관리" },
  { label: "관심 기술", value: "LLM · Vision · Workflow Automation" },
  { label: "적용 표준", value: "산업안전보건법 · KOSHA Guide · PSM" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          About
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--navy)] md:text-5xl">
          산업안전과 AI 사이,
          <br />
          실무에 닿는 도구를 만듭니다.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/90">
          산업안전공학을 전공하고 위험성평가, 공정안전, 화학안전 및 현장 안전관리 경험을 기반으로
          AI를 산업안전 업무에 적용하는 프로젝트를 개발하고 있습니다. 안전관리자의 판단을 대체하는
          것이 아니라, 반복적이고 시간이 오래 걸리는 업무를 지원하여 더 중요한 판단에 집중할 수
          있게 만드는 것이 목표입니다.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {experience.map((e) => (
            <div key={e.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {e.label}
              </div>
              <div className="mt-2 text-base font-medium text-[var(--navy)]">{e.value}</div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
