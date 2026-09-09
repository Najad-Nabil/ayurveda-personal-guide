import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PlaceholderNote } from "@/components/PlaceholderNote";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Disclaimer — Rosses Ananda" },
      {
        name: "description",
        content:
          "Information on this website is general in nature. Ayurvedic programmes are determined individually in consultation with a qualified Ayurvedic doctor.",
      },
      { property: "og:title", content: "Ayurvedic Disclaimer — Rosses Ananda" },
      { property: "og:description", content: "General information, not medical advice." },
      { property: "og:url", content: "/disclaimer" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Ayurvedic Disclaimer"
        intro="Everything on this website is general information about Ayurveda and about how Rosses Ananda coordinates a stay in Kerala."
      />
      <Section>
        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Nothing on this website is a diagnosis, a treatment plan, or a promise of any particular
            outcome. Rosses Ananda makes no medical claims and does not state that Ayurveda treats or cures
            specific conditions.
          </p>
          <p>
            Your programme, therapies and duration are always determined individually, in consultation with
            a qualified Ayurvedic doctor. Those doctors and their centres are independent professional
            partners responsible for the treatment they provide. Rosses Ananda is not an Ayurvedic hospital
            or medical institution.
          </p>
          <p>
            If you are under medical care, pregnant, or taking prescribed medication, please tell us and
            your Ayurvedic doctor, and consult your own physician before travelling.
          </p>
        </div>
        <PlaceholderNote>
          any additional disclaimer wording required in your jurisdiction, once professionally reviewed.
        </PlaceholderNote>
      </Section>
    </>
  );
}
