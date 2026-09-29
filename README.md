# 소희 랜딩페이지

**사장님은 가게에. 마케팅은 소희에게.**

소희를 월 구독으로 함께 일하는 AI 마케팅 직원으로 소개하는 독립 랜딩페이지입니다. 프로모션 기획 → 콘텐츠·포스팅 → 문의·1:1 대화 → 예약·예약금 확인 → 성과 보고의 흐름을 설명합니다.

## 실행

Node.js 22 이상. 별도 패키지 설치나 API 키가 필요 없습니다.

```sh
npm run dev
# http://127.0.0.1:4173/landing/

npm run check
npm test
npm run build
npm run preview
```

이미 실행 중인 프리뷰가 있다면 `PORT=4174 npm run preview`로 다른 포트를 선택할 수 있습니다.

## 구성

- `index.html`: 랜딩 전체 콘텐츠·SEO·접근성 구조
- `styles.css`: 자체 호스팅 Pretendard, 반응형 레이아웃·브랜드 스타일
- `main.js`: 모바일 메뉴, 키보드 지원 탭, 업무 예시 다운로드
- `src/scenarios.mjs`: 3개 업종 × 4개 업무 단계 데이터와 텍스트 내보내기
- `public/images`: 기존 소희 캐릭터와 새로 생성한 히어로 이미지, WebP 최적화
- `scripts/build.mjs`: `/landing/` 경로의 정적 산출물 생성·자산 확인
- `scripts/serve.mjs`: 소스 또는 빌드 프리뷰 서버. 프로젝트 내부 파일 전체를 노출하지 않음
- `docs/source`: 기존 저장소의 마케팅 코드 및 원본 캐릭터, 추출 출처
- `.superloopy/evidence/frontend`: Ego Lite 검증 기록과 페이지 캡처

로그인·회원가입·결제·실제 AI 실행을 구현하지 않습니다. CTA는 페이지 내부의 업종별 업무 예시로 연결됩니다. 데이터 수집이나 외부 전송 없이 선택한 예시를 TXT로 저장할 수 있습니다.

## 서비스 표현 원칙

- 페이지의 대화·업무는 명시적으로 표시된 설명용 예시입니다.
- 실제 고객 후기, 사용자 수, 매출 증가율을 만들어 넣지 않습니다.
- 예약금은 확인 근거와 상태를 관리하는 의미이며 송금·결제 실행을 의미하지 않습니다.
- 채널별 연결 방식과 승인 범위에 따라 가능한 업무가 달라집니다.
- 기존 문서의 15/30/50만 원 요금은 현재 판매 조건이 확인되지 않아 페이지에 확정 가격으로 넣지 않았습니다.

## Cloudflare 배포 준비 — 아직 배포하지 않음

목표 주소는 **https://sohee.ai.kr/landing** 입니다. `/landing`은 `/landing/`으로 정규화될 수 있으며 모든 자산은 `/landing/` 아래에 있습니다.

`wrangler.jsonc`는 별도 `sohee-landing` Worker의 Static Assets 설정만 포함합니다. 운영 도메인 라우트와 자동 배포 CI는 아직 연결하지 않았습니다. GitHub 푸시만으로 이 프로젝트가 운영 사이트를 변경하지 않습니다.

사용자가 배포를 지시하면 다음 순서로 진행합니다.

1. 기존 Cloudflare `real-sohee` Worker와 `sohee.ai.kr` zone의 라우트 소유권을 확인합니다.
2. `npm run check && npm test && npm run build` 후 이 저장소의 **별도** `sohee-landing` Worker에 배포합니다.
3. 프리뷰 도메인에서 `/landing/` HTML, 폰트, 이미지, ES module, 다운로드를 검증합니다.
4. 해당 zone에 정확한 `sohee.ai.kr/landing` 및 `sohee.ai.kr/landing/*` 경로 라우트를 추가합니다. 기존 루트·앱·관리자 라우트와 기존 Worker를 교체하지 않습니다.
5. 실제 도메인의 페이지·자산을 확인하고 기존 `/`, `/app`, `/admin`의 라우팅이 유지되는지 점검합니다.

예상 배포 명령은 `wrangler deploy`입니다. Wrangler는 이 프로젝트의 런타임 의존성이 아니며, 실제 배포 시 인증된 Cloudflare 환경에서 사용합니다. 계정 ID·인증 토큰은 저장소에 기록하지 않습니다.

롤백은 추가한 두 landing 라우트를 제거하거나 별도 Worker의 직전 버전을 복원하는 방식으로 수행합니다. 기존 앱 Worker를 다시 배포할 필요가 없습니다.

## 검증

- Node 내장 테스트: 4개. 업종별 4단계, 잘못된 업종의 기본값, 다운로드 예시 표시, 빌드 자산·앵커·경로 검증.
- Ego Lite: 12개 업종·단계 조합, 키보드 Home/ArrowRight, 모바일 메뉴/Escape, FAQ, 실제 파일 다운로드.
- 반응형: 320 / 390 / 768 / 1024 / 1440px에서 가로 넘침과 텍스트 이탈 검사.
- 실제 Cloudflare 배포와 라이브 검증은 사용자 배포 지시 전까지 미실행.

브랜드 원본 자산의 권리는 원 서비스 소유자에게 있습니다. Pretendard의 OFL 라이선스는 `public/fonts/OFL.txt`에 포함했습니다.
