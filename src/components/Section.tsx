import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "sand" | "leaf";
  size?: "md" | "lg";
  "aria-labelledby"?: string;
};

const tones = {
  paper: "bg-background text-foreground",
  sand: "bg-secondary text-secondary-foreground",
  leaf: "bg-primary text-primary-foreground",
};

export function Section({ id, children, className, tone = "paper", size = "lg", ...rest }: Props) {
  return (
    <section
      id={id}
      className={cn(tones[tone], size === "lg" ? "py-20 sm:py-28" : "py-14 sm:py-20", className)}
      {...rest}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
