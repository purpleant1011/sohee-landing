import type { Metadata } from "next";
import Image from "next/image";
import { PageCta, PageHero, PageShell } from "@/components/pages/page-shell";
import { ProductStory } from "@/components/pages/product-story";
import { DELEGATION_BOUNDARIES } from "@/lib/content";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "제품 소개 | 소희",
  description:
    "소희는 고객 문의와 반응을 오늘의 일로 바꾸고, 답변·예약·콘텐츠·성과 확인까지 이어서 다음 행동을 제안하는 AI 마케팅 직원입니다.",
  alternates: { canonical: canonical("/product") },
  openGraph: { url: canonical("/product"), title: "제품 소개 | 소희" },
};

const flow = [
  ["신호 포착", "놓치면 안 되는 고객과 변화를 찾습니다."],
  ["대응과 행동", "답변, 상담, 콘텐츠와 승인을 준비합니다."],
  ["예약과 재방문", "실제 결과와 다음 관계를 확인합니다."],
] as const;

export default function ProductPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="제품 소개"
        title={
          <>
            고객 반응에서
            <br />
            다음 성장 행동까지.
          </>
        }
        lead="소희는 게시물을 만드는 도구가 아니라, 여러 채널의 고객 신호를 오늘의 일로 바꾸고 결과를 다음 실험으로 돌려주는 AI 마케팅 직원입니다."
      />
      <section className="shell sub-section" aria-label="소희의 업무 흐름">
        <ol className="flow-statement">
          {flow.map(([title, copy], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="sub-section story-section"
        aria-labelledby="story-title"
      >
        <div className="shell">
          <h2 id="story-title">소희가 실제로 일하는 일곱 장면</h2>
          <p className="sub-lead mb-10">
            장면을 눌러 고객 문의가 답변, 예약, 콘텐츠와 성과 확인으로 이어지는
            과정을 확인하세요. 화면의 그림은 이해를 돕는 설명용 예시입니다.
          </p>
          <ProductStory />
        </div>
      </section>
      <section
        className="shell sub-section"
        aria-labelledby="delegation-title"
      >
        <h2 id="delegation-title">
          자동화보다 먼저,
          <br />
          정확한 위임을 보여드려요.
        </h2>
        <p className="sub-lead">
          안전은 약속이 아니라 확인 가능한 과정이어야 한다고 생각해요.
        </p>
        <Image
          className="delegation-image"
          src="/landing/images/delegation-receipt.webp"
          alt="정확한 대상과 버전, 외부 실행 결과를 확인하는 소희"
          width={1280}
          height={853}
          sizes="(max-width: 900px) 100vw, 900px"
        />
        <div className="boundary-grid">
          {DELEGATION_BOUNDARIES.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <PageCta />
    </PageShell>
  );
}
