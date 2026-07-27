import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const title = loaderData?.project
      ? `${loaderData.project.title} — AI Safety Lab`
      : "Project — AI Safety Lab";
    const description = loaderData?.project?.description ?? "AI 기반 산업안전 프로젝트";
    const url = `https://ai-safety-craft.lovable.app/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
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
            "@type": "SoftwareApplication",
            name: loaderData?.project?.title ?? "AI Safety Lab Project",
            description,
            url,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          }),
        },
      ],
    };
  },

  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="container-page py-32 text-center">
        <h1 className="text-3xl font-semibold text-foreground">프로젝트를 찾을 수 없습니다</h1>
        <Link to="/projects" className="mt-6 inline-block text-primary underline">
          ← Projects로 돌아가기
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <article className="container-page py-16 md:py-24">
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
          ← Projects
        </Link>

        <header className="mt-6 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {project.type}
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
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
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {h.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-foreground">{h.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/90">
              {project.longDescription}
            </p>

            <h2 className="mt-12 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Key Features
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tags
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  #{t}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              {project.link ? (
                <>
                  <p className="text-sm text-muted-foreground">
                    배포된 앱에서 직접 기능을 확인해볼 수 있습니다.
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    앱 사용해보기 →
                  </a>
                </>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">
                    Live 데모는 준비 중입니다. 문의는 아래 버튼을 눌러 남겨주세요.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    문의하기
                  </Link>
                </>
              )}
            </div>
          </aside>
        </div>

        <section className="mt-24 border-t border-border pt-14">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Other Projects
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex items-start justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.type}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-foreground">{p.title}</div>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <SiteFooter />
    </div>
  );
}
