import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { emailLink, site, whatsappLink } from "@/data/siteData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rosses Ananda — Plan Your Ayurveda Journey in Kerala" },
      {
        name: "description",
        content:
          "Start a conversation about your Ayurveda journey in Kerala. Write on WhatsApp or by email, or send an enquiry with your travel dates and interests.",
      },
      { property: "og:title", content: "Plan Your Ayurveda Journey" },
      {
        property: "og:description",
        content: "WhatsApp, email or a short enquiry — you will receive a personal reply.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Plan your Ayurveda journey"
        intro="Write in your own words — there is no form you must fill in perfectly. Every enquiry is answered personally, usually within one working day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-16">
          <aside>
            <h2 className="text-3xl">Reach me directly</h2>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-clay"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">WhatsApp</span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {site.whatsappNumber}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-clay"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">Email</span>
                    <span className="block truncate text-sm text-muted-foreground">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-clay"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">Phone</span>
                    <span className="block truncate text-sm text-muted-foreground">{site.phone}</span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Based in {site.location}
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={site.instagramUrl}
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 hover:border-clay hover:text-clay"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.facebookUrl}
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 hover:border-clay hover:text-clay"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div>
            <h2 className="text-3xl">Send an enquiry</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Only the name, email and message are required. Everything else simply helps me prepare a
              better answer.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
