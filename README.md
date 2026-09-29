# 소희 랜딩

자영업자의 AI 마케팅 직원 소희를 소개하는 한국어 랜딩페이지입니다.

- 라이브: https://sohee.ai.kr/landing/
- Next.js 16 App Router / React / TypeScript
- Tailwind CSS 4 / 공식 shadcn/ui Button, Tabs, Accordion, Sheet, Card, Badge, Separator (브랜드에 맞게 조정)
- OpenNext Cloudflare로 실제 Next.js 서버 렌더링 실행
- Pretendard 자체 호스팅, 기존 소희 캐릭터와 제작 이미지 재사용

## 실행

Node.js 22 이상에서:

```sh
npm ci
npm run dev
```

http://127.0.0.1:4173/landing/ 에서 확인합니다.

```sh
npm run build:worker  # next build + Cloudflare Worker 생성
npm run preview       # Workers 런타임, http://127.0.0.1:4174/landing/
npm run check         # TypeScript
TEST_ORIGIN=http://127.0.0.1:4174 npm test
```

`npm test`의 HTTP 검사는 실행 중인 서버가 필요합니다. 기본 서버는 4173, Workers 검증 시 TEST_ORIGIN으로 4174를 지정합니다. `npm run start`는 빌드된 Next.js를 4173에서 실행합니다.

## SSR 및 접근성

`app/page.tsx`는 서버 컴포넌트이며 `dynamic = "force-dynamic"`으로 요청 시 렌더링합니다. 정적 export가 아닙니다. 헤드라인·제품 설명·예약 흐름·초기 업종 예시는 JavaScript 실행 전 HTML에 포함됩니다. 메뉴, 데모, FAQ만 클라이언트 컴포넌트입니다.

`html lang="ko"`, 하나의 h1/main, nav/section/article/figure/footer, 제목 계층, 본문 바로가기, 키보드 포커스, 동작 줄이기를 제공합니다. Radix 기반 Tabs는 방향키 탐색, Sheet는 초점 가두기·Escape·초점 복귀를 처리합니다. FAQ는 버튼과 aria-expanded 상태를 제공합니다.

## 배포 경계 — 기존 사이트 보호

별도 Worker **sohee-landing**만 배포합니다. 원래 앱 **real-sohee**, DNS, 기존 커스텀 도메인은 변경하지 않습니다.

허용한 라우트는 정확히 두 개입니다:

- `sohee.ai.kr/landing`
- `sohee.ai.kr/landing/*`

Next.js `basePath: "/landing"`으로 이미지·폰트·CSS·JS·RSC 요청을 모두 해당 하위 경로에 둡니다. 루트 `/_next/*` 라우트나 `custom_domain`을 추가하면 안 됩니다. Worker 자기 참조 바인딩은 **sohee-landing**만 가리킵니다. R2/DB/인증 리소스를 만들지 않습니다.

```sh
npx wrangler whoami
npm run build:worker
npm run deploy
```

`deploy`는 이미 검증한 `.open-next` 산출물을 배포합니다. 기존 루트·pricing·login 응답과 real-sohee의 Worker/라우트/도메인 메타데이터를 전후 비교합니다. 증거는 `.superloopy/evidence/`에 기록합니다.

## 주요 코드

- `app/page.tsx`: 9개 서버 섹션 조합; 예약·학습 도식은 `components/landing/`
- `app/layout.tsx`: 한국어 문서, 폰트, canonical/OG 메타데이터
- `app/globals.css`: Tailwind 토큰, 구성, 반응형, 상태
- `components/work-demo.tsx`: 업종/업무 단계 체험과 예시 다운로드
- `components/site-header.tsx`, `components/faq.tsx`: 모바일 메뉴/FAQ
- `components/ui/`: 브랜드에 맞춘 shadcn/ui 컴포넌트 소스
- `src/scenarios.mjs`: 업종별 설명과 다운로드 내용
- `wrangler.jsonc`, `open-next.config.ts`, `next.config.ts`: SSR 배포 경계

## 제품 사실과 공개 범위

콘텐츠 준비·사장님 승인·외부 게시의 기본 흐름부터 검증하고 있습니다. 고객 상담·예약·예약금 확인·카카오톡 알림·리포트는 서비스가 지향하는 연결 업무이며, 화면은 설명용 예시입니다. 실제 제공 범위는 채널 연결·수신 동의·운영 조건에 따라 확인해야 합니다. 가짜 성과, 보장 매출, 가격, 로그인·가입·결제 기능은 넣지 않습니다. 특정 고객사 이름과 증거 이미지를 공개하지 않습니다.

이미지 출처와 이전 버전 검증은 DESIGN.md와 `.superloopy/evidence/frontend/`를 참조하세요.

## 프로젝트 컨텍스트와 최신 UI 적용

`AGENTS.md`는 목적·타깃·CTA·기술·디자인·검증·배포 규칙의 진입점이며 `CLAUDE.md`도 이를 참조합니다. 기획 검토는 `docs/plans/2026-09-29-landing-requirements-review.md`에 있습니다.

2026-09-29 npm 최신 버전 확인: Tailwind 4.3.3. 공식 `shadcn@4.21.0 add button tabs accordion sheet card badge separator --overwrite --yes`로 레지스트리 컴포넌트를 적용한 뒤 소희의 디자인에 맞게 조정했습니다. `radix-ui`를 사용하고 기존 로컬 `cn` 함수를 재사용합니다.

`components/landing/`의 9개 서버 섹션을 `app/page.tsx`에서 조합합니다. 모든 독립 캐릭터는 `components/sohee-character.tsx`를 사용하며, 전신을 자르는 cover/마스크는 금지합니다. 캐릭터의 원본 비율과 전체 노출을 모바일·데스크톱 브라우저에서 검증합니다.
