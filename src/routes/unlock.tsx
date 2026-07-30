import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { unlockSite } from "@/lib/gate.functions";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/unlock")({
  head: () => ({
    meta: [
      { title: "Enter Password — AI Safety Lab" },
      { name: "description", content: "비공개 포트폴리오입니다. 접속 비밀번호를 입력해 주세요." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Enter Password — AI Safety Lab" },
      { property: "og:description", content: "비공개 포트폴리오 접속 페이지" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UnlockPage,
});

function UnlockPage() {
  const unlock = useServerFn(unlockSite);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    try {
      const res = await unlock({ data: { password } });
      if (res.ok) {
        window.location.assign("/");
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Lock className="h-5 w-5" aria-hidden />
        </div>
        <h1 className="font-display mt-5 text-xl font-semibold tracking-tight text-foreground">
          비공개 포트폴리오
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          접속하려면 비밀번호를 입력해 주세요.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            aria-label="비밀번호"
            placeholder="비밀번호"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {error && <p className="text-sm text-destructive">비밀번호가 올바르지 않습니다.</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "확인 중…" : "입장하기"}
          </button>
        </form>
      </div>
    </main>
  );
}
