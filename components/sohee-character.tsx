import Image from "next/image";
import { cn } from "@/lib/utils";
/** Full-body artwork must never use cover, clipping, or a circular mask. */
export function SoheeCharacter({
  className,
  alt = "함께 일할 준비를 마친 AI 마케팅 직원 소희",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/landing/images/sohee-guide.webp"
      alt={alt}
      width={926}
      height={1698}
      className={cn("sohee-character", className)}
      sizes="(max-width: 640px) 180px, 260px"
    />
  );
}
