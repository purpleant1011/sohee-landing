import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://sohee.ai.kr"),
  title: "소희 | 사장님은 가게에, 마케팅은 소희에게",
  description:
    "우리 가게를 배우고 홍보 일을 맡는 AI 마케팅 직원 소희. 프로모션 기획부터 포스팅, 고객 대화, 예약·예약금 확인과 성과 보고까지 함께하세요.",
  alternates: { canonical: "/landing/" },
  icons: { icon: "/landing/favicon.svg" },
  openGraph: {
    title: "사장님은 가게에. 마케팅은 소희에게.",
    description: "우리 가게를 배우는 AI 마케팅 직원 소희",
    url: "/landing/",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/landing/images/sohee-hero.webp",
        width: 1536,
        height: 1024,
        alt: "사장님과 함께 일하는 소희",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f2",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <a href="#main" className="skip-link">
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
