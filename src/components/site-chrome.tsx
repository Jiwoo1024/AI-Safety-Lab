import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "AI 자동화 Tools" },
  { to: "/vibe-coding-safety-apps", label: "Vibe Coding_Safety Apps" },
  { to: "/insights", label: "Safety Insights" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--navy)]/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--sky-soft)] text-[10px] font-bold tracking-tight text-[var(--navy)]">
            AI
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            AI Safety Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full bg-[var(--sky-soft)] px-4 py-2 text-sm font-medium text-[var(--navy)] transition-all hover:bg-white md:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--sky-soft)] text-[10px] font-bold text-[var(--navy)]">
              AI
            </span>
            <span className="text-[15px] font-semibold text-foreground">AI Safety Lab</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            AI를 산업안전 실무에 적용하는 프로젝트와 인사이트를 정리하는 개인 포트폴리오입니다.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about" className="text-foreground/80 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Focus
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>HAZOP · 위험성평가</li>
            <li>공정안전(PSM) · 화학안전</li>
            <li>현장 안전관리 · 교육</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Safety Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
