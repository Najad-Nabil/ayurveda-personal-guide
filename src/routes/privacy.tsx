import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PlaceholderNote } from "@/components/PlaceholderNote";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Rosses Ananda" },
      {
        name: "description",
        content:
          "How Rosses Ananda handles the personal details you share when enquiring about an Ayurveda journey in Kerala.",
      },
      { property: "og:title", content: "Privacy Policy — Rosses Ananda" },
      { property: "og:description", content: "Our approach to your personal data." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Rosses Ananda collects only what is needed to answer your enquiry, and does not store enquiries in a database."
      />
      <Section>
        <div className="max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            [PRIVACY POLICY TEXT TO BE SUPPLIED — approved wording covering the data collected through the
            enquiry form, the legal basis for processing, how long details are kept, who they are shared
            with, and how to request deletion.]
          </p>
          <p>
            [COOKIE INFORMATION TO BE SUPPLIED, if cookies are used on this website.]
          </p>
        </div>
        <PlaceholderNote>
          approved privacy and cookie wording. No legal text has been written or invented here.
        </PlaceholderNote>
      </Section>
    </>
  );
}
