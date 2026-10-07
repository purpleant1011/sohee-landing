import { ArrowUpRight } from "lucide-react";
import { CHANNELS } from "@/lib/content";

export function ChannelsSection() {
  return (
    <section
      id="channels"
      className="section channels-section"
      aria-labelledby="channels-teaser-title"
    >
      <div className="shell">
        <div className="section-intro">
          <h2 id="channels-teaser-title">
            자동화라는 한마디 대신,
            <br />
            실제 가능한 범위를 보여드려요.
          </h2>
          <p>
            채널마다 공식 연결, 감독형 실행, 사장님 최종 게시가 달라요. 구매
            전에 어디까지 소희가 준비하는지 확인하세요.
          </p>
        </div>
        <ul className="channel-cards">
          {CHANNELS.map((channel) => (
            <li key={channel.id}>
              <h3>{channel.name}</h3>
              <p>{channel.soheeWork}</p>
              <span className="status-chip">{channel.mode}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href="/channels"
            className="inline-flex min-h-12 items-center gap-2 font-semibold text-primary underline underline-offset-4"
          >
            채널별 연결 수준 자세히 보기
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="/product"
            className="inline-flex min-h-12 items-center gap-2 font-semibold underline underline-offset-4"
          >
            소희가 일하는 일곱 장면 보기
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
