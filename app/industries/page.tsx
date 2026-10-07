import type { Metadata } from "next";
import Image from "next/image";
import { PageCta, PageHero, PageShell } from "@/components/pages/page-shell";
import { INDUSTRIES } from "@/lib/content";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "업종별 활용 | 소희",
  description:
    "미용, 외식, 교육, 생활 서비스. 업종마다 다른 고객 질문에서 예약·방문·등록까지 소희가 이어서 준비하는 일을 확인하세요.",
  alternates: { canonical: canonical("/industries") },
  openGraph: { url: canonical("/industries"), title: "업종별 활용 | 소희" },
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="업종별 활용"
        title={
          <>
            우리 업종의 손님은
            <br />
            어떤 질문을 할까요?
          </>
        }
        lead="업종마다 고객이 먼저 묻는 것이 달라요. 소희는 그 질문에서 시작해 예약, 방문, 등록까지 이어지는 일을 준비합니다."
      />
      <section className="shell sub-section" aria-label="업종 목록">
        <ul className="industry-grid">
          {INDUSTRIES.map((industry) => (
            <li key={industry.slug}>
              <a href={`/industries/${industry.slug}`}>
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  width={1280}
                  height={853}
                  sizes="(max-width: 800px) 100vw, 560px"
                />
                <div>
                  <span className="eyebrow">{industry.label}</span>
                  <h2>{industry.headline}</h2>
                  <p>“{industry.customerQuestion}”</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <PageCta />
    </PageShell>
  );
}
