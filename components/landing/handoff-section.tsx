import { Badge } from "@/components/ui/badge";
import { SoheeCharacter } from "@/components/sohee-character";
import { SectionIntro } from "./section-intro";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
  Store,
  TrendingUp,
} from "lucide-react";
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
export function HandoffSection() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
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
        무엇을 올릴지 고민하고, 문의에 답하고, 예약을 챙기고.
        <br />
        따로 하던 일을 소희가 하나의 흐름으로 연결해요.
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
            <Badge variant="outline" className="rounded-md px-3 py-2">
              목표 알려주기
            </Badge>
            <Badge variant="outline" className="rounded-md px-3 py-2">
              가격·운영 기준 정하기
            </Badge>
            <Badge variant="outline" className="rounded-md px-3 py-2">
              게시 전 승인하기
            </Badge>
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
            <SoheeCharacter alt="" className="avatar" />
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
                  <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                </div>
                <span className="sr-only">{i + 1}단계</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="outcome-strip" aria-label="소희와 함께 기대하는 변화">
        <div>
          <h3>영업 후에는 내 시간을</h3>
          <p>반복되는 홍보 준비와 응대 부담을 덜도록.</p>
        </div>
        <div>
          <h3>관심 손님은 방문 손님으로</h3>
          <p>게시물에서 시작된 대화를 예약까지 이어가도록.</p>
        </div>
        <div>
          <h3>다음 홍보에는 근거를</h3>
          <p>확인한 반응과 예약을 다음 제안에 반영하도록.</p>
        </div>
      </div>
      <p className="caption mt-5">
        콘텐츠 준비·승인·게시의 기본 흐름부터 검증하고 있어요. 상담·예약·알림 등
        연결 업무는 제공 조건에 따라 달라집니다.
      </p>
    </section>
  );
}
