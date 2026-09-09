import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Button, ButtonAnchor } from "./Button";
import { programmeOptions, site, whatsappLink } from "@/data/siteData";

/**
 * Enquiry form with no backend and no stored data.
 *
 * By default the enquiry is composed into an email to the client's inbox
 * (and can be sent via WhatsApp instead). To use a form service later, set
 * FORM_ENDPOINT to its POST URL — nothing else needs to change.
 */
const FORM_ENDPOINT = "";

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-clay focus:outline-none";
const labelClass = "block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase";

type Values = {
  name: string;
  country: string;
  email: string;
  phone: string;
  period: string;
  duration: string;
  reason: string;
  programme: string;
  message: string;
  consent: boolean;
  /** honeypot */
  website: string;
};

const initial: Values = {
  name: "",
  country: "",
  email: "",
  phone: "",
  period: "",
  duration: "",
  reason: "",
  programme: "Not sure yet",
  message: "",
  consent: false,
  website: "",
};

function summarise(v: Values) {
  return [
    `Name: ${v.name}`,
    `Country: ${v.country}`,
    `Email: ${v.email}`,
    `WhatsApp / phone: ${v.phone}`,
    `Preferred travel period: ${v.period}`,
    `Approximate length of stay: ${v.duration}`,
    `Main reason for travelling: ${v.reason}`,
    `Interested programme: ${v.programme}`,
    "",
    v.message,
  ].join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({
      ...v,
      [key]: e.target instanceof HTMLInputElement && e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please add a little detail so we can help you properly.";
    if (!values.consent) next.consent = "Please confirm we may reply to your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.website) return; // silent spam drop
    if (!validate()) return;

    setStatus("sending");
    const body = summarise(values);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } catch {
        /* fall through to email */
      }
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Ayurveda enquiry — ${values.name}`,
      )}&body=${encodeURIComponent(body)}`;
    }
    setStatus("sent");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="f-name">
            Name
          </label>
          <input id="f-name" className={`${fieldClass} mt-2`} value={values.name} onChange={set("name")} required
            aria-describedby={errors.name ? "e-name" : undefined} autoComplete="name" />
          {errors.name ? (
            <p id="e-name" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="f-country">
            Country
          </label>
          <input id="f-country" className={`${fieldClass} mt-2`} value={values.country} onChange={set("country")} autoComplete="country-name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="f-email">
            Email
          </label>
          <input id="f-email" type="email" className={`${fieldClass} mt-2`} value={values.email} onChange={set("email")} required
            aria-describedby={errors.email ? "e-email" : undefined} autoComplete="email" />
          {errors.email ? (
            <p id="e-email" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label className={labelClass} htmlFor="f-phone">
            WhatsApp / Phone
          </label>
          <input id="f-phone" type="tel" className={`${fieldClass} mt-2`} value={values.phone} onChange={set("phone")} autoComplete="tel" />
        </div>
        <div>
          <label className={labelClass} htmlFor="f-period">
            Preferred travel period
          </label>
          <input id="f-period" className={`${fieldClass} mt-2`} placeholder="e.g. January–February 2027" value={values.period} onChange={set("period")} />
        </div>
        <div>
          <label className={labelClass} htmlFor="f-duration">
            Approximate length of stay
          </label>
          <input id="f-duration" className={`${fieldClass} mt-2`} placeholder="e.g. 14 days" value={values.duration} onChange={set("duration")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="f-reason">
            Main reason for travelling
          </label>
          <input id="f-reason" className={`${fieldClass} mt-2`} placeholder="e.g. rest and detox after a demanding year" value={values.reason} onChange={set("reason")} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="f-programme">
            Interested programme
          </label>
          <select id="f-programme" className={`${fieldClass} mt-2`} value={values.programme} onChange={set("programme")}>
            {programmeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="f-message">
            Additional message
          </label>
          <textarea id="f-message" rows={5} className={`${fieldClass} mt-2 resize-y`} value={values.message} onChange={set("message")} required
            aria-describedby={errors.message ? "e-message" : undefined} />
          {errors.message ? (
            <p id="e-message" className="mt-2 text-xs text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* honeypot — hidden from users and assistive tech */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" tabIndex={-1} value={values.website} onChange={set("website")} autoComplete="off" />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="f-consent"
          type="checkbox"
          checked={values.consent}
          onChange={set("consent")}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--clay)]"
          aria-describedby={errors.consent ? "e-consent" : undefined}
        />
        <label htmlFor="f-consent" className="text-sm text-muted-foreground">
          I agree that Rosses Ananda may use my details to reply to this enquiry. [PRIVACY WORDING TO BE
          CONFIRMED]
        </label>
      </div>
      {errors.consent ? (
        <p id="e-consent" className="mt-2 text-xs text-destructive">
          {errors.consent}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          <Mail className="h-4 w-4" aria-hidden="true" />
          {status === "sending" ? "Sending…" : "Send my enquiry"}
        </Button>
        <ButtonAnchor
          variant="outline"
          size="lg"
          href={whatsappLink(summarise(values).trim() || undefined)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp instead
        </ButtonAnchor>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {status === "sent"
          ? "Thank you — your enquiry is on its way. You will receive a personal reply, usually within one working day."
          : ""}
      </p>
    </form>
  );
}
