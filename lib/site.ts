export const SITE_URL = "https://sohee.ai.kr";
export const CONTACT_EMAIL = "support@sohee.ai.kr";
export const LEGAL_EFFECTIVE_DATE = "2026년 10월 7일";

/** Public URLs are served at the domain root; the worker maps them onto the /landing basePath. */
export const canonical = (path: string) =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/?$/, "")}`;

export const mainNav = [
  { href: "/#work", label: "소희가 하는 일" },
  { href: "/product", label: "제품" },
  { href: "/channels", label: "연결 채널" },
  { href: "/industries", label: "업종별 활용" },
] as const;

export const footerGroups = [
  {
    title: "서비스",
    links: [
      { href: "/product", label: "제품 소개" },
      { href: "/channels", label: "연결 채널과 검증 범위" },
      { href: "/industries", label: "업종별 활용" },
      { href: "/#demo", label: "업종별 업무 예시" },
    ],
  },
  {
    title: "계정",
    links: [
      { href: "/login", label: "로그인" },
      { href: "/#waitlist", label: "오픈 알림 신청" },
    ],
  },
  {
    title: "정책과 안내",
    links: [
      { href: "/privacy", label: "개인정보 처리방침" },
      { href: "/terms", label: "이용약관" },
      { href: "/data-deletion", label: "사용자 데이터 삭제" },
    ],
  },
] as const;
