import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "이용약관 — AI Safety Lab" },
      {
        name: "description",
        content:
          "AI Safety Lab 사이트와 소개된 AI 안전 도구 이용 시 적용되는 조건, 책임 범위, 저작권 안내입니다.",
      },
      { property: "og:title", content: "이용약관 — AI Safety Lab" },
      {
        property: "og:description",
        content: "AI Safety Lab 이용 조건과 책임 범위 안내",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-lab.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Terms of Use
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          이용약관
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">최종 개정일: 2026년 8월 3일</p>

        <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. 목적</h2>
            <p className="mt-2">
              본 약관은 AI Safety Lab(이하 “사이트”)이 제공하는 콘텐츠와 소개 도구의 이용 조건을
              정합니다. 사이트를 이용하는 경우 본 약관에 동의한 것으로 봅니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. 서비스 성격</h2>
            <p className="mt-2">
              사이트에 소개된 AI 도구와 인사이트는 산업안전 실무를 보조하기 위한 참고 자료이며,
              법률 자문이나 공식 안전진단을 대체하지 않습니다. 최종적인 위험성평가와 안전조치
              결정은 반드시 자격을 갖춘 담당자의 검토를 거쳐야 합니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. 책임의 제한</h2>
            <p className="mt-2">
              AI 분석 결과에는 오류나 누락이 있을 수 있습니다. 사이트 운영자는 콘텐츠 및 도구
              이용으로 발생한 직간접적 손해에 대해 책임을 지지 않습니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. 저작권</h2>
            <p className="mt-2">
              사이트에 게시된 글, 이미지, 디자인의 저작권은 운영자에게 있습니다. 출처를 밝힌
              비상업적 인용은 허용되며, 무단 복제·재배포는 금지됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. 약관 변경</h2>
            <p className="mt-2">
              본 약관은 사전 고지 없이 변경될 수 있으며, 변경된 내용은 사이트 게시 시점부터
              적용됩니다. 문의는{" "}
              <a href="mailto:song708901@gmail.com" className="text-primary hover:underline">
                song708901@gmail.com
              </a>
              으로 보내주세요.
            </p>
          </section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
