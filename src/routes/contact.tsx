import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { AmbientOrbs } from "@/components/ambient-orbs";
import { RevealSection } from "@/components/reveal-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI Safety Lab" },
      {
        name: "description",
        content:
          "AI 기반 산업안전 도구 협업, 리서치 파트너십, 현장 실무 적용 문의를 남겨주세요. HAZOP·위험성평가·안전교육 관련 제안을 환영합니다.",
      },
      { property: "og:title", content: "Contact — AI Safety Lab" },
      {
        property: "og:description",
        content: "AI Safety Lab에 협업·리서치·실무 적용 문의를 남기는 방법",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ai-safety-craft.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-craft.lovable.app/contact" }],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <AmbientOrbs />
        <div className="container-page relative py-20 md:py-28">
          <RevealSection>
            <div className="grid gap-14 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Contact
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
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
                    <a
                      href="mailto:song708901@gmail.com"
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      song708901@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      Location
                    </span>
                    <span className="text-foreground">Republic of Korea</span>
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
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                      placeholder="홍길동"
                    />
                  </Field>
                  <Field label="이메일">
                    <input
                      type="email"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="메시지">
                    <textarea
                      rows={5}
                      className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                      placeholder="문의 내용을 작성해주세요."
                    />
                  </Field>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                  >
                    메시지 보내기
                  </button>
                  <p className="text-xs text-muted-foreground">
                    * 현재는 UI만 구현되어 있으며 실제 전송은 되지 않습니다.
                  </p>
                </div>
              </form>
            </div>
          </RevealSection>
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
