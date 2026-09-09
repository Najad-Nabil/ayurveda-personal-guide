import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { AccommodationCard } from "@/components/Cards";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { accommodations, experiences } from "@/data/siteData";
import keralaRetreat from "@/assets/kerala-retreat.jpg";
import heroKerala from "@/assets/hero-kerala.jpg";

export const Route = createFileRoute("/kerala")({
  head: () => ({
    meta: [
      { title: "Kerala & Accommodation — Where Your Ayurveda Stay Happens" },
      {
        name: "description",
        content:
          "Kerala as part of the experience: accommodation coordinated around your Ayurvedic programme, airport transfers, yoga, nature and cultural experiences.",
      },
      { property: "og:title", content: "Kerala & Accommodation" },
      {
        property: "og:description",
        content:
          "Accommodation chosen around your programme, transfers arranged, and time to experience Kerala itself.",
      },
      { property: "og:url", content: "/kerala" },
    ],
    links: [{ rel: "canonical", href: "/kerala" }],
  }),
  component: KeralaPage,
});

function KeralaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kerala & accommodation"
        title="The place is part of the healing"
        intro="Kerala is green, humid, slow and quietly beautiful — backwaters, palms, hills and a long coastline. Where you stay is chosen to support your programme, not the other way round."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <figure className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={heroKerala}
              alt="Houseboat on the Kerala backwaters at sunrise among coconut palms"
              width={1920}
              height={1280}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <SectionHeading
            eyebrow="Kerala"
            title="A calm corner of southern India"
            intro={
              <>
                <p>
                  Most guests arrive with some tiredness and leave with a different sense of time. Days are
                  simple: treatment, food, rest, a walk, sleep — and Kerala's landscape quietly does part of
                  the work.
                </p>
                <p className="mt-4">
                  Between treatment days there is usually room for a boat on the backwaters, a temple, a
                  spice garden or simply the sea. What is possible depends on your programme, and your
                  doctor's advice comes first.
                </p>
              </>
            }
          />
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Accommodation"
          title="Coordinated individually, not fixed in advance"
          intro="There is no single property everyone is sent to. Accommodation is selected according to your Ayurvedic programme, your preferences, location, any particular requirements and availability."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {accommodations.map((a) => (
            <AccommodationCard key={a.id} stay={a} />
          ))}
        </div>
        <PlaceholderNote>
          accommodation names, locations, room information, facilities and current photographs. Prices are
          not published until confirmed.
        </PlaceholderNote>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Experiences"
          title="Beyond the treatment room"
          intro="Additional experiences are arranged around your programme where they are suitable."
        />
        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <li key={e.title} className="border-t border-border pt-6">
              <h3 className="text-2xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
            </li>
          ))}
        </ul>
        <figure className="mt-16 overflow-hidden rounded-2xl shadow-soft">
          <img
            src={keralaRetreat}
            alt="Traditional Kerala courtyard with tiled roof, wooden veranda and tropical planting in morning light"
            width={1408}
            height={1056}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>
      </Section>

      <CtaBand
        title="Tell me how you like to travel"
        text="Quiet and simple, or a little more comfort? Near the coast, or inland? Your stay is arranged around your answers."
      />
    </>
  );
}
