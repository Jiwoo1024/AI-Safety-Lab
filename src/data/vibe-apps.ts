export type VibeApp = {
  id: string;
  type: string;
  title: string;
  description: string;
  features: string[];
  // 배포 URL이 준비되면 여기에 넣으세요. 비어있으면 "링크 준비 중"으로 표시됩니다.
  url?: string;
};

// Vibe Coding으로 만든 Lovable 앱 목록.
// URL이 준비되면 url 필드만 채우면 카드 버튼이 자동으로 활성화됩니다.
export const vibeApps: VibeApp[] = [
  {
    id: "photo-risk-assessment",
    type: "Vision AI",
    title: "Photo Risk Assessment",
    description:
      "현장 사진을 업로드하면 위험요인을 식별하고 위험성 등급과 개선조치를 제안하는 Vibe Coding 프로토타입.",
    features: ["Vision 분석", "위험성 매트릭스", "개선조치 제안"],
    url: "https://ai-photo-risk-assessment.lovable.app", // Photo Risk Assessment 배포 URL
  },
  {
    id: "accident-cases",
    type: "Knowledge App",
    title: "사고사례 아카이브",
    description:
      "국내외 산업재해 사고사례를 카테고리별로 탐색하고, 원인·대책·관련 법령을 실무 관점으로 정리한 앱.",
    features: ["사고사례 검색", "원인 분석", "재발방지 대책"],
    url: "", // TODO: Lovable 배포 URL 붙여넣기
  },
];
