import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageCta, PageHero, PageShell } from "@/components/pages/page-shell";
import { INDUSTRIES } from "@/lib/content";
import { canonical } from "@/lib/site";

// Rendered on demand like the home page: OpenNext has no incremental cache backend here.
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { industry } = await params;
  const item = INDUSTRIES.find((i) => i.slug === industry);
  if (!item) return {};
  const url = canonical(`/industries/${item.slug}`);
  return {
    title: `${item.label} 업종 활용 | 소희`,
    description: `${item.headline}. ${item.soheeAction}`,
    alternates: { canonical: url },
    openGraph: { url, title: `${item.label} 업종 활용 | 소희` },
  };
}

export default async function IndustryPage({ params }: Params) {
  const { industry } = await params;
  const item = INDUSTRIES.find((i) => i.slug === industry);
  if (!item) notFound();
  return (
    <PageShell>
      <PageHero
        eyebrow={`${item.label} 업종`}
        title={item.headline}
        lead={`“${item.customerQuestion}”`}
      />
      <section className="shell sub-section industry-detail">
        <Image
          src={item.image}
          alt={item.alt}
          width={1280}
          height={853}
          priority
          sizes="(max-width: 900px) 100vw, 620px"
        />
        <dl>
          <div>
            <dt>놓치기 쉬운 순간</dt>
            <dd>{item.missedAction}</dd>
          </div>
          <div>
            <dt>소희가 준비하는 일</dt>
            <dd>{item.soheeAction}</dd>
          </div>
          <div>
            <dt>이어지는 결과</dt>
            <dd>{item.outcome}</dd>
          </div>
        </dl>
      </section>
      <section className="sub-section tint" aria-labelledby="topics-title">
        <div className="shell">
          <h2 id="topics-title">소희가 제안하는 다음 콘텐츠 소재</h2>
          <ul className="chip-list large">
            {item.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className="caption mt-6">
            업종별 예시이며 실제 성과나 고객 수를 보장하지 않습니다. 게시 전에는
            사장님이 확인하고 승인합니다.
          </p>
          <nav aria-label="다른 업종" className="mt-8 flex flex-wrap gap-3">
            {INDUSTRIES.filter((i) => i.slug !== item.slug).map((other) => (
              <a key={other.slug} className="sub-btn sub-btn-outline" href={`/industries/${other.slug}`}>
                {other.label} 보기
              </a>
            ))}
          </nav>
        </div>
      </section>
      <PageCta />
    </PageShell>
  );
}
