import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="mt-7 max-w-md scroll-mt-24 rounded-3xl border border-border bg-card/95 p-5 shadow-sm sm:p-6"
    >
      <h2 id="waitlist-title" className="text-lg font-semibold tracking-tight text-foreground">
        소희, 곧 정식 오픈해요
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        지금은 초대받은 테스터만 이용할 수 있어요. 메일 주소를 남겨두시면
        오픈하는 날 가장 먼저 알려드려요.
      </p>
      <div className="mt-4">
        <WaitlistForm variant="hero" idPrefix="hero" />
      </div>
    </section>
  );
}
