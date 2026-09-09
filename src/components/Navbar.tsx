import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/data/siteData";
import { ButtonAnchor, ButtonLink, buttonClass } from "./Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex min-w-0 items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display truncate text-xl leading-none tracking-tight sm:text-2xl">
            Rosses Ananda
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:inline">
            Kerala
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-ink/80 transition-colors hover:text-clay"
              activeProps={{ className: "text-clay" }}
            >
              {l.label}
            </Link>
          ))}
          <ButtonLink to="/contact">Plan Your Journey</ButtonLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message ${site.name} on WhatsApp`}
            className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-foreground"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            <ul className="divide-y divide-border">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display block py-3.5 text-2xl"
                    activeProps={{ className: "text-clay" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-3 pb-4">
              <Link to="/contact" onClick={() => setOpen(false)} className={buttonClass("primary", "lg")}>
                Plan Your Ayurveda Journey
              </Link>
              <ButtonAnchor
                variant="outline"
                size="lg"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
              </ButtonAnchor>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
