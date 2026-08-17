import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";


import { insights } from "@/data/insights";
import { getProject } from "@/data/projects";
import { ProjectDetailContent } from "@/components/project-detail-content";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Scale, Camera, HelpCircle, BookOpen, ArrowRight, TrendingUp, FileText, Brain, ShieldCheck, CheckCircle, Search, X } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { useReveal } from "@/hooks/use-reveal";

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
        content: "HAZOP, 위험성평가, 법령 검토, 안전교육을 지원하는 AI 산업안전 도구와 인사이트 모음",
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


      {/* HERO — full-width bleed */}
      <section className="relative isolate overflow-hidden">
        <HeroAnimation />

        {/* 좌→우 다크 그라데이션 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.02_20/0.98)] from-[8%] via-[oklch(0.08_0.02_20/0.55)] via-[38%] to-transparent to-[62%]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_20/0.45)] via-transparent to-transparent" />

        <div className="container-page relative z-10 grid min-h-[380px] items-center gap-8 py-12 md:min-h-[440px] md:grid-cols-[1fr_1.15fr] md:py-16">
          {/* 좌측 카피 */}
          <div className="max-w-xl">
            
            <h1 className="font-display text-[2.1rem] font-bold leading-[1.14] tracking-[-0.03em] text-white md:text-[3rem]">
              AI로 산업안전 실무를
              <br />
              더 빠르고 정확하게
            </h1>

            <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-white/70">
              AI Safety Lab은 산업현장의 위험을 예측하고, 분석하며, 안전한 의사결정을 지원하는 AI 기반 솔루션을 개발합니다.
            </p>

            <div className="mt-7">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
              >
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>



          {/* 우측 이미지 공간 + 떠 있는 통계 카드 */}
          <div className="relative h-full min-h-[inherit] md:block">
            <div className="flex flex-wrap items-end gap-3 md:absolute md:bottom-[14%] md:left-0 md:flex-nowrap">
              <StatCard number="04" label="Active Projects" icon={<TrendingUp className="h-3.5 w-3.5" />} size="lg" />
              <StatCard number="05+" label="Insight Articles" icon={<FileText className="h-3.5 w-3.5" />} />
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[oklch(0.145_0_0)]">
        {/* SAFETY WORKFLOW — hidden for now */}
        {/* <WorkflowSection /> */}

        {/* KEY PROJECTS STRIP */}
        <section className="border-y border-border/60 bg-[oklch(0.145_0_0)]">
          <div className="container-page py-10 md:py-14">
            <RevealSection>
          <div className="mb-6">
            <h2 className="font-display relative inline-block pb-2.5 text-xl font-bold tracking-tight text-white md:text-2xl">
              Key Projects
              <span className="absolute bottom-0 left-0 h-0.5 w-10 rounded-full bg-primary" />
            </h2>
          </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {vibeItems.map((item, idx) => (
                  <VibeCard key={item.slug} item={item} idx={idx} onDetail={openDetail} />
                ))}
              </div>
            </RevealSection>
          </div>
        </section>


        {/* INSIGHTS PREVIEW */}
        <div className="container-page py-12 md:py-16">
          <RevealSection>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display relative pb-2.5 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Safety Insights
                <span className="absolute bottom-0 left-0 h-0.5 w-14 rounded-full bg-primary" />
              </h2>
              <Link
                to="/insights"
                className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:inline-flex"
              >
                View All Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {insights.slice(0, 3).map((i, idx) => (
                <InsightCard key={i.slug} i={i} idx={idx} />
              ))}
            </div>
          </RevealSection>
        </div>
      </main>

      <SiteFooter />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto border-white/10 bg-[oklch(0.165_0.02_265)] text-foreground">
          {selectedProject ? (
            <>
              <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
              <DialogDescription className="sr-only">{selectedProject.description}</DialogDescription>
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
    description: "현장 사진을 업로드하면 위험요인을 식별하고 위험성 등급과 개선조치를 제안하는 Vibe Coding 프로토타입.",
    icon: <Camera className="h-5 w-5" />,
    href: "https://ai-photo-risk-assessment.lovable.app",
    highlight: true,
  },
  {
    slug: "ai-hazop-assistant",
    title: "AI HAZOP Assistant",
    description: "HAZOP 분석을 지원하여 위험요소 식별과 권고사항 도출을 더 빠르게.",
    icon: <Scale className="h-5 w-5" />,
    href: "https://ai-hazop-assistant.lovable.app/",
  },
  {
    slug: "incident-rca-assistant",
    title: "Incident RCA Assistant",
    description: "사고 근본원인을 5 Why·Fishbone으로 구조화하고 재발방지대책까지 도출합니다.",
    icon: <Brain className="h-5 w-5" />,
    href: "https://ai-incident-rca-assistant.lovable.app",
  },
  {
    slug: "safety-learning-assistant",
    title: "Safety Learning Assistant",
    description: "산업안전 학습과 퀴즈로 현장 실무자의 이해도와 안전의식을 높여줍니다.",
    icon: <HelpCircle className="h-5 w-5" />,
    href: "https://ai-safety-learning-assistant.lovable.app",
  },
];

