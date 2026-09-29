"use client";
import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const links = [
  ["#work", "소희가 하는 일"],
  ["#booking", "예약까지 한 번에"],
  ["#business-learning", "우리 업종도 될까요?"],
  ["#partnership", "함께 시작하기"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <a href="#top" aria-label="소희, 처음으로" className="wordmark">
          sohee<span>.</span>
          <span className="ml-3 text-sm font-medium tracking-normal text-muted-foreground">
            소희
          </span>
        </a>
        <nav
          aria-label="주요 메뉴"
          className="hidden items-center gap-7 text-sm font-medium lg:flex"
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#demo">
              우리 가게에 맡겨보기
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="메뉴 열기"
                className="lg:hidden"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="mt-8 text-2xl font-bold">
                소희를 만나보세요.
              </SheetTitle>
              <SheetDescription className="text-muted-foreground">
                우리 가게 마케팅을 함께할 AI 직원
              </SheetDescription>
              <nav aria-label="모바일 메뉴" className="flex flex-col">
                {links.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-5 text-lg font-semibold"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <Button asChild>
                <a href="#demo" onClick={() => setOpen(false)}>
                  우리 가게 업무 예시 보기
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
