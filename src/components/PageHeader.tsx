import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
}) {
  return (
    <header className="bg-secondary">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="mt-6 max-w-2xl text-pretty text-base text-secondary-foreground/75 sm:text-lg">
          {intro}
        </div>
      </div>
    </header>
  );
}
