import { MessageCircle } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "./Button";
import { whatsappLink } from "@/data/siteData";

export function CtaBand({
  title = "Let's talk about your Ayurveda journey",
  text = "Tell me what you are hoping for and I will tell you honestly what is possible in Kerala. No obligation, no pressure.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-pretty text-primary-foreground/80">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              to="/contact"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Plan Your Ayurveda Journey
            </ButtonLink>
            <ButtonAnchor
              variant="outline"
              size="lg"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary-foreground/45 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
