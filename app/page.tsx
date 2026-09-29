import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { HandoffSection } from "@/components/landing/handoff-section";
import { DemoSection } from "@/components/landing/demo-section";
import { BookingSection } from "@/components/landing/booking-section";
import { BusinessLearningSection } from "@/components/landing/business-learning-section";
import { OwnerControlSection } from "@/components/landing/owner-control-section";
import { PartnershipSection } from "@/components/landing/partnership-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ClosingSection } from "@/components/landing/closing-section";
export const dynamic = "force-dynamic";
export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />

        <HandoffSection />

        <DemoSection />

        <BookingSection />

        <BusinessLearningSection />

        <OwnerControlSection />

        <PartnershipSection />

        <FaqSection />
        <ClosingSection />
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
