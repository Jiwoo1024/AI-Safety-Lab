import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";


const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "AI Tools" },
  { to: "/vibe-coding-safety-apps", label: "Vibe Coding Apps" },
  { to: "/insights", label: "Safety Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { state } = useRouter();
  const pathname = state.location.pathname;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="AI Safety Lab"
              className="h-10 w-auto mix-blend-screen"
            />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => {
              const isActive = n.to === pathname;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "relative py-5 text-sm transition-colors hover:text-foreground " +
                    (isActive
                      ? "text-foreground font-medium after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary after:content-['']"
                      : "text-foreground/70")
                  }
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block md:w-24" />


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
              <img
                src={logoAsset.url}
                alt="AI Safety Lab"
                className="h-10 w-auto"
              />
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
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-5 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="AI Safety Lab"
            className="h-10 w-auto mix-blend-screen"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">

          <span>© {new Date().getFullYear()} AI Safety Lab. All rights reserved.</span>
          <span className="opacity-40">|</span>
          <Link to="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <span className="opacity-40">|</span>
          <Link to="/terms" className="transition-colors hover:text-foreground">Terms of Use</Link>
        </div>
        <div className="hidden md:block md:w-[150px]" />

      </div>
    </footer>
  );
}
