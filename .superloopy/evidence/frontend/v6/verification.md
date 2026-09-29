# 후킹·공식 UI·캐릭터 수정 검증 — 2026-09-29

## 반영
- npm 최신 Tailwind 4.3.3 확인; 설치 버전 일치.
- 공식 shadcn 4.21.0 CLI로 7개 컴포넌트 도입 후 브랜드에 맞게 조정. Button/Tabs/Accordion/Sheet/Card/Badge/Separator 모두 실제 화면에 사용.
- 9개 서버 섹션으로 분리, AGENTS.md/CLAUDE.md 작성, 문제→해결→기대효과→업종별 체험 메시지 보강.
- 전신 캐릭터 네 곳은 SoheeCharacter 공통 컴포넌트 사용. 원본 926×1698 유지; contain/no clipping/no mask/no radius.

## 검증 근거
- Next.js/OpenNext 빌드 성공, 요청 시 SSR `ƒ /`: build.txt.
- TypeScript `npm run check` 통과.
- Workers preview의 `npm test`: 7/7 통과. tests.txt.
- Ego Lite TaskSpace 5: 320/390/768/1440px에서 독립 캐릭터 4개 모두 computed object-fit=contain, clip-path=none, mask-image=none, border-radius=0px. 원본 크기 일치. 가로 넘침·프로젝트 깨진 이미지 없음.
- 메인 에이전트가 1440/390px 실제 캡처를 확인: 마지막 CTA의 머리와 발끝 모두 표시됨. 비교 파일 1440-closing.png, 390-closing.png.
- CTA→업종 체험, 모바일 메뉴 열기/Escape/초점 복귀, 방향키 업종 선택, 예약 단계, FAQ, 실제 파일 다운로드 정상. browser-results.json, downloaded-brief.txt.
- 캡처된 JavaScript/콘솔 오류 0건.
- axe WCAG 2 A/AA + 2.1 AA: 사이트 소유 영역 위반 0건, 통과 규칙 21개. axe.json. 브라우저 확장 삽입 DOM은 검사 범위에서 제외.
- npm audit 취약점 0건. npm-audit.json.
- git diff --check 통과.

## 검증 도구 보완
첫 실행에서 Ego Lite가 셸 환경변수를 전달하지 않아 TaskSpace를 찾지 못한 문제는 명시적인 입력 객체로 해결했다. 화면 밖의 지연 로딩 이미지가 아직 로드되지 않은 경우에는 먼저 각 캐릭터로 스크롤한 뒤 판정하도록 브라우저 회귀 스크립트를 보완했다. 초기 HTTP 테스트의 서버 준비 전 연결 실패는 preview Ready 이후 재실행해 통과했다. 애플리케이션 오류를 숨기거나 검사를 생략한 것이 아니다.

## 범위
Figma/Vercel은 사용자 요청에 따라 제외했다. 기존 Cloudflare /landing 전용 배포를 유지한다. 실제 AI 실행·예약·결제·메시지 전송 기능은 추가하지 않았다. 새 이미지를 생성하지 않고 정상인 기존 캐릭터 원본을 온전히 표시하도록 수정했다.
