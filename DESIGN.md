# 소희의 첫 출근

## Design direction
소상공인의 매장과 직원 소개를 결합한 따뜻한 브랜드 매거진. 대형 한글 제목, 크림색 지면, 짙은 가지색 잉크, 캐릭터의 라벤더와 살구색 강조. 소희를 제품 아이콘이 아닌 함께 일하는 사람으로 보여준다.

검토한 후보: 직원 소개서, 매장 창가, 주간 업무 노트, 상점 소식지, 고객 여정 지도, 브랜드 매거진, 사장님과 직원의 대화. Impeccable seed 5d1184f2 assigned index 6에 따라 브랜드 매거진을 선택. 자율 실행 요청으로 선택 단계를 별도 승인 없이 수행.

대안 비교: 계절별 병 배열은 시간 흐름은 선명하나 업무 이해를 어렵게 함. 도자기 선반은 결과 비교는 가능하나 직원 정체성과 멀어짐. 셰이더 포털은 구체적 매장 상황보다 효과가 앞섬. 밀도 높은 잡지는 캐릭터 표현은 강하나 첫 방문자의 이해에 부담. 선택한 매거진은 각 단계의 실제 업무 장면, 절제된 색, 다양한 크기의 구성을 가져온다.

## First viewport
왼쪽: '사장님은 가게에. 마케팅은 소희에게.' 오른쪽: 원본 소희 캐릭터를 유지한 매장 일러스트. 이미지 아래 이름·직무 표시, 작은 업무 메시지. 핵심 행동은 '소희가 일하는 방식 보기', 보조 행동은 '우리 가게에 맡겨보기'로 같은 페이지의 실제 데모로 이동.

## Page sequence
직원 소개 → 고객을 놓치는 순간 → 하나의 목표를 끝까지 잇는 업무 → 업종별 인터랙티브 예시 → 사장님과 소희의 역할 → 구독의 가치 → FAQ → 마무리 CTA.

## Typography and spacing
Self-host Pretendard Variable for Korean. Display 48–76px desktop, 40–48px mobile, tracking -0.035em. Body 16–19px. Max content 1200px, roomy section spacing 100–128px, mobile 64–80px. No generic repeated feature-card wall, no gradients, no testimonials or unsupported metrics.

## Interaction
업종 3개와 업무 단계 4개를 선택하면 실제 텍스트 예시가 바뀐다. 키보드로 조작 가능. 모션은 히어로 업무 메시지의 단 한 번 등장에 한정. prefers-reduced-motion 지원. FAQ는 native details.

## Verification
Ego Lite로 원본과 로컬 결과 확인. 모바일/데스크톱 레이아웃과 CTA·업종·단계 선택 확인. 화면 캡처는 safe-appshot만 사용. 메인 에이전트가 통합 검토 1회.
