# 요구사항 대조

| 요구사항 | 반영 위치 |
| --- | --- |
| 문제 → 해결 → 기대효과 | HeroSection, HandoffSection의 기대효과 영역 |
| 타깃과 핵심 행동 | AGENTS.md, 기획 검토 문서, 업종 선택 → 업무 탐색 → 예시 저장 |
| Next App Router | app/layout.tsx, app/page.tsx, 요청 시 SSR |
| 최신 Tailwind / shadcn | Tailwind 4.3.3 최신 확인, shadcn CLI 4.21.0 공식 레지스트리 7종 적용 |
| AI 프로젝트 맥락 | AGENTS.md, CLAUDE.md, PRODUCT.md, DESIGN.md |
| 주요 섹션 분리 | components/landing의 서버 컴포넌트 9개 |
| 재사용 UI | Button, Tabs, Accordion, Sheet, Card, Badge, Separator, SoheeCharacter |
| 반응형·인터랙션 | 업종별 데모, 키보드 탭, 모바일 메뉴, FAQ, 텍스트 다운로드 |
| 시맨틱·메타데이터 | h1/main/nav/section/figure, 한국어 제목·설명·canonical, alt, 버튼·링크 역할 |
| 캐릭터 잘림 방지 | 공통 SoheeCharacter와 computed-style 기반 실제 브라우저 회귀 검증 |
| GitHub·배포 | 기존 PR 업데이트, 별도 Cloudflare Worker /landing 경로만 배포 |
| Figma·Vercel | 사용자 요청에 따라 제외 |

## 검증 원칙
캐릭터 원본은 정상임을 직접 확인했다. CSS cover/마스크 때문에 잘렸으며 이미지 파일을 임의로 재생성하지 않았다. 모든 독립 캐릭터에 contain/no-mask/no-radius를 적용한다. HTTP 200이나 단순 소스 검색으로 캐릭터가 온전하다고 판단하지 않고 실제 화면과 브라우저 계산 스타일을 함께 확인한다.
