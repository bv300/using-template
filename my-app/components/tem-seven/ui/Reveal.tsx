"use client";

import { useInView } from "@/components/tem-seven/hooks/useInView";
import { cn } from "@/components/tem-seven/lib/utils";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}