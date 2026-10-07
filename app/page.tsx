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
import { ChannelsSection } from "@/components/landing/channels-section";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: canonical("/") },
  openGraph: { url: canonical("/") },
};
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

        <ChannelsSection />

        <PartnershipSection />

        <FaqSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  );
}
