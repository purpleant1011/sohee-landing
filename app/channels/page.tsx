import type { Metadata } from "next";
import { PageCta, PageHero, PageShell } from "@/components/pages/page-shell";
import { CHANNELS } from "@/lib/content";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "연결 채널과 검증 범위 | 소희",
  description:
    "인스타그램·스레드·네이버 블로그·네이버 플레이스·당근 비즈프로필에서 소희가 어디까지 준비하고 사장님이 무엇을 마무리하는지, 채널별 검증 상태를 안내합니다.",
  alternates: { canonical: canonical("/channels") },
  openGraph: { url: canonical("/channels"), title: "연결 채널과 검증 범위 | 소희" },
};

const levels = [
  ["공식 연결 검증 완료", "해당 플랫폼의 공식 연결(OAuth)로 계정을 확인하고, 사장님이 승인한 내용만 게시하는 흐름을 확인했습니다."],
  ["감독형 실행 검증 완료", "소희가 제출 묶음을 준비하고, 보호된 공식 화면에서 사장님이 대상과 반영 결과를 확인하는 흐름을 확인했습니다."],
  ["사용자 최종 게시 흐름 검증 완료", "소희가 제목·본문·이미지 순서를 준비하고, 공식 글쓰기 화면에서 사장님이 최종 게시를 마치는 흐름을 확인했습니다."],
] as const;

export default function ChannelsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="연결 채널"
        title={
          <>
            자동화라는 한마디 대신,
            <br />
            실제 가능한 범위를 보여드려요.
          </>
        }
        lead="공식 연결, 감독형 실행과 사장님 최종 게시를 구분해 두었어요. 구매 전에 채널마다 어디까지 소희가 준비하는지 확인할 수 있습니다."
      />
      <section className="shell sub-section" aria-labelledby="channel-table-title">
        <h2 id="channel-table-title" className="sr-only">
          채널별 연결 수준
        </h2>
        <div className="table-wrap">
          <table className="channel-table">
            <caption className="sr-only">채널별 고객 행동, 소희가 준비하는 일, 사장님이 마무리하는 일과 현재 검증 상태</caption>
            <thead>
              <tr>
                <th scope="col">채널</th>
                <th scope="col">고객 행동</th>
                <th scope="col">소희가 준비하는 일</th>
                <th scope="col">사장님이 마무리하는 일</th>
                <th scope="col">현재 검증 상태</th>
              </tr>
            </thead>
            <tbody>
              {CHANNELS.map((channel) => (
                <tr key={channel.id}>
                  <th scope="row">{channel.name}</th>
                  <td data-label="고객 행동">{channel.customerAction}</td>
                  <td data-label="소희가 준비하는 일">{channel.soheeWork}</td>
                  <td data-label="사장님이 마무리하는 일">{channel.ownerFinish}</td>
                  <td data-label="현재 검증 상태">
                    <span className="status-chip">{channel.mode}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="sub-section tint" aria-labelledby="levels-title">
        <div className="shell">
          <h2 id="levels-title">검증 상태는 이렇게 읽어요</h2>
          <dl className="level-list">
            {levels.map(([term, desc]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="shell sub-section" aria-labelledby="channel-safety-title">
        <h2 id="channel-safety-title">연결할 때 지키는 원칙</h2>
        <ul className="principle-list">
          <li>
            <strong>필요한 권한만 요청해요.</strong>
            <span>인스타그램과 스레드는 계정 확인과 승인된 게시에 필요한 권한만 요청하며, 받은 접속 정보는 암호화해 보관합니다.</span>
          </li>
          <li>
            <strong>사장님이 승인해야 게시돼요.</strong>
            <span>초안을 보고 확인한 뒤 &lsquo;발행&rsquo;을 누르고 한 번 더 확인해야만 외부 채널에 게시됩니다.</span>
          </li>
          <li>
            <strong>비밀번호는 저장하지 않아요.</strong>
            <span>채널 로그인 비밀번호는 소희에 입력하거나 저장하지 않습니다. 언제든 연결을 끊고 데이터 삭제를 요청할 수 있어요.</span>
          </li>
        </ul>
        <p className="caption mt-6">
          개인정보와 연결 계정 데이터의 처리 방식은{" "}
          <a className="underline underline-offset-4" href="/privacy">개인정보 처리방침</a>
          , 삭제 요청은{" "}
          <a className="underline underline-offset-4" href="/data-deletion">사용자 데이터 삭제 안내</a>
          에서 확인하세요.
        </p>
      </section>
      <PageCta />
    </PageShell>
  );
}
