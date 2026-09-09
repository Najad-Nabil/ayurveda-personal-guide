/**
 * Central content source for Rosses Ananda.
 *
 * Values wrapped in [SQUARE BRACKETS] are PLACEHOLDERS awaiting confirmed
 * client information. Replace them here — no component changes needed.
 * Nothing in this file should ever be invented: no doctor names, credentials,
 * testimonials, prices or claims without client confirmation.
 */

export const site = {
  name: "Rosses Ananda",
  tagline: "Authentic Ayurveda in Kerala, personally arranged for you",
  location: "Kerala, India",
  founderName: "[FOUNDER NAME]",
  phone: "[PHONE]",
  /** Digits only, international format, no + or spaces. e.g. 919999999999 */
  whatsappNumber: "[WHATSAPP]",
  email: "[EMAIL]",
  instagramUrl: "[INSTAGRAM URL]",
  facebookUrl: "[FACEBOOK URL]",
};

export const whatsappLink = (message = "Hello, I would like to plan an Ayurveda journey in Kerala.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const emailLink = `mailto:${site.email}`;

export const navLinks = [
  { label: "Ayurveda", to: "/ayurveda" },
  { label: "Your Journey", to: "/journey" },
  { label: "Doctors & Centres", to: "/doctors" },
  { label: "Kerala", to: "/kerala" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Programme = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  suitableFor: string;
};

export const programmes: Programme[] = [
  {
    id: "consultation",
    title: "Ayurvedic Consultations",
    summary: "An individual consultation with a qualified Ayurvedic doctor.",
    detail:
      "Your journey begins with a conversation. A qualified Ayurvedic doctor takes time to understand your constitution, your history and what you hope to feel afterwards, and from that a suitable direction is proposed.",
    suitableFor: "Anyone who wants guidance before deciding on a programme.",
  },
  {
    id: "personalised",
    title: "Personalised Ayurvedic Programmes",
    summary: "A programme shaped around your needs rather than a fixed package.",
    detail:
      "Length, therapies, diet and daily rhythm are arranged around you. Two guests arriving on the same day may follow two quite different programmes.",
    suitableFor: "Guests with specific goals or limited time.",
  },
  {
    id: "panchakarma",
    title: "Panchakarma & Detox",
    summary: "Traditional Ayurvedic cleansing, carried out under medical supervision.",
    detail:
      "Panchakarma is a classical cleansing process that unfolds in stages and needs time, rest and daily supervision by the Ayurvedic doctor. Suitability and duration are always determined during consultation.",
    suitableFor: "Guests able to stay longer and rest properly.",
  },
  {
    id: "rejuvenation",
    title: "Rejuvenation",
    summary: "Programmes centred on rest, renewal and wellbeing.",
    detail:
      "A gentler rhythm of therapies, nourishing food and quiet days — for guests who arrive tired rather than unwell.",
    suitableFor: "Guests seeking recovery from stress and fatigue.",
  },
  {
    id: "wellness",
    title: "Wellness Stays",
    summary: "Ayurveda combined with relaxation and a peaceful Kerala stay.",
    detail:
      "Daily treatments and yoga alongside free time to enjoy Kerala — the backwaters, the hills, the coast and the everyday life around you.",
    suitableFor: "First-time visitors and travelling couples.",
  },
  {
    id: "therapies",
    title: "Ayurvedic Treatments & Therapies",
    summary: "Individual therapies selected as part of your programme.",
    detail:
      "Specific therapies are chosen by the Ayurvedic doctor as part of your programme, and may be adjusted while you are there depending on how you respond.",
    suitableFor: "Guests already following a programme.",
  },
];

export type JourneyStepData = {
  step: string;
  title: string;
  description: string;
};

export const journeySteps: JourneyStepData[] = [
  {
    step: "01",
    title: "A first conversation",
    description:
      "You write on WhatsApp or by email. We talk simply and without obligation about what brings you to Ayurveda and what you would like your stay to feel like.",
  },
  {
    step: "02",
    title: "Understanding your needs",
    description:
      "Your health background, time available, budget and travel preferences are discussed, so that anything proposed genuinely fits you.",
  },
  {
    step: "03",
    title: "Ayurvedic consultation",
    description:
      "A qualified Ayurvedic doctor from among our professional partners reviews your situation and advises on a suitable direction.",
  },
  {
    step: "04",
    title: "Choosing doctor and programme",
    description:
      "Together we confirm which partner doctor and centre suit you best, and the shape and length of your programme.",
  },
  {
    step: "05",
    title: "Accommodation and travel",
    description:
      "Accommodation is arranged around your programme and preferences. Airport transfers and local travel are coordinated for you.",
  },
  {
    step: "06",
    title: "Arrival in Kerala",
    description:
      "You are met and brought to your accommodation. Nothing important has to be organised by you on the day you land.",
  },
  {
    step: "07",
    title: "Your Ayurvedic stay",
    description:
      "Your days follow the rhythm set by the doctor: treatments, food, rest and yoga, with adjustments as your programme progresses.",
  },
  {
    step: "08",
    title: "Personal support throughout",
    description:
      "I remain reachable while you are in Kerala — for questions, translation, changes of plan or simply reassurance.",
  },
  {
    step: "09",
    title: "Departure and afterwards",
    description:
      "Return travel is arranged, and we stay in contact afterwards regarding any post-treatment guidance given by your doctor.",
  },
];

export type Doctor = {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  specialisations: string[];
  centre: string;
  location: string;
  bio: string;
  image?: string;
  /** false until the client has confirmed and supplied this profile */
  confirmed: boolean;
};

/**
 * PLACEHOLDER PROFILES ONLY.
 * Never fabricate names, credentials, experience or photographs.
 * Replace each entry with confirmed partner information, then set confirmed: true.
 */
export const doctors: Doctor[] = [
  {
    id: "doctor-1",
    name: "[DOCTOR NAME]",
    title: "[DOCTOR TITLE]",
    qualifications: "[DOCTOR QUALIFICATIONS]",
    experience: "[YEARS OF EXPERIENCE]",
    specialisations: ["[SPECIALISATION]", "[SPECIALISATION]"],
    centre: "[CENTRE NAME]",
    location: "[LOCATION, KERALA]",
    bio: "[SHORT BIOGRAPHY — to be supplied by the doctor.]",
    confirmed: false,
  },
  {
    id: "doctor-2",
    name: "[DOCTOR NAME]",
    title: "[DOCTOR TITLE]",
    qualifications: "[DOCTOR QUALIFICATIONS]",
    experience: "[YEARS OF EXPERIENCE]",
    specialisations: ["[SPECIALISATION]"],
    centre: "[CENTRE NAME]",
    location: "[LOCATION, KERALA]",
    bio: "[SHORT BIOGRAPHY — to be supplied by the doctor.]",
    confirmed: false,
  },
];

export type Centre = {
  id: string;
  name: string;
  location: string;
  description: string;
  facilities: string[];
  confirmed: boolean;
};

export const centres: Centre[] = [
  {
    id: "centre-1",
    name: "[CENTRE NAME]",
    location: "[LOCATION, KERALA]",
    description: "[SHORT DESCRIPTION OF THE CENTRE — to be supplied.]",
    facilities: ["[FACILITY]", "[FACILITY]", "[FACILITY]"],
    confirmed: false,
  },
];

export type Accommodation = {
  id: string;
  name: string;
  location: string;
  description: string;
  facilities: string[];
  suitableFor: string;
  confirmed: boolean;
};

export const accommodations: Accommodation[] = [
  {
    id: "stay-1",
    name: "[ACCOMMODATION NAME]",
    location: "[LOCATION, KERALA]",
    description: "[SHORT DESCRIPTION — to be supplied.]",
    facilities: ["[FACILITY]", "[FACILITY]"],
    suitableFor: "[SUITABLE FOR]",
    confirmed: false,
  },
  {
    id: "stay-2",
    name: "[ACCOMMODATION NAME]",
    location: "[LOCATION, KERALA]",
    description: "[SHORT DESCRIPTION — to be supplied.]",
    facilities: ["[FACILITY]", "[FACILITY]"],
    suitableFor: "[SUITABLE FOR]",
    confirmed: false,
  },
];

export const experiences = [
  {
    title: "Yoga",
    description: "Morning practice alongside your programme, where the doctor considers it suitable.",
  },
  {
    title: "Backwaters & nature",
    description: "Quiet time on the water, in the hills and among the palms and paddy fields.",
  },
  {
    title: "Cultural experiences",
    description: "Temples, music, local craft and the everyday life of Kerala. [TO BE CONFIRMED]",
  },
  {
    title: "Kerala food",
    description: "Simple, fresh cooking — with meals during treatment guided by your programme.",
  },
  {
    title: "Airport transfers",
    description: "Arrival and departure transfers arranged and accompanied where needed.",
  },
  {
    title: "Local excursions",
    description: "Short trips arranged around your treatment days. [TO BE CONFIRMED]",
  },
] as const;

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  quote: string;
  confirmed: boolean;
};

/** Only genuine testimonials supplied by Rosses Ananda may be published here. */
export const testimonials: Testimonial[] = [];

export const programmeOptions = [
  "Panchakarma",
  "Detox",
  "Rejuvenation",
  "Wellness",
  "Ayurvedic consultation",
  "General enquiry",
  "Not sure yet",
] as const;
