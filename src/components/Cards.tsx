import { MapPin, Check } from "lucide-react";
import type { Accommodation, Centre, Doctor, JourneyStepData, Programme, Testimonial } from "@/data/siteData";
import { ImagePlaceholder } from "./PlaceholderNote";

function Unconfirmed() {
  return (
    <span className="inline-block rounded-full border border-dashed border-clay/50 px-2.5 py-0.5 text-[0.65rem] tracking-[0.14em] text-clay uppercase">
      To be confirmed
    </span>
  );
}

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="flex h-full flex-col border-t border-border pt-6">
      <h3 className="font-display text-2xl">{programme.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{programme.summary}</p>
      <p className="mt-4 text-sm leading-relaxed">{programme.detail}</p>
      <p className="mt-5 text-xs tracking-wide text-clay">{programme.suitableFor}</p>
    </article>
  );
}

export function JourneyStep({ step, last }: { step: JourneyStepData; last?: boolean }) {
  return (
    <li className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 pb-10">
      <div className="flex flex-col items-center">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-clay/40 font-display text-base text-clay">
          {step.step}
        </span>
        {last ? null : <span aria-hidden="true" className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-2xl">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </li>
  );
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      {doctor.image ? (
        <img
          src={doctor.image}
          alt={`${doctor.name}, Ayurvedic doctor at ${doctor.centre}`}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <ImagePlaceholder label="Doctor photograph to be supplied" />
      )}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl">{doctor.name}</h3>
          {doctor.confirmed ? null : <Unconfirmed />}
        </div>
        <p className="mt-1 text-sm text-clay">{doctor.title}</p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Qualifications</dt>
            <dd>{doctor.qualifications}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Experience</dt>
            <dd>{doctor.experience}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Specialisations</dt>
            <dd>{doctor.specialisations.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">Centre</dt>
            <dd>
              {doctor.centre} — {doctor.location}
            </dd>
          </div>
        </dl>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
        <p className="mt-5 text-xs text-muted-foreground">
          Professional partner of Rosses Ananda. Independent practitioner.
        </p>
      </div>
    </article>
  );
}

export function CentreCard({ centre }: { centre: Centre }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <ImagePlaceholder label="Centre photograph to be supplied" ratio="16 / 9" />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl">{centre.name}</h3>
          {centre.confirmed ? null : <Unconfirmed />}
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {centre.location}
        </p>
        <p className="mt-4 text-sm leading-relaxed">{centre.description}</p>
        <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {centre.facilities.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-clay" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function AccommodationCard({ stay }: { stay: Accommodation }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <ImagePlaceholder label="Accommodation photograph to be supplied" ratio="16 / 10" />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl">{stay.name}</h3>
          {stay.confirmed ? null : <Unconfirmed />}
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {stay.location}
        </p>
        <p className="mt-4 text-sm leading-relaxed">{stay.description}</p>
        <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
          {stay.facilities.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-clay" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs tracking-wide text-clay">Suitable for: {stay.suitableFor}</p>
      </div>
    </article>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-xl border border-border bg-card p-7 shadow-soft">
      <blockquote className="font-display text-xl leading-snug">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-5 text-sm text-muted-foreground">
        {testimonial.name}, {testimonial.country}
      </figcaption>
    </figure>
  );
}
