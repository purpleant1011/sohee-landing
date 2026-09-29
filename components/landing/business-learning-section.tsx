import { SoheeCharacter } from "@/components/sohee-character";
import { SectionIntro } from "./section-intro";
import {
  ArrowDown,
  Check,
  Coffee,
  Flower2,
  GraduationCap,
  Scissors,
  ShoppingBag,
  Dumbbell,
} from "lucide-react";
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
export function BusinessLearningSection() {
  return (
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
              소희가 배우는 건 <span className="text-primary">우리 가게.</span>
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
            <SoheeCharacter alt="매장 정보를 배우는 소희" />
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
  );
}
