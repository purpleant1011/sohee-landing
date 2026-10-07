import {
  Ban,
  CheckCheck,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
export function OwnerControlSection() {
  return (
    <section className="section shell" aria-labelledby="control-title">
      <div className="control-layout">
        <div>
          <h2 id="control-title">
            잘 맡기려면,
            <br />
            기준도 함께 있어야 하니까.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            소희가 일을 덜어드려도 가게의 결정권은 사장님께.
            <br />
            무엇을 맡겼고, 어디까지 진행됐는지 보이도록 합니다.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-semibold">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            사장님의 기준 안에서 일하는 직원
          </div>
        </div>
        <div className="approval-lines">
          <article>
            <span className="approval-icon">
              <CheckCheck aria-hidden="true" />
            </span>
            <div>
              <h3>외부 게시 전, 확인하고 승인해요.</h3>
              <p>
                소희의 초안을 보고 문구·이미지·조건을 수정해요. 승인된 내용으로
                게시를 이어갑니다.
              </p>
            </div>
          </article>
          <article>
            <span className="approval-icon">
              <MessageCircle aria-hidden="true" />
            </span>
            <div>
              <h3>모호한 상담은 맥락과 함께 넘겨요.</h3>
              <p>
                특별 할인이나 예외 예약처럼 판단이 필요한 일은 고객의 요청을
                정리해 사장님께 전달해요.
              </p>
            </div>
          </article>
          <article>
            <span className="approval-icon">
              <TrendingUp aria-hidden="true" />
            </span>
            <div>
              <h3>반응과 실제 성과를 구분해요.</h3>
              <p>
                게시 반응, 고객 문의, 확정 예약을 나눠 보고해요. 확인되지 않은
                예약이나 매출을 성과로 부풀리지 않아요.
              </p>
            </div>
          </article>
          <article>
            <span className="approval-icon">
              <Ban aria-hidden="true" />
            </span>
            <div>
              <h3>소희가 하지 않는 일도 분명해요.</h3>
              <p>
                채널 비밀번호를 저장하지 않고, 결과가 불분명한 작업을 자동으로
                다시 실행하지 않아요. 승인 밖의 게시와 고객 연락도 하지 않습니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
