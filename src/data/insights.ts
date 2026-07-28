export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

export const insights: Insight[] = [
  {
    slug: "why-hazop-takes-long",
    title: "AI 기반 공정 위험성 평가의 최신 동향",
    excerpt:
      "AI와 데이터 기반 분석을 통해 공정 위험을 더 정확하고 효율적으로 평가하는 방법을 정리합니다.",
    category: "PROCESS SAFETY",
    readTime: "6 min read",
    image: "/insight-hazop.jpg",
  },
  {
    slug: "photo-risk-assessment",
    title: "사진 한 장이 사고를 막는다: AI 위험성 평가 활용법",
    excerpt:
      "현장 사진 분석을 통해 숨겨진 위험을 발견하고 선제적으로 대응하는 방법",
    category: "WORKPLACE SAFETY",
    readTime: "5 min read",
    image: "/insight-photo-risk.jpg",
  },
  {
    slug: "ai-cannot-replace-safety-manager",
    title: "반도체 산업의 안전관리, AI가 바꾸는 미래",
    excerpt: "AI와 자동화 기술이 반도체 산업의 안전관리 패러다임을 어떻게 혁신하는가",
    category: "TECHNOLOGY INSIGHT",
    readTime: "7 min read",
    image: "/insight-ai-manager.jpg",
  },
  {
    slug: "osha-vs-kosha-guide",
    title: "산업안전보건법과 KOSHA Guide의 차이",
    excerpt: "법적 강제력과 기술 가이드의 관계를 정리하고, 실무에서 어떻게 활용해야 하는지 설명합니다.",
    category: "법령",
    readTime: "7 min read",
    image: "/insight-hazop.jpg",
  },
  {
    slug: "field-hazard-observation",
    title: "현장 위험요인을 놓치지 않는 관찰 방법",
    excerpt:
      "숙련된 안전관리자가 사용하는 체계적인 관찰 프레임과 놓치기 쉬운 위험요인 체크리스트를 공유합니다.",
    category: "현장",
    readTime: "5 min read",
    image: "/insight-photo-risk.jpg",
  },
];
