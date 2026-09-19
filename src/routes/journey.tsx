import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { JourneyStep } from "@/components/Cards";
import { ButtonAnchor } from "@/components/Button";
import { emailLink, journeySteps, whatsappLink } from "@/data/siteData";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Your Journey — How an Ayurveda Stay in Kerala Is Arranged" },
      {
        name: "description",
        content:
          "Step by step: the first conversation, Ayurvedic consultation, choosing your doctor and programme, accommodation, transfers, your stay in Kerala and follow-up.",
      },
      { property: "og:title", content: "Your Journey with Rosses Ananda" },
      {
        property: "og:description",
        content: "Nine accompanied steps, from your first message to your journey home.",
      },
      { property: "og:url", content: "/journey" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Your journey"
        title="Everything arranged, step by step"
        intro="You are never left to work out the next step alone. This is how a stay with Rosses Ananda unfolds."
      />

      <Section>
        <ol className="max-w-2xl">
          {journeySteps.map((s, i, arr) => (
            <JourneyStep key={s.step} step={s} last={i === arr.length - 1} />
          ))}
        </ol>
      </Section>

      <Section tone="sand" size="md">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">What stays in your hands</h2>
          <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/75">
            Your flights, your travel insurance and your own medical decisions remain yours.
            Everything on the Kerala side — the doctor, the centre, the programme, accommodation,
            transfers and daily support — is coordinated for you.
          </p>
        </div>
      </Section>

      <Section size="md">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Ready to begin?</h2>
          <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/75">
            Send a message on WhatsApp or email, and tell me a little about the journey you have in
            mind.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonAnchor
              variant="whatsapp"
              size="lg"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </ButtonAnchor>
            <ButtonAnchor variant="outline" size="lg" href={emailLink}>
              <Mail className="h-4 w-4" aria-hidden="true" /> Email
            </ButtonAnchor>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Ready for step one?"
        text="Step one is simply a message. Tell me when you would like to come and what you are looking for."
      />
    </>
  );
}
