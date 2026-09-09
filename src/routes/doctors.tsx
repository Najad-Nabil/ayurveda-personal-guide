import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { CentreCard, DoctorCard } from "@/components/Cards";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { centres, doctors } from "@/data/siteData";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Doctors & Partner Centres in Kerala" },
      {
        name: "description",
        content:
          "The qualified Ayurvedic doctors and Ayurvedic centres in Kerala that Rosses Ananda works with as independent professional partners.",
      },
      { property: "og:title", content: "Ayurvedic Doctors & Partner Centres" },
      {
        property: "og:description",
        content:
          "Qualifications, experience and specialisations shown openly, so you know whose care you are in.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doctors & centres"
        title="Our professional partners in Kerala"
        intro="Rosses Ananda coordinates your journey; your treatment is provided by independent, qualified Ayurvedic doctors at their own centres. Their details are shown openly."
      />

      <Section>
        <SectionHeading
          eyebrow="Ayurvedic doctors"
          title="Current partner doctors"
          intro="Profiles are published only once confirmed by the doctor. Nothing here is invented."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {doctors.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
        <PlaceholderNote>
          doctor names, titles, qualifications, years of experience, specialisations, biographies and
          current photographs. Photographs from any previous partner relationship will not be used.
        </PlaceholderNote>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Ayurvedic centres"
          title="Where treatment takes place"
          intro="Each centre is an independent professional partner of Rosses Ananda, with its own facilities and team."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {centres.map((c) => (
            <CentreCard key={c.id} centre={c} />
          ))}
        </div>
        <PlaceholderNote>
          centre names, locations, facilities, any certifications or accreditations, and current
          photographs.
        </PlaceholderNote>
      </Section>

      <CtaBand
        title="Would you like to be introduced?"
        text="Tell me a little about your situation and I will explain which partner doctor would be the right person to speak with."
      />
    </>
  );
}
