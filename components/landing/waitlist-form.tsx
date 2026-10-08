"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isValidEmail, normalizeEmail } from "@/lib/waitlist";

type Variant = "bar" | "hero" | "closing";
type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  variant,
  idPrefix,
}: {
  variant: Variant;
  idPrefix: string;
}) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const emailId = `${idPrefix}-email`;
  const errorId = `${idPrefix}-error`;
  const isBar = variant === "bar";
  const isClosing = variant === "closing";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    if (!isValidEmail(email)) {
      setError("이메일 주소를 다시 확인해 주세요.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("loading");
    try {
      const response = await fetch("/landing/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizeEmail(email), website }),
      });
      const result: unknown = await response.json();

      if (
        response.ok &&
        result &&
        typeof result === "object" &&
        "ok" in result &&
        result.ok === true
      ) {
        setStatus("success");
        return;
      }

      setError(
        response.status === 400
          ? "이메일 주소를 다시 확인해 주세요."
          : "잠시 후 다시 시도해 주세요.",
      );
    } catch {
      setError("잠시 후 다시 시도해 주세요.");
    }
    setStatus("error");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`flex items-start gap-2 rounded-2xl px-4 py-3 text-sm ${
          isClosing
            ? "bg-white/15 text-white"
            : isBar
              ? "text-white"
              : "bg-card text-primary"
        }`}
      >
        <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <span>
          신청이 접수됐어요. 정식 오픈하면 가장 먼저 메일로 알려드릴게요.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={isBar ? "relative w-full" : "relative w-full max-w-md"}
    >
      {isBar ? (
        <a
          href="/#waitlist"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:hidden"
        >
          알림 신청
        </a>
      ) : null}

      <div
        className={`${isBar ? "hidden sm:flex" : "flex flex-col gap-2 sm:flex-row"} items-stretch rounded-2xl border p-1.5 shadow-sm transition-shadow focus-within:ring-2 motion-reduce:transition-none ${
          isClosing
            ? "border-white/25 bg-white/10 focus-within:ring-white/70"
            : isBar
              ? "border-white/30 bg-white/10 focus-within:ring-white/70"
              : "border-border bg-card focus-within:ring-ring"
        } ${isBar ? "rounded-full p-0.5" : "sm:rounded-full"}`}
      >
        <label htmlFor={emailId} className="sr-only">
          오픈 알림을 받을 이메일 주소
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setError("");
              setStatus("idle");
            }
          }}
          aria-invalid={status === "error"}
          aria-describedby={error ? errorId : undefined}
          placeholder="이메일 주소"
          disabled={status === "loading"}
          className={`min-w-0 flex-1 rounded-full px-4 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-60 ${
            isBar
              ? "h-10 bg-white text-foreground"
              : "min-h-12 bg-white text-foreground"
          }`}
        />
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>웹사이트</label>
          <input
            id={`${idPrefix}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className={`min-h-12 shrink-0 rounded-full px-6 font-semibold transition-colors motion-reduce:transition-none ${
            isBar
              ? "min-h-10 px-4 text-xs"
              : isClosing
                ? "bg-white text-[#292333] hover:bg-[#ebe6f0]"
                : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {status === "loading" ? "신청 중…" : "오픈 알림 받기"}
        </Button>
      </div>

      {error ? (
        <p id={errorId} role="alert" className={`mt-2 text-xs ${isClosing || isBar ? "text-white" : "text-red-700"}`}>
          {error}
        </p>
      ) : null}

      {!isBar ? (
        <p className={`mt-3 text-xs leading-relaxed ${isClosing ? "text-white/85" : "text-muted-foreground"}`}>
          신청하면 오픈 안내 메일 발송을 위한 이메일 이용에 동의한 것으로 간주해요.
          요청 시 삭제해요.{" "}
          <a
            href="/privacy#waitlist"
            className="underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            개인정보 처리방침
          </a>
        </p>
      ) : null}
    </form>
  );
}
