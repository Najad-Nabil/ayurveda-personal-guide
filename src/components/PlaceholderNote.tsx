type Props = { children: string };

/**
 * Clearly marks content that still needs confirmation from the client,
 * so placeholders are never mistaken for verified information.
 */
export function PlaceholderNote({ children }: Props) {
  return (
    <p className="mt-6 rounded-lg border border-dashed border-clay/45 bg-clay/5 px-4 py-3 text-sm text-muted-foreground">
      <span className="font-semibold text-clay">Awaiting client content — </span>
      {children}
    </p>
  );
}

export function ImagePlaceholder({ label, ratio = "4 / 3" }: { label: string; ratio?: string }) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className="flex w-full items-center justify-center rounded-xl border border-dashed border-ink/20 bg-muted px-4 text-center text-xs tracking-wide text-muted-foreground uppercase"
    >
      {label}
    </div>
  );
}
