import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/data/siteData";

/** Persistent mobile-first contact affordance. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 hidden items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp {site.name}
    </a>
  );
}
