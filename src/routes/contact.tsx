import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI Safety Lab" },
      { name: "description", content: "협업, 리서치, 실무 적용 문의를 남겨주세요." },
      { property: "og:title", content: "Contact — AI Safety Lab" },
      { property: "og:description", content: "AI Safety Lab에 문의하기" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--navy)] md:text-5xl">
              함께 이야기해요
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              프로젝트 협업, 리서치 파트너십, 실무 적용 문의 모두 환영합니다. 편하게 메시지를
              남겨주세요.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <span className="text-[var(--navy)]">hello@aisafetylab.example</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
                <span className="text-[var(--navy)]">Republic of Korea</span>
              </li>
            </ul>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5">
              <Field label="이름">
                <input
                  type="text"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--navy)]"
                  placeholder="홍길동"
                />
              </Field>
              <Field label="이메일">
                <input
                  type="email"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--navy)]"
                  placeholder="you@company.com"
                />
              </Field>
              <Field label="메시지">
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--navy)]"
                  placeholder="문의 내용을 작성해주세요."
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                메시지 보내기
              </button>
              <p className="text-xs text-muted-foreground">
                * 현재는 UI만 구현되어 있으며 실제 전송은 되지 않습니다.
              </p>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
