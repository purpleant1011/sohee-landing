import { FAQ } from "@/components/faq";
export function FaqSection() {
  return (
    <section className="section shell faq-layout" aria-labelledby="faq-title">
      <div>
        <h2 id="faq-title">
          함께 일하기 전,
          <br />
          궁금한 것들.
        </h2>
        <p className="mt-5 text-muted-foreground">
          사장님의 기준으로 확인해 보세요.
        </p>
      </div>
      <FAQ />
    </section>
  );
}
