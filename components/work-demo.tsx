"use client";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
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
  { id: "beauty", Icon: Scissors },
  { id: "flower", Icon: Flower2 },
  { id: "lesson", Icon: StretchHorizontal },
] as const;
type Industry = (typeof industries)[number]["id"];
export function WorkDemo() {
  const [industry, setIndustry] = useState<Industry>("beauty");
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
                  {scenarios[id].name.replace("·스튜디오", "")}
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
            <div className="demo-conversation">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <img
                  src="/landing/images/sohee-guide.webp"
                  width="48"
                  height="48"
                  alt=""
                  className="avatar"
                />
                <div>
                  <p className="font-semibold">소희의 업무 노트</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium">{item.detail}</p>
              <div className="speech customer-speech">
                <MessageCircle className="mb-2 size-4" aria-hidden="true" />
                {item.customer}
              </div>
              <p className="speech sohee-speech">{item.message}</p>
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
