import type { Project } from "@/data/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
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
      </header>

      {project.highlights && (
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
