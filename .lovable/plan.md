사용자가 선택한 **Distinctive personality-driven** 디자인 방향을 실제 사이트에 적용합니다. 좌측 텍스트 + 우측 이미지 분할 히어로, 겹쳐진 통계 카드, 하단 가로형 프로젝트 스트립, 그리고 전체 다크 네이비 톤을 구현합니다.

## 구현 범위

### 1. 글로벌 테마 재정의
- 파일: `src/styles.css`
- 배경: 깊은 네이비 다크(`oklch(0.15 0.04 250)`)
- 카드/표면: 약간 밝은 다크 카드(`oklch(0.19 0.05 250)`)
- 포인트: 연한 블루(`oklch(0.6 0.2 250)`)
- 폰트: `Space Grotesk` (디스플레이), `DM Sans` (본문)
- 유틸리티: `container-page`, `gradient-dark`, `glow-soft`, `fade-up` 갱신

### 2. 루트 레이아웃
- 파일: `src/routes/__root.tsx`
- Google Fonts link 태그 추가
- 메타데이터 다크 테마 메시지로 정리

### 3. 사이트 공통 크롬
- 파일: `src/components/site-chrome.tsx`
- 헤더: 남색 배경 유지, 로고 뱃지/CTA를 연한 블루 포인트로 조정
- 푸터: 다크 카드 배경, 링크/타이포 토큰에 맞춰 색상 변경

### 4. 랜딩 페이지 완전 재구성
- 파일: `src/routes/index.tsx`
- Hero: 좌측 카피 + 우측 전체 이미지(`src/assets/hero.jpg`) split card
- 통계 카드: 2개(`04 Active Projects`, `05+ Insight Articles`)를 우측 하단에 겹쳐 배치
- 프로젝트 스트립: 4개 프로젝트를 4열 가로형 이미지 카드로 배치
- Safety Insights: 3개 카드 프리뷰 유지
- CTA 섹션: 다크 카드 + 포인트 버튼
- Workflow 섹션 삭제(이미 제거됨, 유지)

### 5. 서브 페이지 토큰 동기화
- 파일: `src/routes/projects.tsx`, `src/routes/projects.$slug.tsx`, `src/routes/insights.tsx`, `src/routes/about.tsx`, `src/routes/contact.tsx`, `src/routes/vibe-coding-safety-apps.tsx`
- 배경 `bg-background` 및 `text-foreground`, `text-muted-foreground`, `bg-primary` 등 시맨틱 토큰으로 전환
- 기존 `text-[var(--navy)]`, `bg-[var(--navy)]` 사용처를 제거하여 다크 테마에서 가독성 확보

## 완료 기준
- 전체 페이지가 다크 테마로 렌더링
- Hero가 좌측 텍스트/우측 이미지 split-card 형태로 표시
- 통계 카드가 이미지 위에 겹쳐 보임
- 4개 프로젝트가 가로형 이미지 카드로 노출
- 네비게이션/프로젝트/인사이트/상세 페이지가 다크 톤에서 정상 가독
- 빌드 오류 없음