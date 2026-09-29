import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionIntro } from "./section-intro";
import {
  Bell,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  CreditCard,
  MessageCircle,
  Scissors,
  Store,
  Users,
} from "lucide-react";
function Notification({ owner = false }: { owner?: boolean }) {
  return (
    <Card className="notification gap-0 border-0 shadow-none">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <MessageCircle className="size-4" aria-hidden="true" />
          소희 카카오톡
        </span>
        <span className="text-xs text-muted-foreground">방문 전날 · 예시</span>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="recipient-icon">
          {owner ? <Store aria-hidden="true" /> : <Users aria-hidden="true" />}
        </span>
        <h4 className="font-bold">{owner ? "사장님에게" : "예약 손님에게"}</h4>
      </div>
      <p className="mt-4 text-lg font-semibold">
        {owner ? "사장님, 내일 예약이 있어요." : "내일, 가게에서 만나요."}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {owner ? (
          <>
            내일 오후 2시, 네일 예약 1건이 있어요.
            <br />
            예약금 확인 완료 · 요청 사항을 확인해 주세요.
          </>
        ) : (
          <>
            내일 오후 2시, 네일 예약이 있어요.
            <br />
            방문 위치와 준비 사항을 함께 안내해 드려요.
          </>
        )}
      </p>
      <div className="mt-5 border-t border-border pt-3 text-center text-sm font-semibold">
        {owner ? "예약 일정과 요청 사항 확인" : "방문 정보와 예약 내용 확인"}
      </div>
    </Card>
  );
}
export function BookingSection() {
  return (
    <section
      id="booking"
      className="section shell"
      aria-labelledby="booking-title"
    >
      <SectionIntro
        id="booking-title"
        title={
          <>
            “예약할게요” 다음까지,
            <br />
            <span className="text-primary">소희가 챙기는 한 흐름.</span>
          </>
        }
      >
        고객 대화가 일정이 되고,
        <br />
        약속한 방문을 잊지 않도록 양쪽에 알려요.
      </SectionIntro>
      <div className="journey-heading">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <Scissors className="size-4" aria-hidden="true" />
          네일숍 예약을 예로 살펴볼까요?
        </p>
        <span className="text-xs text-muted-foreground">
          실제 예약·입금·메시지 발송 화면이 아닌 설명용 예시
        </span>
      </div>
      <ol className="booking-stages">
        <li>
          <div className="step-heading">
            <span>1</span>
            <h3>대화로 방문 의사 확인</h3>
          </div>
          <div className="booking-surface">
            <p className="text-xs font-semibold text-muted-foreground">
              관심 고객과 소희의 1:1 대화
            </p>
            <p className="speech customer-speech">
              이 디자인, 목요일 오후에도 가능할까요?
            </p>
            <p className="speech sohee-speech">
              네, 가능한 시간을 확인했어요. 오후 2시로 예약을 도와드릴까요?
            </p>
            <p className="speech customer-speech">좋아요. 예약할게요!</p>
          </div>
        </li>
        <li>
          <div className="step-heading">
            <span>2</span>
            <h3>예약금 확인 후 예약 확정</h3>
          </div>
          <div className="booking-surface">
            <CreditCard
              className="mb-5 size-7 text-primary"
              aria-hidden="true"
            />
            <h4 className="text-lg font-bold">예약금도 상태가 명확하게.</h4>
            <ul className="deposit-status">
              <li>
                <Check aria-hidden="true" />
                예약금 안내
              </li>
              <li>
                <Clock3 aria-hidden="true" />
                확인 전에는 입금 대기
              </li>
              <li className="confirmed">
                <CircleCheck aria-hidden="true" />
                확인 근거가 생기면 완료
              </li>
            </ul>
            <p className="text-xs leading-relaxed text-muted-foreground">
              확인되지 않은 입금을 완료로 처리하지 않아요.
            </p>
          </div>
        </li>
        <li>
          <div className="step-heading">
            <span>3</span>
            <h3>사장님 일정에 한 번에 정리</h3>
          </div>
          <div className="booking-surface calendar-preview">
            <div className="mb-5 flex items-center justify-between">
              <h4 className="font-bold">우리 가게 예약 일정</h4>
              <CalendarDays
                className="size-5 text-primary"
                aria-hidden="true"
              />
            </div>
            <div className="calendar-week" aria-hidden="true">
              {["월", "화", "수", "목", "금"].map((d) => (
                <span key={d} className={d === "목" ? "selected-day" : ""}>
                  {d}
                </span>
              ))}
            </div>
            <div className="calendar-event">
              <span className="text-sm font-bold tabular-nums">14:00</span>
              <div>
                <p className="font-bold">네일 시술 예약</p>
                <p className="mt-1 text-xs">예약금 확인 완료</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  희망 디자인 · 상담 내용 함께 보기
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              가능 시간과 예약 변경은 사장님 기준으로 관리해요.
            </p>
          </div>
        </li>
      </ol>
      <div className="reminder-connector">
        <Separator className="flex-1" />
        <p>
          <Bell className="size-4" aria-hidden="true" />
          <strong>방문 전날</strong> 소희가 양쪽에 알려요.
        </p>
        <Separator className="flex-1" />
      </div>
      <div className="notification-grid">
        <Notification />
        <Notification owner />
      </div>
      <p className="caption mt-5">
        카카오톡 알림은 채널 연결과 필요한 수신 동의를 갖춘 범위에서 제공돼요.
        예약금 확인 방식과 실제 제공 기능은 도입 시 확인합니다.
      </p>
    </section>
  );
}
