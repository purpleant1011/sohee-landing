import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { WaitlistSection } from "./waitlist-section";
export function HeroSection() {
  return (
    <section id="top" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          사장님은 가게에.
          <br />
          마케팅은 <span>소희에게.</span>
        </h1>
        <p className="hero-description">
          영업이 끝나도,
          <br />
          홍보 일이 남아 있나요?
        </p>
        <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
          기획부터 게시, 고객 대화와 예약까지.
          <br className="hidden sm:block" />
          <strong className="font-semibold text-foreground">
            월 구독 AI 마케팅 직원, 소희
          </strong>
          에게 연결해 맡겨보세요.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button asChild>
            <a href="#demo">
              우리 업종의 업무 예시 보기
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
        <p className="mt-4 text-xs text-muted-foreground">
          가입 없이 확인하고, 우리 가게 업무 예시를 저장하세요.
        </p>
        <WaitlistSection />
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
              <strong className="mr-2 text-base text-foreground">소희</strong>
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
  );
}
