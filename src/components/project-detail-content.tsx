import type { Project } from "@/data/projects";
import { Upload, ScanSearch, Scale, FileText, ChevronRight } from "lucide-react";
import sampleResult from "@/assets/photo-risk-sample.jpg";

const photoRiskSteps = [
  { icon: Upload, label: "사진 업로드" },
  { icon: ScanSearch, label: "AI 위험요인 탐지" },
  { icon: Scale, label: "위험도·법령 매칭" },
  { icon: FileText, label: "개선조치·리포트" },
];

const SAMPLE_URL = "https://ai-photo-risk-assessment.lovable.app";

export function ProjectDetailContent({ project }: { project: Project }) {
  const isPhotoRisk = project.slug === "ai-photo-risk-assessment";
  return (
    <div>
      <header className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {project.type}
        </span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        {!isPhotoRisk && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </header>

      {isPhotoRisk ? (
        <ol className="mt-6 flex flex-wrap items-stretch gap-2">
          {photoRiskSteps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-2">
              <div className="flex min-w-[7.5rem] flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-medium text-foreground/90">
                  {i + 1}. {step.label}
                </span>
              </div>
              {i < photoRiskSteps.length - 1 && (
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      ) : (
        project.highlights && (
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {project.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-card p-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {h.label}
                </div>
                <div className="mt-1.5 text-base font-semibold text-foreground">{h.value}</div>
              </div>
            ))}
          </div>
        )
      )}

      <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Overview
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{project.longDescription}</p>




      <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Key Features
      </h3>
      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
        {project.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 rounded-xl border border-border bg-card p-3 text-sm"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      {isPhotoRisk && (
        <div className="mt-8">
          <p className="text-xs font-medium text-muted-foreground">실제 결과 화면 보기</p>
          <a
            href={SAMPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 block max-w-md overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary"
          >
            <img
              src={sampleResult}
              alt="AI Photo Risk Assessment 결과 화면 예시 - 위험도 카드와 현장 사진"
              loading="lazy"
              width={1024}
              height={640}
              className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>
          <p className="mt-2 text-[11px] text-muted-foreground">
            클릭하면 로그인 없이 샘플 결과 화면을 볼 수 있습니다.
          </p>
        </div>
      )}



      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          앱 사용해보기 →
        </a>
      )}
    </div>
  );
}
