import { CONTACT_EMAIL, footerGroups } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="사이트 정보">
      <div className="shell site-footer-grid">
        <div>
          <a href="/" className="wordmark text-foreground" aria-label="소희, 처음으로">
            sohee<span>.</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            우리 가게를 배우고 홍보 일을 맡는 AI 마케팅 직원, 소희.
            <br />
            외부 게시는 사장님의 확인과 승인 뒤에 진행합니다.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            문의{" "}
            <a
              className="font-semibold text-foreground underline underline-offset-4"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="site-footer-title">{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="shell site-footer-base">
        <p>© 2026 소희 (sohee.ai.kr). All rights reserved.</p>
        <p>이 사이트의 업무 화면 예시는 이해를 돕기 위한 설명용이며 실제 성과를 보장하지 않습니다.</p>
      </div>
    </footer>
  );
}
