import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { ProgrammeCard } from "@/components/Cards";
import { programmes } from "@/data/siteData";
import ayurvedaHerbs from "@/assets/ayurveda-herbs.jpg";

export const Route = createFileRoute("/ayurveda")({
  head: () => ({
    meta: [
      { title: "Ayurveda in Kerala — Consultations, Panchakarma & Detox" },
      {
        name: "description",
        content:
          "Authentic Ayurveda in Kerala: consultations with qualified Ayurvedic doctors, personalised programmes, Panchakarma, detox, rejuvenation and wellness stays.",
      },
      { property: "og:title", content: "Ayurveda in Kerala — Programmes & Consultations" },
      {
        property: "og:description",
        content:
          "Programme directions explained clearly. Your exact programme is always determined in consultation with an Ayurvedic doctor.",
      },
      { property: "og:url", content: "/ayurveda" },
    ],
    links: [{ rel: "canonical", href: "/ayurveda" }],
  }),
  component: AyurvedaPage,
});

function AyurvedaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ayurveda"
        title="Authentic Ayurveda, decided with a doctor — not chosen from a list"
        intro="Ayurveda is one of the world's oldest living systems of medicine, and Kerala is where it has been practised most continuously. What follows explains the kinds of stay that are possible."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The tradition"
              title="Treatment that follows the person"
              intro={
                <>
                  <p>
                    An Ayurvedic stay is not a series of massages. It is a rhythm: therapies at set times,
                    herbal preparations, a diet chosen for you, rest, and daily observation by the doctor,
                    who adjusts the programme as your body responds.
                  </p>
                  <p className="mt-4">
                    That is why length matters. A short stay can be restorative; deeper cleansing processes
                    need time and quiet. Your doctor will tell you honestly what is realistic in the time
                    you have.
                  </p>
                </>
              }
            />
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={ayurvedaHerbs}
              alt="Traditional Ayurvedic preparation: warm herbal oil in brass vessels, dried herbs and a cloth bolus"
              width={1408}
              height={1056}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Programme directions"
          title="What a stay can look like"
          intro="Each of these is a direction rather than a fixed package. Duration, therapies and diet are set individually."
        />
        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {programmes.map((p) => (
            <ProgrammeCard key={p.id} programme={p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-10">
          <h2 className="text-3xl">An important note</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Your programme is always determined individually, in consultation with a qualified Ayurvedic
              doctor. Nothing on this website should be read as a diagnosis, a treatment plan or a promise
              of a particular outcome.
            </p>
            <p>
              Rosses Ananda makes no medical claims and does not state that Ayurveda treats or cures
              specific conditions. If you are under medical care or taking prescribed medication, please
              tell us and your Ayurvedic doctor, and consult your own physician before travelling.
            </p>
            <p>
              Rosses Ananda coordinates your journey. The Ayurvedic doctors and centres are independent
              professional partners responsible for the treatment they provide.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Not sure which direction suits you?"
        text="Describe how you feel and what you hope for. A consultation with an Ayurvedic doctor can be arranged before anything is booked."
      />
    </>
  );
}
