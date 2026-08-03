import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "개인정보처리방침 — AI Safety Lab" },
      {
        name: "description",
        content:
          "AI Safety Lab이 수집하는 정보, 이용 목적, 보관 기간, 문의 방법을 안내하는 개인정보처리방침입니다.",
      },
      { property: "og:title", content: "개인정보처리방침 — AI Safety Lab" },
      {
        property: "og:description",
        content: "AI Safety Lab의 개인정보 수집·이용·보관 정책 안내",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ai-safety-lab.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-page py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Privacy Policy
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">최종 개정일: 2026년 8월 3일</p>

        <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/85">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. 수집하는 정보</h2>
            <p className="mt-2">
              AI Safety Lab(이하 “사이트”)은 별도의 회원가입 절차 없이 이용할 수 있으며, 이용자의
              개인정보를 자동으로 수집하지 않습니다. 다만 Contact 페이지를 통해 문의를 보내는
              경우 이용자가 직접 입력한 이름, 이메일 주소, 문의 내용이 전달됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. 이용 목적</h2>
            <p className="mt-2">
              수집된 정보는 문의 답변, 협업·리서치 논의 등 이용자가 요청한 목적에 한해서만
              사용하며, 마케팅 목적으로 활용하거나 제3자에게 판매·제공하지 않습니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. 보관 및 파기</h2>
            <p className="mt-2">
              문의 내용은 답변 완료 후 최대 1년간 보관하며, 이후 지체 없이 파기합니다. 이용자가
              삭제를 요청하는 경우 즉시 파기합니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. 외부 서비스 링크</h2>
            <p className="mt-2">
              사이트에 소개된 각 프로젝트 앱과 커스텀 GPT는 별도의 외부 서비스에서 운영됩니다.
              해당 서비스에서의 정보 처리는 각 서비스 제공자의 정책을 따릅니다.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. 문의</h2>
            <p className="mt-2">
              개인정보 관련 문의는{" "}
              <a
                href="mailto:song708901@gmail.com"
                className="text-primary hover:underline"
              >
                song708901@gmail.com
              </a>
              으로 연락해 주세요.
            </p>
          </section>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
