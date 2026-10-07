import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="sub-hero shell" aria-labelledby="page-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p className="sub-lead">{lead}</p>
      {children}
    </section>
  );
}

export function PageCta({
  title = "우리 가게에 맡길 일 찾아보기",
}: {
  title?: string;
}) {
  return (
    <section className="sub-cta" aria-label="다음 행동">
      <div className="shell sub-cta-inner">
        <h2>{title}</h2>
        <div className="flex flex-wrap gap-3">
          <a className="sub-btn sub-btn-light" href="/#demo">
            업종별 업무 예시 보기
          </a>
          <a className="sub-btn sub-btn-ghost" href="/signup">
            회원가입
          </a>
          <a className="sub-btn sub-btn-ghost" href="/login">
            로그인
          </a>
        </div>
      </div>
    </section>
  );
}
