import { WorkDemo } from "@/components/work-demo";
import { SectionIntro } from "./section-intro";
export function DemoSection() {
  return (
    <section
      id="demo"
      className="section demo-section"
      aria-labelledby="demo-title"
    >
      <div className="shell">
        <SectionIntro
          id="demo-title"
          title={
            <>
              우리 가게라면,
              <br />
              소희는 이렇게 일해요.
            </>
          }
        >
          업종을 고르고, 일을 따라가 보세요.
          <br />
          사장님의 한마디가 구체적인 업무가 됩니다.
        </SectionIntro>
        <WorkDemo />
      </div>
    </section>
  );
}
