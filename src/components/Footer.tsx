import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { navLinks, site, whatsappLink, emailLink } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-primary-foreground">Rosses Ananda</p>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            A personal service helping European guests experience authentic Ayurveda in Kerala — from the
            first conversation to the journey home.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/75">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs tracking-[0.18em] text-primary-foreground/60 uppercase">Explore</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-primary-foreground/85 hover:text-primary-foreground">
                Home
              </Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/85 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs tracking-[0.18em] text-primary-foreground/60 uppercase">Get in touch</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> WhatsApp {site.whatsappNumber}
              </a>
            </li>
            <li>
              <a
                href={emailLink}
                className="flex items-center gap-2 break-all text-primary-foreground/85 hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.phone}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagramUrl}
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 hover:border-primary-foreground"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.facebookUrl}
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/30 hover:border-primary-foreground"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Rosses Ananda. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-primary-foreground">
              Ayurvedic Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
