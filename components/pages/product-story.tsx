"use client";
import Image from "next/image";
import { useState } from "react";
import { PRODUCT_STEPS } from "@/lib/content";

export function ProductStory() {
  const [selectedId, setSelectedId] = useState<string>(PRODUCT_STEPS[0].id);
  const selected =
    PRODUCT_STEPS.find((step) => step.id === selectedId) ?? PRODUCT_STEPS[0];
  return (
    <div className="story-layout">
      <ol aria-label="소희가 일하는 일곱 장면" className="story-steps">
        {PRODUCT_STEPS.map((step, index) => (
          <li key={step.id}>
            <button
              type="button"
              aria-pressed={selected.id === step.id}
              onClick={() => setSelectedId(step.id)}
            >
              <span className="story-no">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{step.title}</strong>
                <small>{step.action}</small>
              </span>
            </button>
          </li>
        ))}
      </ol>
      <article className="story-stage" aria-live="polite">
        <Image
          src={selected.image}
          alt={selected.alt}
          width={1280}
          height={853}
          sizes="(max-width: 900px) 100vw, 640px"
        />
        <div>
          <p className="eyebrow">{selected.action}</p>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <ul className="chip-list">
            {selected.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
