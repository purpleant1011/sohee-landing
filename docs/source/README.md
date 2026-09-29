# 조사 및 자산 출처

원본 저장소: https://github.com/purpleant1011/real-sohee
참조 SHA: `source-commit.txt`

## 이식한 정보

- `src/app/(public)/page.tsx`가 `V085MarketingHome`을 사용함을 확인.
- `src/features/marketing/v085-marketing-home.tsx`: 기존 랜딩 서사와 고객 문의→예약→다음 콘텐츠 흐름.
- `src/features/marketing/v085-content.ts`: 업종별 경험, 채널별 범위, 계획 자료.
- `src/features/marketing/v085-assets.ts`: 소희의 캐릭터·전신 자산 경로와 설명.
- `public/images/marketing/v085/sohee-fullbody-guide-v1.png`: 원본을 `sohee-guide-original.png`로 보존, 서비스용 WebP 제작.
- 원본 `AGENTS.md`의 V0.91 정본: Commercial Employee Experience & Verified Growth Loop. 사장님의 목표, 실제 예약, 근거 있는 결과 보고 방향을 확인.
- Ego Lite로 https://sohee.ai.kr 원본 랜딩을 직접 열어 공개 메시지 확인.

## 로컬 문서

사용자 제공 `/Volumes/Research/소희 프로젝트/소희 사용자 사이트`를 탐색.
`V0.87/수정지시/4차 수정지시/소희_V0.8.7_4차_수정지시서_Antigravity_복붙용.md` 본문을 읽음.
핵심 원칙: **Owner manages outcomes. Sohee manages the work.** 목표·제약·권한·예외는 사장님이 정하고, 소희가 실제 예약 가능 시간과 고객 반응에 맞춰 일을 연결하고 결과를 검증한다.
V0.88 기획 ZIP의 제품·UX·디자인 구조와 V0.9 13차의 고객 대화, 예약, 성과 문서 목록을 확인. `.gdoc` 파일의 본문을 읽었다고 주장하지 않는다.

이 저장소는 원본 앱의 인증·DB·런타임을 복제하지 않는다. 마케팅 부분의 사실·브랜드·서사를 추출해 독립 정적 랜딩으로 전면 재작성했다.

## 생성 이미지

도구: built-in imagegen. 원본 소희 이미지를 참조로 제공.
출력: `public/images/sohee-hero.webp` (원본 PNG에서 WebP 변환).

프롬프트: 기존 소희의 얼굴, 갈색 단발, 라벤더 머리핀과 니트 조끼, 흰 셔츠, 사원증을 유지한다. 따뜻한 자연광이 드는 한국의 작은 꽃집에서 소희가 태블릿으로 마케팅을 챙기는 동안 사장님은 고객에게 꽃다발을 건넨다. 원본과 어울리는 정교한 편집 일러스트. 크림·살구·잎사귀 녹색·라벤더 색감. 미래형 로봇, UI 패널, 떠다니는 아이콘, 글자, 로고, 워터마크 없이 실제 매장 장면으로 표현한다.

페이지에 해당 장면이 서비스 설명을 위해 그린 이미지임을 표시했다.
