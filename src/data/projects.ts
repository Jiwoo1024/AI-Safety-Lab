export type Project = {
  slug: string;
  type: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  link?: string;
  highlights?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "ai-hazop-assistant",
    type: "AI Analysis Tool",
    title: "AI HAZOP Assistant",
    description:
      "HAZOP 분석을 시가 지정하여 위험요소 식별과 권고를 더 빠르게",
    longDescription:
      "공정 노드와 편차(Deviation)를 입력하면 LLM이 원인(Cause), 결과(Consequence), 기존 안전조치(Safeguards), 추가 개선조치(Recommendations)를 구조화된 형태로 제안합니다. 산업안전보건법, KOSHA Guide, PSM 요구사항과 매칭하여 실무에 바로 활용할 수 있는 HAZOP 워크시트를 생성합니다.",
    features: ["Deviation 분석", "법령 자동 매칭", "Worksheet 자동 생성", "PSM 연계"],
    tags: ["HAZOP", "LLM", "PSM"],
    link: "https://ai-hazop-assistant.lovable.app/",
    highlights: [
      { label: "분석 항목", value: "5개 축" },
      { label: "적용 표준", value: "KOSHA · PSM" },
      { label: "처리 시간", value: "분 단위" },
    ],
  },
  {
    slug: "ai-photo-risk-assessment",
    type: "Vision AI",
    title: "AI Photo Risk Assessment",
    description:
      "현장 사진을 분석해 위험요인을 자동으로 탐지하고 평가합니다.",
    longDescription:
      "현장에서 촬영한 사진을 업로드하면 Vision 모델이 위험요인을 식별하고, 위험성 매트릭스(빈도 × 강도)로 등급을 산정합니다. 관련 산업안전보건법 조항 및 KOSHA Guide를 연결하여 개선조치를 문서화합니다.",
    features: ["Vision 기반 위험요인 식별", "위험성 매트릭스", "법령 매핑", "개선조치 제안", "보고서 생성"],
    tags: ["Vision", "Risk Assessment", "현장", "AI Photo Analysis"],
    link: "https://ai-photo-risk-assessment.lovable.app",
    highlights: [
      { label: "입력", value: "현장 사진" },
      { label: "평가 방식", value: "5×5 매트릭스" },
      { label: "출력", value: "개선조치서" },
    ],
  },
  {
    slug: "safety-quiz",
    type: "Interactive Learning",
    title: "Safety Quiz",
    description:
      "재미있게 배우는 산업안전 퀴즈로 이해도와 안전의식을 높이세요.",
    longDescription:
      "산업안전보건법, KOSHA Guide, PSM, HAZOP, 사고사례를 기반으로 한 문제 은행에서 랜덤으로 출제되는 인터랙티브 퀴즈. 오답 해설과 관련 법령 링크를 제공하여 실무 학습에 활용할 수 있습니다.",
    features: ["문제 은행", "오답 해설", "카테고리별 학습", "진도 추적"],
    tags: ["교육", "Quiz", "사례학습"],
    highlights: [
      { label: "카테고리", value: "6개 영역" },
      { label: "출제 방식", value: "적응형" },
    ],
  },
  {
    slug: "safety-insight-library",
    type: "Knowledge Base",
    title: "Safety Insight Library",
    description:
      "산업안전 인사이트와 사례를 정리하고 확장할 수 있습니다.",
    longDescription:
      "산업안전 실무자 관점에서 정리한 인사이트 라이브러리. 산업안전보건법 조항, KOSHA Guide 요약, PSM 요소별 체크리스트, 국내외 사고사례를 태그와 검색으로 탐색할 수 있습니다.",
    features: ["법령 검색", "사고사례 아카이브", "PSM 체크리스트", "실무 인사이트"],
    tags: ["법령", "PSM", "사고사례"],
    highlights: [
      { label: "카테고리", value: "5개 축" },
      { label: "업데이트", value: "지속적" },
    ],
  },
  {
    slug: "incident-rca-assistant",
    type: "AI Analysis Tool",
    title: "Incident RCA Assistant",
    description: "사고 근본원인을 5 Why·Fishbone으로 구조화하고 재발방지대책까지 도출합니다.",
    longDescription:
      "사고 개요와 경위를 입력하면 5 Why, Fishbone(4M) 기법으로 근본원인을 단계적으로 구조화합니다. 직접원인·간접원인·근본원인을 구분하고, 관련 법령과 유사 사고사례를 참조한 재발방지대책을 제안합니다.",
    features: ["5 Why 분석", "Fishbone(4M)", "재발방지대책 도출", "유사 사고사례 참조"],
    tags: ["RCA", "사고조사", "4M"],
    highlights: [
      { label: "분석 기법", value: "5 Why · 4M" },
      { label: "출력", value: "조사보고서" },
    ],
  },
  {
    slug: "safety-learning-assistant",
    type: "Interactive Learning",
    title: "Safety Learning Assistant",
    description: "산업안전 학습과 퀴즈로 현장 실무자의 이해도와 안전의식을 높여줍니다.",
    longDescription:
      "산업안전보건법, KOSHA Guide, PSM, 사고사례를 기반으로 한 학습 도우미입니다. 주제별 요약과 퀴즈, 오답 해설을 제공하여 현장 실무자의 학습을 지원합니다.",
    features: ["주제별 학습", "퀴즈 출제", "오답 해설", "진도 추적"],
    tags: ["교육", "Quiz", "KOSHA"],
    highlights: [
      { label: "카테고리", value: "6개 영역" },
      { label: "출제 방식", value: "적응형" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
