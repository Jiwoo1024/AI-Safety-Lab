export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export const insights: Insight[] = [
  {
    slug: "why-hazop-takes-long",
    title: "HAZOP 분석은 왜 시간이 오래 걸릴까?",
    excerpt:
      "노드 분할, 편차 정의, 팀 협의 등 HAZOP이 오래 걸리는 구조적 이유와 AI로 단축 가능한 지점을 정리합니다.",
    category: "HAZOP",
    readTime: "6분",
  },
  {
    slug: "photo-risk-assessment",
    title: "사진 기반 위험성평가의 가능성과 한계",
    excerpt:
      "Vision 모델이 현장 위험을 식별하는 방식과, 사람의 판단이 여전히 필요한 상황을 사례로 살펴봅니다.",
    category: "Risk Assessment",
    readTime: "5분",
  },
  {
    slug: "ai-cannot-replace-safety-manager",
    title: "AI가 안전관리자를 대체할 수 없는 이유",
    excerpt: "AI가 잘 하는 것과 못 하는 것, 그리고 안전관리자의 역할이 어떻게 재정의되는지 논의합니다.",
    category: "Perspective",
    readTime: "4분",
  },
  {
    slug: "osha-vs-kosha-guide",
    title: "산업안전보건법과 KOSHA Guide의 차이",
    excerpt: "법적 강제력과 기술 가이드의 관계를 정리하고, 실무에서 어떻게 활용해야 하는지 설명합니다.",
    category: "법령",
    readTime: "7분",
  },
  {
    slug: "field-hazard-observation",
    title: "현장 위험요인을 놓치지 않는 관찰 방법",
    excerpt:
      "숙련된 안전관리자가 사용하는 체계적인 관찰 프레임과 놓치기 쉬운 위험요인 체크리스트를 공유합니다.",
    category: "현장",
    readTime: "5분",
  },
];
