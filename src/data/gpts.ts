export type CustomGPT = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};

// 커스텀 GPT 링크는 여기서 관리하세요.
export const customGPTs: CustomGPT[] = [
  {
    id: "safety-law-advisor",
    title: "산업안전 법령 AI 어드바이저",
    description:
      "산업안전보건법·중대재해처벌법 등 관련 법령을 작업 상황에 맞게 해석하고 사업주의 의무와 실무 조치사항을 안내합니다.",
    tags: ["산업안전보건법", "중대재해처벌법", "법령 자문"],
    url: "https://chatgpt.com/g/g-6a5fb400187c819192491dd8cddd0f44-saneobanjeonbeobryeong-jungdaejaehaeceobeolbeob-geomto-ai",
  },
  {
    id: "rca-assistant",
    title: "사고 근본원인분석 AI (RCA Assistant)",
    description:
      "산업재해 사고를 5 Why, Fishbone, 직접·간접·시스템 원인 분석과 재발방지대책까지 구조적으로 도출하는 AI 사고조사 전문가.",
    tags: ["5 Why", "Fishbone", "재발방지대책"],
    url: "https://chatgpt.com/g/g-6a622a095468819194c6731e92d06ec0-sago-geunbonweoninbunseog-ai-rca-assistant",
  },
];
