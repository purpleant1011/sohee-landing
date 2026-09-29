import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main
      id="main"
      className="shell flex min-h-screen flex-col items-start justify-center gap-6"
    >
      <h1 className="text-4xl font-bold">페이지를 찾지 못했어요.</h1>
      <p>소희의 첫 화면에서 다시 시작해 주세요.</p>
      <Button asChild>
        <a href="/landing/">소희 만나러 가기</a>
      </Button>
    </main>
  );
}
