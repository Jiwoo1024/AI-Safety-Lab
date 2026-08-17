export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  /** Article body paragraphs. Empty array = not published yet. */
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "why-hazop-takes-long",
    title: "AI 기반 공정 위험성 평가의 최신 동향",
    excerpt:
      "AI와 데이터 기반 분석을 통해 공정 위험을 더 정확하고 효율적으로 평가하는 방법을 정리합니다.",
    category: "Process Safety",
    readTime: "6 min read",
    date: "2024.05.25",
    image: "/insight-hazop.jpg",
    body: [
      "국내 정유·석유화학 업계에서 공정 위험성 평가의 무게중심이 정성적 워크숍 중심의 전통적 HAZOP에서, 데이터 기반 설비 진단과 결합된 디지털 방식으로 옮겨가고 있다.",
      "한국가스안전공사는 최근 KGS-RBM(위험도 기반 관리) 기술연구회를 열어 정유·석유화학 설비관리 전문가들과 HAZOP·LOPA 기반 위험성 평가 모듈, API 581 최신 개정 반영 현황, RBI(Risk-Based Inspection) 기능 개선 방향을 논의했다. 핵심은 HAZOP과 LOPA에서 도출된 위험 시나리오 데이터를 설비의 실시간 상태 데이터, 예측 진단 결과와 연계해 안전밸브 점검 주기 같은 실무 의사결정을 데이터 기반으로 조정하는 흐름이다.",
      "AI가 HAZOP 자체를 대체하는 단계는 아니다. 편차(Deviation) 도출, 원인·결과 분석, 기존 안전조치 매칭까지 숙련된 안전관리자의 경험과 판단이 여전히 핵심이다. 다만 AI는 방대한 공정 데이터와 과거 사고 사례, 관련 법령·기준을 빠르게 연결해 검토 초안을 만들어주는 역할로 자리잡고 있다. 이렇게 되면 안전관리자는 반복적인 자료 조사 대신 시나리오의 타당성을 검증하고 개선조치의 우선순위를 정하는 데 더 많은 시간을 쓸 수 있다.",
      "정리하면, 2026년 공정 위험성 평가의 방향은 \u201cAI가 판단을 대신하는 것\u201d이 아니라 \u201cAI가 판단에 필요한 근거를 더 빠르게 모아주는 것\u201d에 가깝다.",
    ],
  },
  {
    slug: "photo-risk-assessment",
    title: "사진 한 장이 사고를 막는다 — AI 위험성 평가 활용법",
    excerpt:
      "현장 사진 분석을 통해 숨겨진 위험을 발견하고 선제적으로 대응하는 방법",
    category: "Workplace Safety",
    readTime: "5 min read",
    date: "2024.05.13",
    image: "/insight-photo-risk.jpg",
    body: [
      "건설·제조 현장의 안전관리는 오랫동안 순찰과 육안 점검에 의존해왔다. 하지만 넓은 현장을 사람이 매 순간 살피는 데는 한계가 있고, 사고는 관리자가 자리를 비운 짧은 순간에 발생하는 경우가 많다.",
      "최근 컴퓨터 비전 기반 AI 안전 모니터링 솔루션들이 이 공백을 메우고 있다. 이런 시스템은 현장 사진이나 CCTV 영상에서 안전모·안전대 미착용, 위험구역 무단 진입, 중장비 주변 근접 작업 같은 항목을 자동으로 인식한다. 국내 대형 제조기업 도입 사례에서는 이런 Vision AI 솔루션을 통해 PPE(개인보호구) 착용 규정 준수율을 98% 수준까지 끌어올린 결과도 보고됐다. 해외 업계 조사에서도 컴퓨터 비전·IoT 센서·머신러닝을 결합한 실시간 모니터링이 안전사고를 최대 60%까지 줄일 수 있다는 분석이 나온다.",
      "사진 기반 위험성 평가의 장점은 속도와 기록성이다. 현장 사진 한 장을 업로드하면 AI가 위험요인을 식별하고, 관련 법령·기준과 개선조치 초안까지 함께 제시해준다. 안전관리자는 이를 근거로 즉시 조치하거나 정식 위험성평가 문서에 반영할 수 있다.",
      "물론 한계도 명확하다. 사진은 특정 순간·각도만 담기 때문에 맥락(작업 절차, 근로자 숙련도, 반복 작업 여부 등)을 놓칠 수 있다. AI의 판단은 어디까지나 1차 스크리닝이며, 최종 위험성 등급과 조치 여부는 현장을 아는 안전관리자가 확정해야 한다. 사진 기반 평가는 안전관리자의 눈을 대체하는 게 아니라, 그 눈이 놓칠 수 있는 순간을 보완하는 도구로 봐야 한다.",
    ],
  },
  {
    slug: "ai-cannot-replace-safety-manager",
    title: "반도체 산업의 안전관리, AI가 바꾸는 미래",
    excerpt: "AI와 자동화 기술이 반도체 산업의 안전관리 패러다임을 어떻게 혁신하는가",
    category: "Technology Insight",
    readTime: "7 min read",
    date: "2024.05.06",
    image: "/insight-ai-manager.jpg",
    body: [
      "반도체 산업은 고온·고압 공정, 유해화학물질, 정밀 자동화 설비가 밀집한 대표적인 고위험 제조 현장이다. 최근 이 업계에서 AI를 안전관리에 접목하는 시도가 눈에 띄게 늘고 있다.",
      "대표적인 예가 경기 평택시의 반도체 산업단지 AI 안전관리 모델이다. 평택시는 드론을 활용한 산업단지 안전 실증사업을 추진하며, 사람이 접근하기 어려운 고소·밀폐 구역을 드론으로 정기 점검하고 이상 징후를 조기에 포착하는 체계를 구축하고 있다. 또한 국내 대형 반도체 기업들은 설비 이상 징후를 사전에 감지하는 AI 기반 예지보전 시스템을 도입해, 설비 결함으로 인한 공정 중단이나 안전사고 리스크를 함께 낮추는 방향으로 접근하고 있다.",
      "반도체 공정의 특성상 안전관리는 품질관리와 떼어놓고 볼 수 없다. 설비 이상은 곧 공정 불량으로 이어지고, 동시에 화재·폭발·화학물질 누출 같은 중대 리스크로 연결될 수 있다. 그래서 예지보전 데이터, 환경 센서 데이터, 작업자 동선 데이터를 통합해 분석하는 방향으로 AI 활용이 확장되는 추세다.",
      "중대재해처벌법 시행 이후 국내 제조업 전반에서 AI 기반 실시간 안전 모니터링 솔루션 도입 비교·검토가 활발해진 것도 같은 맥락이다. 반도체처럼 공정이 복잡하고 리스크가 높은 산업일수록, 사람의 순찰만으로는 놓치기 쉬운 위험 신호를 AI가 상시로 보완해주는 구조가 표준으로 자리잡을 가능성이 크다.",
    ],
  },
  {
    slug: "osha-vs-kosha-guide",
    title: "산업안전보건법과 KOSHA Guide의 차이",
    excerpt: "법적 강제력과 기술 가이드의 관계를 정리하고, 실무에서 어떻게 활용해야 하는지 설명합니다.",
    category: "법령",
    readTime: "7 min read",
    date: "2024.04.28",
    image: "/insight-hazop.jpg",
    body: [],
  },
  {
    slug: "field-hazard-observation",
    title: "현장 위험요인을 놓치지 않는 관찰 방법",
    excerpt:
      "숙련된 안전관리자가 사용하는 체계적인 관찰 프레임과 놓치기 쉬운 위험요인 체크리스트를 공유합니다.",
    category: "현장",
    readTime: "5 min read",
    date: "2024.04.15",
    image: "/insight-photo-risk.jpg",
    body: [],
  },
];

export const publishedInsights = insights.filter((i) => i.body.length > 0);

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
