import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  CheckCheck,
  CircleCheck,
  Clock3,
  Coffee,
  CreditCard,
  Flower2,
  GraduationCap,
  MessageCircle,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Dumbbell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { WorkDemo } from "@/components/work-demo";
import { FAQ } from "@/components/faq";
export const dynamic = "force-dynamic";
const workflow = [
  {
    Icon: Sparkles,
    title: "손님이 올 이유를 만들고",
    detail: "프로모션 기획 · 이미지와 글 · 승인 후 게시",
  },
  {
    Icon: MessageCircle,
    title: "관심을 대화로 이어가고",
    detail: "문의 응대 · 1:1 상담 · 방문 의사 확인",
  },
  {
    Icon: CalendarDays,
    title: "대화를 방문으로 연결하고",
    detail: "예약 · 예약금 확인 · 방문 전날 알림",
  },
  {
    Icon: TrendingUp,
    title: "결과를 다음 홍보에 반영해요",
    detail: "확인된 성과 보고 · 다음 프로모션 제안",
  },
];
const industries = [
  { Icon: Scissors, title: "뷰티·살롱", text: "시술 메뉴와 빈 예약 시간" },
  { Icon: Coffee, title: "카페·음식점", text: "시즌 메뉴와 방문할 이유" },
  { Icon: GraduationCap, title: "교육·클래스", text: "수업 특징과 체험 일정" },
  { Icon: Flower2, title: "꽃집·공방", text: "상품 취향과 주문·픽업 기준" },
  { Icon: Dumbbell, title: "운동·스튜디오", text: "프로그램과 체험 상담" },
  {
    Icon: ShoppingBag,
    title: "리테일·생활 서비스",
    text: "상품 정보와 자주 묻는 질문",
  },
];
function SectionIntro({
  id,
  title,
  children,
}: {
  id: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
function Notification({ owner = false }: { owner?: boolean }) {
  return (
    <div className="notification">
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
    </div>
  );
}
export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              사장님은 가게에.
              <br />
              마케팅은 <span>소희에게.</span>
            </h1>
            <p className="hero-description">
              손님을 맞이하는 동안에도,
              <br />
              우리 가게를 알리는 일은 이어지도록.
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              가게를 배우고, 먼저 제안하고, 홍보 일을 맡는
              <br className="hidden sm:block" />
              <strong className="font-semibold text-foreground">
                월 구독 AI 마케팅 직원, 소희
              </strong>
              를 만나보세요.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button asChild>
                <a href="#demo">
                  우리 가게에 맡겨보기
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href="#work"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold"
              >
                어떤 일을 하나요?
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <figure>
              <Image
                src="/landing/images/sohee-hero.webp"
                alt="꽃집 사장님이 손님을 맞이하는 동안 태블릿으로 홍보 일을 챙기는 소희"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 800px) 100vw, 55vw"
                className="hero-image"
              />
              <figcaption className="flex items-center justify-between gap-3 px-1 py-4 text-xs text-muted-foreground">
                <span>
                  <strong className="mr-2 text-base text-foreground">
                    소희
                  </strong>
                  우리 가게 마케팅 담당
                </span>
                <span className="hero-art-caption">
                  함께 일하는 모습을 그린 이미지
                </span>
              </figcaption>
            </figure>
            <div className="daily-note">
              <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                <span className="size-2 rounded-full bg-primary" />
                소희의 오늘 제안
              </span>
              <p className="mt-3 text-lg font-bold leading-snug">
                “이번 주 빈 시간을
                <br />
                손님 만날 기회로 바꿔볼까요?”
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-4" aria-hidden="true" />
                가게 상황을 살피고, 다음 일을 먼저 제안해요.
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="section shell"
          aria-labelledby="work-title"
        >
          <SectionIntro
            id="work-title"
            title={
              <>
                사장님 손에 남던 일,
                <br />
                <span className="text-primary">한 명의 직원에게 이어서.</span>
              </>
            }
          >
            사진 한 장을 올린 뒤에도 할 일이 많으니까.
            <br />
            소희는 홍보의 앞뒤를 함께 챙깁니다.
          </SectionIntro>
          <div className="handoff">
            <div className="owner-side">
              <div className="flex items-center gap-3">
                <Store className="size-6" aria-hidden="true" />
                <h3 className="text-xl font-bold">사장님은 방향을 정해요.</h3>
              </div>
              <p className="my-6 text-2xl font-semibold leading-snug">
                “평일 오후에
                <br />
                손님이 더 오면 좋겠어요.”
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="small-tag">목표 알려주기</span>
                <span className="small-tag">가격·운영 기준 정하기</span>
                <span className="small-tag">게시 전 승인하기</span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                메뉴도, 손님도 가장 잘 아는 사장님.
                <br />
                중요한 결정은 계속 사장님의 몫이에요.
              </p>
            </div>
            <div className="handoff-arrow" aria-hidden="true">
              <ArrowRight />
            </div>
            <div className="sohee-side">
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/landing/images/sohee-guide.webp"
                  alt=""
                  width={56}
                  height={56}
                  className="avatar"
                />
                <div>
                  <h3 className="text-xl font-bold">소희는 일을 연결해요.</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    기획부터 결과를 살피는 일까지
                  </p>
                </div>
              </div>
              <ol className="workflow-list">
                {workflow.map(({ Icon, title, detail }, i) => (
                  <li key={title}>
                    <span className="workflow-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                    <span className="sr-only">{i + 1}단계</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="caption mt-5">
            콘텐츠 준비·승인·게시의 기본 흐름부터 검증하고 있어요.
            상담·예약·알림 등 연결 업무는 제공 조건에 따라 달라집니다.
          </p>
        </section>

        <section
          id="demo"
          className="section demo-section"
          aria-labelledby="demo-title"
        >
          <div className="shell">
            <SectionIntro
              id="demo-title"
              title={
                <>
                  우리 가게라면,
                  <br />
                  소희는 이렇게 일해요.
                </>
              }
            >
              업종을 고르고, 일을 따라가 보세요.
              <br />
              사장님의 한마디가 구체적인 업무가 됩니다.
            </SectionIntro>
            <WorkDemo />
          </div>
        </section>

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
            <span />
            <p>
              <Bell className="size-4" aria-hidden="true" />
              <strong>방문 전날</strong> 소희가 양쪽에 알려요.
            </p>
            <span />
          </div>
          <div className="notification-grid">
            <Notification />
            <Notification owner />
          </div>
          <p className="caption mt-5">
            카카오톡 알림은 채널 연결과 필요한 수신 동의를 갖춘 범위에서
            제공돼요. 예약금 확인 방식과 실제 제공 기능은 도입 시 확인합니다.
          </p>
        </section>

        <section
          id="business-learning"
          className="section learning-section"
          aria-labelledby="learning-title"
        >
          <div className="shell">
            <SectionIntro
              id="learning-title"
              title={
                <>
                  업종은 달라도,
                  <br />
                  소희가 배우는 건{" "}
                  <span className="text-primary">우리 가게.</span>
                </>
              }
            >
              어떤 일을 하는지, 손님은 무엇을 궁금해하는지.
              <br />
              매장 정보와 피드백이 쌓일수록 더 구체적으로 제안해요.
            </SectionIntro>
            <div className="industry-directory">
              {industries.map(({ Icon, title, text }) => (
                <div key={title} className="industry-item">
                  <Icon aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="learning-diagram">
              <div className="learning-input">
                <h3 className="mb-5 text-lg font-bold">사장님이 알려주면</h3>
                <ul>
                  {[
                    "메뉴·상품·서비스 가격",
                    "가게만의 장점과 말투",
                    "운영 시간과 예약 기준",
                    "고객 질문과 사장님의 수정",
                  ].map((t) => (
                    <li key={t}>
                      <Check className="size-4" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="learning-core">
                <Image
                  src="/landing/images/sohee-guide.webp"
                  alt="매장 정보를 배우는 소희"
                  width={160}
                  height={160}
                />
                <h3 className="text-xl font-bold">우리 가게를 아는 소희</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  매장 정보 + 대화 + 피드백
                </p>
              </div>
              <div className="learning-output">
                <h3 className="mb-5 text-lg font-bold">
                  이렇게 구체적으로 바뀌어요.
                </h3>
                <p className="text-sm text-muted-foreground">처음엔</p>
                <p className="mt-1 text-lg">“이달의 네일을 소개해볼까요?”</p>
                <ArrowDown
                  className="my-4 size-5 text-primary"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-primary">
                  우리 가게를 알게 되면
                </p>
                <p className="mt-1 text-lg font-bold leading-relaxed">
                  “목요일 빈 시간에 맞춰,
                  <br />
                  직장인 손님이 찾던
                  <br />
                  차분한 디자인을 소개할까요?”
                </p>
              </div>
            </div>
            <p className="caption mt-5">
              다양한 소상공인 업종을 위한 방향을 보여주는 예시예요. 업종과 연결
              채널에 따라 가능한 업무가 다르며, 성과를 보장하지 않습니다.
            </p>
          </div>
        </section>

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
                <ShieldCheck
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
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
                    소희의 초안을 보고 문구·이미지·조건을 수정해요. 승인된
                    내용으로 게시를 이어갑니다.
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
                    게시 반응, 고객 문의, 확정 예약을 나눠 보고해요. 확인되지
                    않은 예약이나 매출을 성과로 부풀리지 않아요.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

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
              필요한 업무를 살펴보는 구성 예시이며 확정 요금제·계약 조건이
              아닙니다. 실제 제공 범위는 채널 연결과 운영 조건에 따라 달라져요.
            </p>
          </div>
        </section>

        <section
          className="section shell faq-layout"
          aria-labelledby="faq-title"
        >
          <div>
            <h2 id="faq-title">
              함께 일하기 전,
              <br />
              궁금한 것들.
            </h2>
            <p className="mt-5 text-muted-foreground">
              사장님의 기준으로 확인해 보세요.
            </p>
          </div>
          <FAQ />
        </section>
        <section className="closing-section" aria-labelledby="closing-title">
          <div className="shell closing-layout">
            <div>
              <h2 id="closing-title">
                내일의 홍보까지,
                <br />
                오늘 혼자 고민하지 마세요.
              </h2>
              <p className="mt-5 leading-relaxed">
                우리 가게에 어떤 일을 맡길 수 있을지,
                <br />
                소희의 업무 예시부터 살펴보세요.
              </p>
              <Button
                asChild
                className="mt-8 bg-background text-foreground hover:bg-background/90"
              >
                <a href="#demo">
                  우리 가게와 소희, 일해보기
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <Image
              src="/landing/images/sohee-guide.webp"
              alt="함께 일할 준비를 마친 AI 마케팅 직원 소희"
              width={300}
              height={300}
              className="closing-character"
            />
          </div>
        </section>
      </main>
      <footer className="shell flex flex-col justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <a
          href="#top"
          className="wordmark text-foreground"
          aria-label="소희, 처음으로"
        >
          sohee<span>.</span>
        </a>
        <p>소희 · 우리 가게를 배우는 AI 마케팅 직원</p>
        <a href="#demo" className="underline underline-offset-4">
          업종별 업무 예시 보기
        </a>
      </footer>
    </>
  );
}
