import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "AI 자동화 Tools" },
  { to: "/vibe-coding-safety-apps", label: "Vibe Coding_Safety Apps" },
  { to: "/insights", label: "Safety Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[10px] font-bold tracking-tight text-primary-foreground">
              AI
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              AI Safety Lab
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 md:inline-flex"
          >
            Get in touch
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background p-6 md:hidden">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
                AI
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">AI Safety Lab</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-foreground/90 transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
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
