import { WaitlistForm } from "./waitlist-form";

export function WaitlistBar() {
  return (
    <aside
      role="region"
      aria-label="정식 오픈 알림"
      className="bg-[#292333] text-white"
    >
      <div className="shell flex min-h-14 items-center justify-between gap-4 py-2">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 px-2.5 py-1 text-[11px] font-semibold">
            <span className="size-1.5 rounded-full bg-[#c5afd9]" aria-hidden="true" />
            비공개 테스트 중
          </span>
          <span>소희는 곧 정식 오픈해요. 오픈 소식을 가장 먼저 받아보세요.</span>
        </div>
        <div className="shrink-0 sm:w-64">
          <WaitlistForm variant="bar" idPrefix="bar" />
        </div>
      </div>
    </aside>
  );
}
