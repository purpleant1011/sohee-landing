"use client";
import { SoheeCharacter } from "@/components/sohee-character";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Coffee,
  Download,
  Flower2,
  MessageCircle,
  Scissors,
  StretchHorizontal,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { scenarios, steps, createBrief } from "@/src/scenarios.mjs";
const industries = [
  { id: "cafe", Icon: Coffee },
  { id: "beauty", Icon: Scissors },
  { id: "flower", Icon: Flower2 },
  { id: "lesson", Icon: StretchHorizontal },
] as const;
type Industry = (typeof industries)[number]["id"];
export function WorkDemo() {
  const [industry, setIndustry] = useState<Industry>("cafe");
  const [stage, setStage] = useState("0");
  const [downloaded, setDownloaded] = useState(false);
  const scenario = scenarios[industry];
  function download() {
    const blob = new Blob([createBrief(industry)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `소희-${scenario.name.replaceAll("·", "-")}-업무예시.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return (
    <div className="workbench">
      <Tabs
        value={industry}
        onValueChange={(value) => {
          setIndustry(value as Industry);
          setDownloaded(false);
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border pb-6">
          <TabsList aria-label="가게 업종 선택" className="w-full sm:w-auto">
            {industries.map(({ id, Icon }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="flex-1 whitespace-nowrap px-2 text-xs sm:flex-none sm:px-5 sm:text-sm"
              >
                <Icon aria-hidden="true" className="hidden size-4 sm:block" />
                <span className="hidden sm:inline">{scenarios[id].name}</span>
                <span className="sm:hidden">
                  {scenarios[id].name.replace("·스튜디오", "").replace("·디저트", "")}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <span className="text-sm text-muted-foreground">
            서비스 이해를 위한 업무 예시
          </span>
        </div>
        {industries.map(({ id }) => (
          <TabsContent key={id} value={id} className="pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
              <span className="owner-label">사장님의 한마디</span>
              <p className="max-w-3xl text-xl font-semibold leading-relaxed sm:text-2xl">
                “{scenarios[id].goal}”
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="my-7 flex items-center gap-3 text-primary">
        <ArrowDown className="size-4" aria-hidden="true" />
        <span className="text-sm font-semibold">
          소희가 연결하는 네 가지 업무
        </span>
      </div>
      <Tabs value={stage} onValueChange={setStage} className="demo-layout">
        <TabsList
          aria-label="소희 업무 단계"
          className="stage-list bg-transparent p-0"
        >
          {steps.map((step, i) => (
            <TabsTrigger
              key={step.title}
              value={String(i)}
              className="stage-tab"
            >
              <span className="stage-number">{i + 1}</span>
              <span>{step.title}</span>
              <ArrowRight
                aria-hidden="true"
                className="ml-auto hidden size-4 md:block"
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {scenario.stages.map((item, i) => (
          <TabsContent
            key={`${industry}-${i}`}
            value={String(i)}
            className="demo-panel"
          >
            <div className="demo-explanation">
              <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                <Check className="size-4 shrink-0" aria-hidden="true" />
                {item.result}
              </p>
            </div>
            <div className="demo-conversation space-y-4">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <SoheeCharacter alt="" className="avatar" />
                <div>
                  <p className="font-semibold">소희의 업무 노트</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium">{item.detail}</p>
              <div className="speech customer-speech">
                <MessageCircle className="mb-2 size-4" aria-hidden="true" />
                {item.customer}
              </div>
              <p className="speech sohee-speech">{item.message}</p>

              {/* 소희의 결과물 카드 미리보기 */}
              <div className="mt-4 rounded-xl border border-border/80 bg-background/90 p-4 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold text-primary mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    소희가 완성한 업무 결과물
                  </span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold">
                    사장님 승인 대기
                  </span>
                </div>
                <div className="rounded-lg bg-muted/60 p-3 text-xs leading-relaxed space-y-1.5 font-mono text-zinc-700 dark:text-zinc-300">
                  <p className="font-semibold text-foreground font-sans">
                    {i === 0 && `📸 [인스타그램 피드 발행 초안]`}
                    {i === 1 && `💬 [1:1 고객 맞춤 응대 답변]`}
                    {i === 2 && `📅 [예약 확정 및 방문 안내 카드]`}
                    {i === 3 && `📊 [주간 마케팅 성과 및 다음 제안]`}
                  </p>
                  <p className="font-sans text-xs">
                    {i === 0 && `"${item.customer} ✨ ${item.detail} 소식을 전해요. 이번 주만 제공되는 특별한 혜택을 놓치지 마세요!"`}
                    {i === 1 && `"안녕하세요 고객님! 문의주신 ${item.detail} 안내드려요. ${item.message}"`}
                    {i === 2 && `"고객님의 ${item.detail} 예약이 접수되었습니다. 방문 전날 확인 알림을 다시 보내드릴게요!"`}
                    {i === 3 && `"지난 피드를 통해 ${item.result}을 달성했어요. 사장님 기준에 맞춘 다음 실험을 준비할게요."`}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          업무 예시를 저장하고, 우리 가게에 필요한 일을 골라보세요.
        </p>
        <Button variant="outline" onClick={download}>
          <Download aria-hidden="true" />
          선택한 업종 업무 예시 저장
        </Button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-right text-sm text-primary">
        {downloaded ? "업무 예시를 텍스트 파일로 저장했어요." : ""}
      </p>
    </div>
  );
}
