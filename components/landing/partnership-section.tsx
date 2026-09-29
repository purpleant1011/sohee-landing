import { SectionIntro } from "./section-intro";
export function PartnershipSection() {
  return (
    <section
      id="partnership"
      className="section scope-section"
      aria-labelledby="scope-title"
    >
      <div className="shell">
        <SectionIntro
          id="scope-title"
          title={
            <>
              월급처럼 구독하고,
              <br />
              직원처럼 함께 일해요.
            </>
          }
        >
          처음부터 모든 일을 맡길 필요는 없어요.
          <br />
          우리 가게에 필요한 업무부터 정하면 됩니다.
        </SectionIntro>
        <div className="scope-table">
          <div className="scope-row">
            <div>
              <span className="scope-label">홍보부터 시작</span>
              <h3>가게 소식을 꾸준히</h3>
            </div>
            <p>
              매장 정보 학습 · 프로모션 기획
              <br />
              이미지·글 제작 · 승인 후 게시
            </p>
            <span className="text-sm text-muted-foreground">
              홍보할 시간이 부족한 가게
            </span>
          </div>
          <div className="scope-row">
            <div>
              <span className="scope-label">고객과 연결</span>
              <h3>관심을 예약으로</h3>
            </div>
            <p>
              문의 응대 · 1:1 대화
              <br />
              예약 관리 · 예약금 확인 · 방문 알림
            </p>
            <span className="text-sm text-muted-foreground">
              문의 이후까지 챙기고 싶은 가게
            </span>
          </div>
          <div className="scope-row">
            <div>
              <span className="scope-label">함께 성장</span>
              <h3>다음 홍보를 더 구체적으로</h3>
            </div>
            <p>
              여러 채널의 업무 흐름 관리
              <br />
              성과 보고 · 피드백 반영 · 다음 제안
            </p>
            <span className="text-sm text-muted-foreground">
              마케팅을 체계적으로 운영할 가게
            </span>
          </div>
        </div>
        <p className="caption mt-5">
          필요한 업무를 살펴보는 구성 예시이며 확정 요금제·계약 조건이 아닙니다.
          실제 제공 범위는 채널 연결과 운영 조건에 따라 달라져요.
        </p>
      </div>
    </section>
  );
}
