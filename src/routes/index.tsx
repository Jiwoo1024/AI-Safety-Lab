import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

import { insights, type Insight } from "@/data/insights";
import { getProject, type Project } from "@/data/projects";
import { ProjectDetailContent } from "@/components/project-detail-content";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Scale,
  Camera,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  FileText,
  Brain,
  ShieldCheck,
  CheckCircle,
  Search,
} from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { useReveal } from "@/hooks/use-reveal";
import projectShowcaseImage from "@/assets/photo-risk-sample.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        name: "description",
        content:
          "AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며, 안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.",
      },
      { property: "og:title", content: "AI Safety Lab — AI 기반 산업안전 프로젝트 포트폴리오" },
      {
        property: "og:description",
        content:
          "HAZOP, 위험성평가, 법령 검토, 안전교육을 지원하는 AI 산업안전 도구와 인사이트 모음",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-safety-craft.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-craft.lovable.app/" }],
  }),

  component: HomePage,
});

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const [selectedSlug, setSelectedSlug] = React.useState<string | null>(null);
  const openDetail = React.useCallback((slug: string) => {
    setSelectedSlug(slug);
    setOpen(true);
  }, []);
  const selectedProject = selectedSlug ? getProject(selectedSlug) : undefined;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO — full-bleed image, single-column statement copy */}
      <section className="relative isolate flex h-[74vh] min-h-[480px] items-center overflow-hidden md:min-h-[540px]">
        <HeroAnimation />

        {/* 좌→우 다크 그라데이션 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_20/0.98)] from-[8%] via-[oklch(0.08_0.02_20/0.55)] via-[38%] to-transparent to-[62%]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_20/0.45)] via-transparent to-transparent" />

        <div className="container-page relative z-10 max-w-2xl py-12">
          <span className="reveal inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-md">
            AI 산업안전 솔루션
          </span>

          <h1
            className="reveal font-display mt-5 text-[2.3rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-white md:text-[3.3rem]"
            style={{ transitionDelay: "80ms" }}
          >
            AI로 산업안전 실무를
            <br />
            <span className="bg-gradient-to-r from-primary to-[oklch(0.75_0.15_50)] bg-clip-text text-transparent">
              더 빠르고 정확하게
            </span>
          </h1>

          <p
            className="reveal mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/70"
            style={{ transitionDelay: "160ms" }}
          >
            AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며, 안전한 의사결정을 지원하는 AI 기반
            솔루션을 개발합니다.
          </p>

          <div className="reveal mt-7" style={{ transitionDelay: "240ms" }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-spring duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_-6px_oklch(0.55_0.23_29/0.6)] active:scale-[0.98]"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-spring duration-500 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING OVERLAP BAR */}
      <div className="relative z-20 container-page -mt-9 md:-mt-12">
        <div className="reveal glass-card flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10 p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] md:flex-row md:divide-x md:divide-y-0">
          <QuickStatTile
            to="/projects"
            number="04"
            label="Active Projects"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <QuickStatTile
            to="/insights"
            number="05+"
            label="Insight Articles"
            icon={<FileText className="h-4 w-4" />}
          />
          <Link
            to="/projects"
            className="group flex flex-1 items-center justify-between gap-3 rounded-xl px-6 py-4 transition-spring duration-500 hover:bg-white/[0.04]"
          >
            <span className="text-sm font-semibold text-white">전체 프로젝트 살펴보기</span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-spring duration-500 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <main className="bg-[oklch(0.145_0_0)] pt-16 md:pt-24">
        {/* PROJECTS OVERVIEW — image + tab list */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <AmbientOrbs />
          <div className="container-page relative">
            <RevealSection className="mb-10 max-w-2xl md:mb-14">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Projects
              </span>
              <h2 className="font-display mt-4 text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
                현장의 위험을 놓치지 않는 AI 파트너들
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                HAZOP 분석부터 현장 사진 기반 위험성평가, 사고조사, 안전교육까지 — 안전관리자의
                판단을 돕는 네 가지 AI 도구입니다.
              </p>
            </RevealSection>

            <ProjectShowcase onDetail={openDetail} />
          </div>
        </section>

        {/* SAFETY WORKFLOW — big word row */}
        <section className="relative overflow-hidden border-y border-border/60 py-16 text-center md:py-24">
          <RevealSection className="mb-10 md:mb-14">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
              Process
            </span>
            <h2 className="font-display mt-4 text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl">
              탐지부터 조치까지, AI Safety Workflow
            </h2>
          </RevealSection>

          <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-6 md:gap-x-6">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <span className="reveal inline-block" style={{ transitionDelay: `${idx * 80}ms` }}>
                  <span className="cursor-default text-[9vw] leading-none font-black tracking-tighter text-white/10 uppercase transition-colors duration-500 hover:text-white/80 md:text-[4.25rem]">
                    {step.title}
                  </span>
                </span>
                {idx < workflowSteps.length - 1 && (
                  <span className="reveal grid h-[9vw] w-[9vw] shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/[0.08] text-primary md:h-16 md:w-16">
                    {step.icon}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* INSIGHTS — asymmetric case-study style grid */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <AmbientOrbs className="opacity-70" />
          <div className="container-page relative">
            <RevealSection className="flex items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Insights
                </span>
                <h2 className="font-display mt-4 text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
                  Safety Insights
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:inline-flex"
              >
                View All Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </RevealSection>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <FeaturedInsightCard i={insights[0]} />
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1">
                <InsightCard i={insights[1]} idx={1} />
                <InsightCard i={insights[2]} idx={2} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto border-white/10 bg-[oklch(0.165_0.02_265)] text-foreground">
          {selectedProject ? (
            <>
              <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {selectedProject.description}
              </DialogDescription>
              <div className="-mt-1 mb-2">
                <Link
                  to="/projects/$slug"
                  params={{ slug: selectedProject.slug }}
                  className="text-[11px] font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  전체 화면으로 보기 →
                </Link>
              </div>
              <ProjectDetailContent project={selectedProject} />
            </>
          ) : (
            <>
              <DialogTitle>상세 정보</DialogTitle>
              <DialogDescription>준비 중인 프로젝트입니다.</DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const vibeItems = [
  {
    slug: "ai-photo-risk-assessment",
    title: "Photo Risk Assessment",
    icon: <Camera className="h-5 w-5" />,
    href: "https://ai-photo-risk-assessment.lovable.app",
  },
  {
    slug: "ai-hazop-assistant",
    title: "AI HAZOP Assistant",
    icon: <Scale className="h-5 w-5" />,
    href: "https://ai-hazop-assistant.lovable.app/",
  },
  {
    slug: "incident-rca-assistant",
    title: "Incident RCA Assistant",
    icon: <Brain className="h-5 w-5" />,
    href: "https://ai-incident-rca-assistant.lovable.app",
  },
  {
    slug: "safety-learning-assistant",
    title: "Safety Learning Assistant",
    icon: <HelpCircle className="h-5 w-5" />,
    href: "https://ai-safety-learning-assistant.lovable.app",
  },
];

function QuickStatTile({
  to,
  number,
  label,
  icon,
}: {
  to: string;
  number: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-1 items-center gap-4 rounded-xl px-6 py-4 transition-spring duration-500 hover:bg-white/[0.04]"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-primary transition-spring duration-500 group-hover:border-primary/40 group-hover:bg-primary/[0.08]">
        {icon}
      </div>
      <div>
        <div className="font-display text-xl leading-none font-bold tracking-tight text-white">
          {number}
        </div>
        <div className="mt-1 text-xs font-medium text-white/60">{label}</div>
      </div>
    </Link>
  );
}

function ProjectShowcase({ onDetail }: { onDetail: (slug: string) => void }) {
  const [activeSlug, setActiveSlug] = React.useState(vibeItems[0].slug);
  const imgRef = useReveal<HTMLDivElement>();
  const active = getProject(activeSlug) ?? getProject(vibeItems[0].slug)!;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      <div ref={imgRef} className="reveal lg:col-span-5">
        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.185_0_0)]">
          <img
            src={projectShowcaseImage}
            alt={active.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-spring duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
            {active.type}
          </span>
        </div>
      </div>

      <ProjectPanel key={activeSlug} active={active} activeSlug={activeSlug} onDetail={onDetail} />

      <div className="lg:col-span-3">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {vibeItems.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveSlug(item.slug)}
                className={
                  "group flex shrink-0 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-spring duration-500 lg:whitespace-normal " +
                  (isActive
                    ? "border-primary/50 bg-primary/[0.08] text-foreground"
                    : "border-white/10 bg-transparent text-muted-foreground hover:border-white/20 hover:text-foreground")
                }
              >
                {item.title}
                <ChevronRight
                  className={
                    "h-4 w-4 shrink-0 transition-spring duration-500 " +
                    (isActive ? "translate-x-0.5 text-primary" : "text-muted-foreground/50")
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProjectPanel({
  active,
  activeSlug,
  onDetail,
}: {
  active: Project;
  activeSlug: string;
  onDetail: (slug: string) => void;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal lg:col-span-4">
      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
        {active.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.longDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {active.features.slice(0, 4).map((f) => (
          <span
            key={f}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-foreground/80"
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {active.link && (
          <a
            href={active.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-spring duration-500 hover:scale-[1.02] active:scale-[0.98]"
          >
            바로 사용하기
            <ArrowRight className="h-4 w-4 transition-spring duration-500 group-hover:translate-x-0.5" />
          </a>
        )}
        <button
          type="button"
          onClick={() => onDetail(activeSlug)}
          className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          상세보기
        </button>
      </div>
    </div>
  );
}

const workflowSteps = [
  {
    number: "01",
    title: "위험 감지",
    description: "현장 사진과 센서 데이터를 실시간으로 수집하여 잠재적 위험 요소를 포착합니다.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "AI 분석",
    description: "수집된 데이터를 AI 모델로 분석하여 위험 등급과 사고 가능성을 산정합니다.",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "대응 검토",
    description: "법령과 사고 사례를 기반으로 한 최적의 안전 대응 방안을 제시합니다.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "현장 조치",
    description: "결과를 현장에 전달하고 조치 완료 여부를 확인하며 사후 관리를 지원합니다.",
    icon: <CheckCircle className="h-5 w-5" />,
  },
];

function FeaturedInsightCard({ i }: { i: Insight }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal group">
      <Link to="/insights/$slug" params={{ slug: i.slug }} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[oklch(0.185_0_0)]">
          <img
            src={i.image}
            alt={i.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-spring duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        <span className="mt-5 block text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
          {i.category}
        </span>
        <h3 className="font-display mt-2 text-xl leading-snug font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
          {i.title}
        </h3>
        <p className="mt-2 text-xs text-muted-foreground">
          {i.date} <span className="px-1 opacity-40">·</span> {i.readTime}
        </p>
      </Link>
    </div>
  );
}

function InsightCard({ i, idx = 0 }: { i: Insight; idx?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal group" style={{ transitionDelay: `${idx * 90}ms` }}>
      <Link to="/insights/$slug" params={{ slug: i.slug }} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[oklch(0.185_0_0)]">
          <img
            src={i.image}
            alt={i.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-spring duration-700 group-hover:scale-105"
          />
        </div>
        <span className="mt-3 block text-[10px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
          {i.category}
        </span>
        <h4 className="font-display mt-1.5 line-clamp-2 text-sm leading-snug font-semibold text-foreground transition-colors group-hover:text-primary">
          {i.title}
        </h4>
      </Link>
    </div>
  );
}

function AmbientOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
    >
      <div className="orb-float absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/[0.14] blur-[100px]" />
      <div className="orb-float-slow absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/[0.05] blur-[110px]" />
    </div>
  );
}

function RevealSection({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </section>
  );
}
