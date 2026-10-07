import { LEGAL_EFFECTIVE_DATE } from "@/lib/site";
import { PageShell } from "./page-shell";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalDocument({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <section className="sub-hero shell" aria-labelledby="page-title">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="sub-lead">{intro}</p>
        <p className="caption mt-4">시행일 {LEGAL_EFFECTIVE_DATE}</p>
      </section>
      <div className="shell legal-layout">
        <nav aria-label="문서 목차" className="legal-toc">
          <p>목차</p>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="legal-body">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`}>
                {i + 1}. {s.title}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
