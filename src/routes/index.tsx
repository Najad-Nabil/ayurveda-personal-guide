import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Languages, ShieldCheck, Stethoscope } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { ProgrammeCard, JourneyStep, TestimonialCard } from "@/components/Cards";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { ButtonLink } from "@/components/Button";
import { journeySteps, programmes, testimonials, site } from "@/data/siteData";
import personalCare from "@/assets/personal-care.jpg";
import ayurvedaHerbs from "@/assets/ayurveda-herbs.jpg";
import keralaRetreat from "@/assets/kerala-retreat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rosses Ananda — Authentic Ayurveda in Kerala, Personally Arranged" },
      {
        name: "description",
        content:
          "Personally coordinated Ayurveda in Kerala for European guests. Consultations with qualified Ayurvedic doctors, Panchakarma, accommodation and transfers, arranged around you.",
      },
      { property: "og:title", content: "Authentic Ayurveda in Kerala, personally arranged for you" },
      {
        property: "og:description",
        content:
          "Someone you can trust in Kerala, taking care of the details of your Ayurvedic journey — before, during and after your stay.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rosses Ananda",
          description:
            "Personally coordinated authentic Ayurveda journeys in Kerala, India for European guests.",
          areaServed: "Kerala, India",
          address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Home,
});

const trustPoints = [
  {
    icon: HeartHandshake,
    title: "You know who is helping you",
    text: "Not a call centre and not a booking form. One person you speak with directly, from the first message to your journey home.",
  },
  {
    icon: Stethoscope,
    title: "Qualified Ayurvedic doctors",
    text: "Programmes are arranged in consultation with qualified Ayurvedic doctors who are professional partners of Rosses Ananda.",
  },
  {
    icon: Languages,
    title: "No language, no logistics worries",
    text: "Transfers, accommodation, communication with the centre and everyday questions in Kerala are handled for you.",
  },
  {
    icon: ShieldCheck,
    title: "Support before, during and after",
    text: "I stay reachable while you are here, and remain in contact once you are back home.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="What Rosses Ananda is"
              title="A personal connection in Kerala, not a package to buy"
              intro={
                <>
                  <p>
                    Travelling to India for Ayurveda is a big step. Most people do not lack information —
                    they lack someone on the ground they can actually rely on.
                  </p>
                  <p className="mt-4">
                    Rosses Ananda arranges authentic Ayurvedic stays in Kerala for guests from the Czech
                    Republic and across Europe. Your programme is set with a qualified Ayurvedic doctor,
                    your accommodation and travel are organised around it, and I remain personally involved
                    throughout your stay.
                  </p>
                </>
              }
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/about">Meet the person behind Rosses Ananda</ButtonLink>
              <ButtonLink to="/journey" variant="outline">
                See how a journey works
              </ButtonLink>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={personalCare}
              alt="A cup of herbal tea passed between two people at a wooden table beside a window looking onto palm trees in Kerala"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </div>
      </Section>

      {/* Personal trust */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Why guests choose Rosses Ananda"
          title="Having someone you trust in Kerala changes everything"
          intro="You do not have to work out which centre is genuine, which doctor to believe, how to get from the airport, or what to do if something changes. That is my part of the journey."
        />
        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {trustPoints.map(({ icon: Icon, title, text }) => (
            <li key={title} className="border-t border-ink/12 pt-6">
              <Icon className="h-5 w-5 text-clay" aria-hidden="true" />
              <h3 className="mt-4 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">{text}</p>
            </li>
          ))}
        </ul>
        <PlaceholderNote>
          a photograph of {site.founderName} in Kerala, and a short personal quote, will replace this note
          once supplied.
        </PlaceholderNote>
      </Section>

      {/* Ayurveda overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <figure className="order-last overflow-hidden rounded-2xl shadow-soft lg:order-first">
            <img
              src={ayurvedaHerbs}
              alt="Brass vessels of warm herbal oil, dried Ayurvedic herbs and a cloth bolus on a wooden table"
              width={1408}
              height={1056}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <div>
            <SectionHeading
              eyebrow="Ayurveda"
              title="Traditional Ayurveda, as it is practised in Kerala"
              intro="Ayurveda in Kerala is an unbroken living tradition — daily therapies, herbal preparations, food, rest and rhythm, guided by a doctor who observes how you respond. What suits you is decided in consultation, never chosen from a menu."
            />
            <Link
              to="/ayurveda"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clay hover:gap-3 transition-all"
            >
              Discover Ayurveda <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Programme categories */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Programmes"
          title="Arranged around your needs"
          intro="These are the directions a stay can take. The exact programme, therapies and duration are always determined together with the Ayurvedic doctor."
        />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <ProgrammeCard key={p.id} programme={p} />
          ))}
        </div>
      </Section>

      {/* Journey preview */}
      <Section>
        <SectionHeading
          eyebrow="Your journey"
          title="From first message to your journey home"
          intro="Nine steps, all of them accompanied. Here are the first four."
        />
        <ol className="mt-14 max-w-2xl">
          {journeySteps.slice(0, 4).map((s, i, arr) => (
            <JourneyStep key={s.step} step={s} last={i === arr.length - 1} />
          ))}
        </ol>
        <ButtonLink to="/journey" variant="outline">
          See the full journey
        </ButtonLink>
      </Section>

      {/* Doctors & Kerala preview */}
      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-2">
          <article className="flex flex-col">
            <p className="eyebrow">Doctors &amp; centres</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Professional partners, clearly named</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
              Rosses Ananda works with independent Ayurvedic doctors and centres in Kerala. They are
              professional partners — not owned by Rosses Ananda — and their qualifications and
              specialisations are shown openly so you know exactly whose care you are in.
            </p>
            <div className="mt-7">
              <ButtonLink to="/doctors" variant="outline">
                Meet our partner doctors
              </ButtonLink>
            </div>
          </article>
          <article className="flex flex-col">
            <p className="eyebrow">Kerala &amp; accommodation</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">A stay that suits your programme</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
              Accommodation is chosen for you rather than fixed in advance — close to your treatments, at a
              level of comfort and quiet that fits you. Between treatment days, Kerala itself is part of the
              experience.
            </p>
            <div className="mt-7">
              <ButtonLink to="/kerala" variant="outline">
                Explore Kerala
              </ButtonLink>
            </div>
          </article>
        </div>
        <figure className="mt-14 overflow-hidden rounded-2xl shadow-soft">
          <img
            src={keralaRetreat}
            alt="Courtyard of a traditional Kerala house with a tiled roof, wooden veranda and tropical garden"
            width={1408}
            height={1056}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="In their own words"
          title="What guests say"
          intro="Only genuine testimonials from guests of Rosses Ananda are published here."
        />
        {testimonials.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        ) : (
          <PlaceholderNote>
            guest testimonials (first name, country, quote and photograph where permission exists) will
            appear here once supplied. Nothing is invented.
          </PlaceholderNote>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
