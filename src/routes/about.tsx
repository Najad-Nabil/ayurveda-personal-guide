import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { ImagePlaceholder, PlaceholderNote } from "@/components/PlaceholderNote";
import { site } from "@/data/siteData";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rosses Ananda — The Person Behind Your Kerala Journey" },
      {
        name: "description",
        content:
          "Rosses Ananda exists so European guests can experience authentic Ayurveda in Kerala with someone they trust nearby. Our philosophy and personal approach.",
      },
      { property: "og:title", content: "About Rosses Ananda" },
      {
        property: "og:description",
        content: "Why Rosses Ananda exists, and how each guest is looked after personally in Kerala.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The person behind Rosses Ananda"
        intro="Rosses Ananda is a small, personal service. That is deliberate — it is the reason guests feel looked after rather than processed."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <ImagePlaceholder label={`Photograph of ${site.founderName} to be supplied`} ratio="4 / 5" />
            <PlaceholderNote>
              founder photograph, full name and professional background. No previous partner photographs
              will be used.
            </PlaceholderNote>
          </div>
          <div>
            <SectionHeading
              eyebrow="Personal story"
              title={`Meet ${site.founderName}`}
              intro="[PERSONAL STORY TO BE SUPPLIED — how Rosses Ananda began, the connection to Kerala and to Ayurveda, and the professional background behind the service.]"
            />
            <div className="mt-12 space-y-10">
              <div className="border-t border-border pt-6">
                <h3 className="text-2xl">Why Rosses Ananda exists</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Many European travellers want genuine Ayurveda, not a spa weekend — and they want to know
                  that the doctor is qualified, the centre is real, and someone will pick up the phone if
                  plans change. Rosses Ananda was created to be that person in Kerala.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-2xl">Philosophy</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ayurveda works with the individual, so a service around it should do the same. Nothing is
                  sold as a fixed package; everything begins with listening, and the medical decisions stay
                  with the Ayurvedic doctor.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-2xl">A personal approach</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You write to one person and you keep talking to that person — in planning, on arrival, in
                  the middle of your programme and after you fly home. Questions are welcome at any stage,
                  including the small everyday ones.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h3 className="text-2xl">What Rosses Ananda is not</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Rosses Ananda is not an Ayurvedic hospital or medical institution, and does not own the
                  partner centres. Treatments are provided by independent, qualified Ayurvedic doctors and
                  their centres; Rosses Ananda coordinates your experience around their care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ask me anything before you decide"
        text="A conversation costs nothing and usually answers more than a brochure would."
      />
    </>
  );
}
