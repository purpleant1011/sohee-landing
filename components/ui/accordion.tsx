"use client";
import * as React from "react";
import * as Primitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = Primitive.Root;
export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}
export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger
        className={cn(
          "group flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-ring",
          className,
        )}
        {...props}
      >
        {children}
        <Plus
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform group-data-[state=open]:rotate-45"
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
export function AccordionContent({
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content
      className="overflow-hidden text-muted-foreground"
      {...props}
    >
      <div className="max-w-3xl pb-6 leading-relaxed">{children}</div>
    </Primitive.Content>
  );
}
