import heroImage from "@/assets/hero-kerala.jpg";
import { ButtonLink } from "./Button";

export function Hero() {
  return (
    <section className="relative -mt-[76px] flex min-h-[92svh] items-end overflow-hidden pt-[76px]">
      <img
        src={heroImage}
        alt="Traditional houseboat on the Kerala backwaters at sunrise, framed by coconut palms"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/25"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-16 sm:px-8 sm:pb-24">
        <div className="reveal max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase">
            Kerala, India
          </p>
          <h1 className="mt-5 text-balance text-4xl text-secondary sm:text-6xl lg:text-7xl">
            Authentic Ayurveda in Kerala, personally arranged for you.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base text-secondary/85 sm:text-lg">
            Rosses Ananda is a personal service for European travellers. Your programme is arranged with
            qualified Ayurvedic doctors, your stay and transfers are coordinated for you, and someone you
            know is here in Kerala throughout.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" size="lg">
              Plan Your Ayurveda Journey
            </ButtonLink>
            <ButtonLink
              to="/about"
              size="lg"
              variant="outline"
              className="border-secondary/60 text-secondary hover:border-secondary hover:text-secondary"
            >
              Discover Rosses Ananda
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
