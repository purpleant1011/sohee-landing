# 소희 랜딩 검증 — 2026-09-29

## 결과
메인 에이전트 단독 구현·통합 검토 1회. 후속 수정 배치 1회, 최종 확인 1회.

- `npm run check`: JavaScript 구문 검사 통과.
- `npm test`: 4/4 통과.
- `npm run build`: 통과, HTML 참조 자산 존재·빈 파일 검사 통과.
- `git diff --check`: 오류 없음.
- Ego Lite task space 12에서 원본 사이트와 로컬 production build 직접 확인.
- 세 업종 × 네 단계 = 12개 조합의 제목·본문·접근성 탭 연결 정상.
- 키보드 Home / ArrowRight 탭 이동 정상.
- 모바일 메뉴 열림·Escape 닫힘 정상.
- FAQ 열림 정상.
- 파일 다운로드 실제 수신, `downloaded-brief.txt` 저장.
- 320 / 390 / 768 / 1024 / 1440px: 가로 넘침 없음, 검사한 제목·본문·선택 버튼 화면 이탈 없음.
- 최종 데스크톱 1440px: 히어로 설명과 메시지 겹침 없음.
- 최종 모바일 390px: 예시 라벨 분리, 목표 문구 폭 260px 확보.

## 수정 사항
- 히어로 메시지 위치를 올려 이미지 하단 설명 가림 해소.
- 모바일 예시 표시를 별도 행으로 분리해 목표 문구 폭 확보.
- 미사용 원본 PNG는 배포 public에서 source 보관 폴더로 이동.

## Impeccable
스킬 설치·context·concept-seed·craft-floor 적용. 기계 검사 1회 시행.
검사 도구는 `/landing/styles.css` 절대 URL을 소스 파일 경로로 잘못 해석해 CSS를 읽지 못했으며, 그 결과 제목과 본문이 모두 16px이라는 경고 1개를 출력했다. 실제 Ego Lite 계산값은 h1 61.2px / 설명 19px로 확인되어 해당 경고는 적용되지 않는다. 로그는 `impeccable-detect.json`, 실제 값은 `ego-final.json`.

## 캡처 경로
safe-appshot은 `com.citrolabs.ego.lite` 캡처·초안 첨부 성공(`attached: true`, `sent: false`)을 반환했으나 다른 사용자 창을 선택했다. 해당 캡처는 검증 근거와 저장소에서 제외했다. 이후 Ego Lite의 정확한 작업 Page 캡처로 시각 검증했다. 내장 Appshot / SkyComputerUseService는 사용하지 않았다.

## 범위와 미실행 항목
Cloudflare 배포 및 운영 도메인 검증은 사용자 지시 전까지 실행하지 않았다. 이 결과는 정적 랜딩과 설명용 인터랙션에 대한 검증이며 실제 AI 업무·예약·입금 처리 검증이 아니다. 외부 로그인, 가입, 결제, 고객 데이터 수집 없음.

## 남은 제품 결정
현재 판매 요금과 실제 서비스 신청 연결처가 확정되지 않아 가격을 단정하거나 허위 가입·상담 성공을 만들지 않았다. 현재 CTA는 랜딩 안의 예시와 파일 저장으로 연결한다.
