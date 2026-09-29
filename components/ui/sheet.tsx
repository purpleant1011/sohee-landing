"use client";
import * as React from "react";
import * as Primitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
export const Sheet = Primitive.Root;
export const SheetTrigger = Primitive.Trigger;
export const SheetClose = Primitive.Close;
export const SheetTitle = Primitive.Title;
export const SheetDescription = Primitive.Description;
export function SheetContent({
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Overlay className="fixed inset-0 z-50 bg-foreground/35" />
      <Primitive.Content
        className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,400px)] flex-col gap-5 bg-background p-7 shadow-xl"
        {...props}
      >
        {children}
        <Primitive.Close
          className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full hover:bg-secondary"
          aria-label="메뉴 닫기"
        >
          <X className="size-5" />
        </Primitive.Close>
      </Primitive.Content>
    </Primitive.Portal>
  );
}
