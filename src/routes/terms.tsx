import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PlaceholderNote } from "@/components/PlaceholderNote";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Rosses Ananda" },
      {
        name: "description",
        content:
          "The terms under which Rosses Ananda coordinates Ayurveda journeys in Kerala with independent partner doctors and centres.",
      },
      { property: "og:title", content: "Terms & Conditions — Rosses Ananda" },
      { property: "og:description", content: "The terms of our coordination service." },
      { property: "og:url", content: "/terms" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="Rosses Ananda coordinates your journey. Treatment is provided by independent, qualified Ayurvedic doctors and their own centres."
      />
      <Section>
        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            [TERMS AND CONDITIONS TEXT TO BE SUPPLIED — approved wording covering the scope of the
            coordination service, enquiries and confirmations, payments, changes and cancellations,
            responsibilities of partner doctors and centres, travel insurance, and liability.]
          </p>
        </div>
        <PlaceholderNote>
          approved terms and conditions, professionally prepared. Nothing has been drafted or invented here.
        </PlaceholderNote>
      </Section>
    </>
  );
}
