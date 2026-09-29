# 공모전 제안서 기반 랜딩 보강

## 원문 확인
사용자가 제공한 `소희_모두의창업_문항별_최종본`의 네 폴더를 조사했다.
- `최종본/소희_모두의창업_지원서_최종정본_2026.docx`: Q1–Q10 전체 본문 추출·읽기.
- 최종본 Google 문서 [개정본문](https://docs.google.com/document/d/1CuRDL6WhJasyqiNSkKRv968zS3BEpDYztk_ob5eq6Vc/edit), [근거·검토 메모](https://docs.google.com/document/d/1VmaZsxlLMqDVmHxVHCfV5siyzcNqyDcPmTwscnqKqtA/edit) 본문 확인.
- 수정본(im-not-ai)의 [배경](https://docs.google.com/document/d/1rGrGJpvxnmbsDdMNDenqbg0X6Gs3KEHPBp__BlTs9rk/edit), [차별점](https://docs.google.com/document/d/1k6qoq9GAvkWzOyG8mMhwUuVykZOKdNTHj0PBEsrfiRA/edit), [수익모델](https://docs.google.com/document/d/1ZF62PPKvvmkykfkreM14w-KfOtRXJBo-dQdIGs-OGJQ/edit) 확인. .gdoc는 본문이 아니라 연결 정보이므로 실제 Google 문서 본문을 읽었다.
- 최종 이미지 10장 시각 확인. 증거 이미지 7장 중 5장은 최종 이미지와 SHA256 동일, 나머지 운영자 화면과 12개월 계획 2장 추가 시각 확인.

## 자료 간 차이와 사용 원칙
DOCX 일부에는 계약금 수령, Google 최종본문에는 무상 파일럿이라고 되어 있다. 수정본은 외부 테스트 채널 게시, 최종본문은 공식 채널 게시라고 설명한다. 비용·유료 고객·생산 환경을 확정하지 않고, 공통으로 뒷받침되는 파일럿 진행 및 콘텐츠 준비→승인→외부 게시 기본 흐름만 사용했다. 제품 화면의 상태값은 당시 제출된 기록이며 실시간 상태가 아니다.

시장 규모, 창업자 경력, 경쟁 우위 도표, 매출 가설은 첫 방문 사장님의 결정에 직접 도움을 주지 않거나 별도 검증이 필요해 페이지에서 제외했다. 계약서에는 서명이 남아 있어 게시하지 않았다. 내부 운영자 화면도 제외했다. 고객 발언의 공개 인용 허락이 명시되지 않아 직접 인용 후기로 만들지 않았다.

## 반영 내용
- 콘텐츠 생성 뒤에도 사장님에게 남는 연결 업무: 원인 설명과 역할 분담 도식.
- 매장 기준·말투를 배우는 직원: 브랜드 기억 예시, 확인·수정·승인 후 게시 과정.
- 첫 매장 바이름 파일럿: 실제 콘텐츠 생성 화면과 채널 검증 화면. 확대 링크 및 접기/펼치기 지원.
- 현재 확인한 게시 흐름과 다음 검증인 문의·예약·시간 절감 분리.
- 구독은 고정 판매 조건이 아닌 업무 구성안으로 설명. 가격 미표시 유지.

## 시각 방향
기존 소희 캐릭터, 자주색, 크림색, Pretendard와 업무 흐름을 보존하는 bounded refinement. 이번 부족분은 장식보다 실제 실행 근거라고 판단해 새로운 생성 일러스트 대신 제공된 실화면을 최적화해 사용했다. 기획 도식은 선명한 HTML/CSS로 새로 구성해 모바일에서도 읽힌다. 원본 증거의 텍스트·상태를 변경하지 않고 WebP 변환만 수행했다.

## 자율 실행
기존 사용자 지시대로 중간 승인 대기나 서브에이전트 없이 구현. 파일럿 원문은 저장소에 복제하지 않고 이 요약과 사용 이미지 2개만 보관. Cloudflare 배포는 별도 요청 전 실행하지 않는다.