function VibeCard({
  item,
  idx,
  onDetail,
}: {
  item: (typeof vibeItems)[number];
  idx: number;
  onDetail: (slug: string) => void;
}) {
  const ref = useReveal<HTMLDivElement>();
  const href = "href" in item ? item.href : undefined;
  const isComingSoon = !href;
  const card = (
    <StripCard
      icon={item.icon}
      title={item.title}
      description={item.description}
      badge={isComingSoon ? "Coming soon" : undefined}
      highlight={"highlight" in item ? item.highlight : false}
      hasApp={!isComingSoon}
      onDetail={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onDetail(item.slug);
      }}
    />
  );

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${idx * 90}ms` }}>
      {isComingSoon ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => onDetail(item.slug)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onDetail(item.slug);
            }
          }}
          className="block h-full cursor-pointer text-left"
        >
          {card}
        </div>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {card}
        </a>
      )}
    </div>
  );
}


function StripCard({
  icon,
  title,
  description,
  badge,
  highlight = false,
  hasApp = false,
  onDetail,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  hasApp?: boolean;
  onDetail?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div
      className={
        "group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.215_0_0)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_32px_-16px_oklch(0.55_0.23_29/0.55)] " +
        (highlight
          ? "border-white/[0.12] bg-[oklch(0.205_0_0)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)]"
          : "border-white/[0.09] bg-[oklch(0.185_0_0)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)]")
      }
    >

      {/* hover sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-foreground/75 transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/[0.08] group-hover:text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          {badge && (
            <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {hasApp && (
            <span
              className={
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors " +
                (highlight
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/15 bg-white/[0.04] text-foreground/80 group-hover:border-primary/50 group-hover:text-primary")
              }
            >
              바로 사용하기 →
            </span>
          )}
          <button
            type="button"
            onClick={onDetail}
            className="inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            상세보기
          </button>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
    </div>
  );
}



function StatCard({
  number,
  label,
  icon,
  size = "md",
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
  size?: "md" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <div
      className={`rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_8px_28px_-14px_rgba(0,0,0,0.5)] backdrop-blur-md ${
        isLg ? "min-w-[140px] p-3.5" : "min-w-[124px] p-3"
      }`}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div
          className={`font-display font-bold leading-none tracking-tight text-white ${isLg ? "text-[2rem]" : "text-[1.75rem]"}`}
        >
          {number}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
      <div className={`mt-2 font-medium text-white/75 ${isLg ? "text-xs" : "text-[11px]"}`}>{label}</div>
      <div className="mt-2 h-[2px] w-8 rounded-full bg-primary" />
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

function WorkflowSection() {
  const [activeStep, setActiveStep] = React.useState<string | null>(null);
  const sectionRef = useReveal<HTMLElement>();

  React.useEffect(() => {
    if (activeStep) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeStep]);

  return (
    <>
      <section ref={sectionRef} className="reveal container-page py-4">
        <div className="mb-4 text-center">
          <h2 className="font-display relative inline-block pb-2 text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Safety Workflow
            <span className="absolute bottom-0 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-full bg-primary" />
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            AI가 현장 위험을 탐지부터 조치까지 연결하는 4단계 프로세스
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-4">
          {/* desktop connecting line */}
          <div className="pointer-events-none absolute top-8 left-0 right-0 hidden h-px md:block bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {workflowSteps.map((step, idx) => (
            <div key={step.number} className="reveal relative pt-7" style={{ transitionDelay: `${idx * 100}ms` }}>
              {/* step number badge */}
              <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-[oklch(0.145_0_0)] text-[10px] font-bold text-primary shadow-[0_0_12px_-3px_oklch(0.55_0.23_29/0.5)]">
                  {step.number}
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveStep(step.number)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveStep(step.number);
                  }
                }}
                className="group relative flex h-full cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-3.5 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.215_0_0)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_32px_-16px_oklch(0.55_0.23_29/0.55)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/[0.07] text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary/70 group-hover:shadow-[0_0_18px_-4px_oklch(0.55_0.23_29/0.7)]">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-display text-[13px] font-semibold text-foreground transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {activeStep && (
        <WorkflowModal
          step={workflowSteps.find((s) => s.number === activeStep)!}
          onClose={() => setActiveStep(null)}
        />
      )}
    </>
  );
}

function WorkflowModal({ step, onClose }: { step: (typeof workflowSteps)[number]; onClose: () => void }) {
  React.useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.145_0_0)] shadow-[0_0_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-white/[0.09] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-lg border border-primary/40 bg-primary/[0.07] text-primary">
              {step.icon}
            </div>
            <div>
              <span className="text-[10px] font-bold text-primary">STEP {step.number}</span>
              <h3 className="font-display text-base font-semibold text-foreground">{step.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-6">
          {step.number === "01" && <DetectionDemo />}
          {step.number === "02" && <AnalysisDemo />}
          {step.number === "03" && <ComplianceDemo />}
          {step.number === "04" && <ActionDemo />}
        </div>
      </div>
    </div>
  );
}

function DetectionDemo() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-dashed border-white/[0.15] bg-[oklch(0.10_0_0)] p-6 text-center">
        <Camera className="mx-auto h-8 w-8 text-primary/70" />
        <p className="mt-2 text-sm font-medium text-foreground">현장 사진 업로드</p>
        <p className="text-xs text-muted-foreground">드래그하거나 클릭하여 사진을 추가하세요</p>
      </div>
      <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">탐지 위치</span>
          <span className="text-xs text-foreground">반도체 팹 2층 가스 배관실</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {["가스 누출", "배관", "밸브"].map((tag) => (
            <span key={tag} className="rounded-full border border-primary/30 bg-primary/[0.07] px-2 py-1 text-[10px] font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">탐지 신뢰도</span>
            <span className="font-semibold text-primary">94%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[94%] rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalysisDemo() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-3 text-center">
          <div className="text-[10px] text-muted-foreground">위험 등급</div>
          <div className="mt-1 font-display text-lg font-bold text-primary">High</div>
        </div>
        <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-3 text-center">
          <div className="text-[10px] text-muted-foreground">사고 가능성</div>
          <div className="mt-1 font-display text-lg font-bold text-foreground">82%</div>
        </div>
        <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-3 text-center">
          <div className="text-[10px] text-muted-foreground">권고 시간</div>
          <div className="mt-1 font-display text-lg font-bold text-foreground">즉시</div>
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <h4 className="text-sm font-semibold text-foreground">예상 원인</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          가스 밸브 패킹 마모로 인한 누출. 주변 환기량 부족으로 가스 농도 상승 가능.
        </p>
        <h4 className="mt-4 text-sm font-semibold text-foreground">권장 조치</h4>
        <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>밸브 잠금 및 인터록 장치 작동
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>현장 인력 대피 및 통풍 시스템 가동
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>유지보수 팀 긴급 출동 요청
          </li>
        </ul>
      </div>
    </div>
  );
}

function ComplianceDemo() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <h4 className="text-sm font-semibold text-foreground">관련 법령 조항</h4>
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg bg-[oklch(0.10_0_0)] p-3">
            <div className="text-xs font-semibold text-foreground">산업안전보건기준에 관한 규칙</div>
            <div className="text-[10px] text-muted-foreground">제 423조 (가스 누출 감지 및 경보 장치)</div>
          </div>
          <div className="rounded-lg bg-[oklch(0.10_0_0)] p-3">
            <div className="text-xs font-semibold text-foreground">화재예방, 소방시설 설치·유지 및 안전관리에 관한 법률</div>
            <div className="text-[10px] text-muted-foreground">제 10조 (위험물시설의 안전관리)</div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <h4 className="text-sm font-semibold text-foreground">유사 사고 사례</h4>
        <div className="mt-3 space-y-2">
          {[
            { title: "2022년 A사 가스 누출 사고", desc: "밸브 패킹 교체 지연으로 누출 발생, 2시간 후 인터록 작동" },
            { title: "2021년 B사 반도체 팹 환기실패", desc: "환기 시스템 정지로 가스 농도 상승, 경보 후 대피" },
          ].map((c) => (
            <div key={c.title} className="rounded-lg bg-[oklch(0.10_0_0)] p-3">
              <div className="text-xs font-semibold text-foreground">{c.title}</div>
              <div className="text-[10px] text-muted-foreground">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionDemo() {
  const [checked, setChecked] = React.useState([true, true, false, false]);
  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <h4 className="text-sm font-semibold text-foreground">현장 조치 체크리스트</h4>
        <div className="mt-3 space-y-2">
          {["밸브 잠금 및 인터록 작동 확인", "작업자 대피 및 구역 통제", "통풍 시스템 가동 및 가스 농도 측정", "유지보수 완료 후 복구 확인"].map((item, i) => (
            <button
              key={item}
              onClick={() => toggle(i)}
              className="flex w-full items-center gap-3 rounded-lg bg-[oklch(0.10_0_0)] p-3 text-left transition-colors hover:bg-[oklch(0.12_0_0)]"
            >
              <div
                className={`grid h-4 w-4 place-items-center rounded border ${checked[i] ? "border-primary bg-primary text-primary-foreground" : "border-white/20 bg-transparent"}`}
              >
                {checked[i] && <CheckCircle className="h-3 w-3" />}
              </div>
              <span className={`text-xs ${checked[i] ? "text-foreground line-through opacity-60" : "text-foreground"}`}>{item}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4">
        <div>
          <div className="text-xs font-semibold text-foreground">조치 진행률</div>
          <div className="text-[10px] text-muted-foreground">
            {checked.filter(Boolean).length} / {checked.length} 항목 완료
          </div>
        </div>
        <div className="text-lg font-bold text-primary">{Math.round((checked.filter(Boolean).length / checked.length) * 100)}%</div>
      </div>
    </div>
  );
}

function InsightCard({ i, idx = 0 }: { i: (typeof insights)[number]; idx?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${idx * 90}ms` }}>
      <Link to="/insights/$slug" params={{ slug: i.slug }} className="group block h-full">
        <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-[oklch(0.185_0_0)] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_-6px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-[oklch(0.215_0_0)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_14px_32px_-16px_oklch(0.55_0.23_29/0.55)] md:flex-row">
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg md:aspect-auto md:h-[64px] md:w-[88px] md:self-center">
            <img
              src={i.image}
              alt={i.title}
              loading="lazy"
              width={400}
              height={240}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between py-1 pr-1">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{i.category}</span>
              <h4 className="font-display mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                {i.title}
              </h4>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{i.excerpt}</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
              <span>
                {i.date} <span className="px-1.5 opacity-40">|</span> {i.readTime}
              </span>

              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                읽기 →
              </span>
            </div>
          </div>
        </article>
      </Link>
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
