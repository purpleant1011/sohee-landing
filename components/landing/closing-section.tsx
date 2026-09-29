import { SoheeCharacter } from "@/components/sohee-character";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
export function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="shell closing-layout">
        <div>
          <h2 id="closing-title">
            다음 홍보를 고민할 때,
            <br />
            소희라는 직원이 있다면.
          </h2>
          <p className="mt-5 leading-relaxed">
            손님을 더 잘 맞이할 시간은 사장님께.
            <br />
            가게를 알리고 방문으로 잇는 일은 소희와 함께.
          </p>
          <Button
            asChild
            className="mt-8 bg-background text-foreground hover:bg-background/90"
          >
            <a href="#demo">
              우리 가게에 맡길 일 찾아보기
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-white/85">
            가입 없이 업종별 예시 확인 · 업무 계획 저장
          </p>
        </div>
        <SoheeCharacter className="closing-character" />
      </div>
    </section>
  );
}
