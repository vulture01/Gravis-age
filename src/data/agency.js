// Central agency info: positioning copy, philosophy, process steps and
// every contact link on the site. Update the `contact` block below with
// real details before launch — the placeholders are clearly marked.
export const agency = {
  name: "Gravis Agency",
  tagline: "Grow your brand.",
  positioning:
    "We help businesses build a stronger digital presence, reach the right audience, and grow through strategic digital marketing.",
  philosophy: "Strategy first. Creativity second. Results always.",
};

// The 5-step process shown on Home and referenced on Services.
export const process = [
  {
    step: "Discover",
    description:
      "We learn your business, your audience and where you currently stand online.",
  },
  {
    step: "Strategize",
    description:
      "We map a plan built around your goals — not a generic template.",
  },
  {
    step: "Create",
    description:
      "We produce the content, campaigns and assets the strategy calls for.",
  },
  {
    step: "Launch",
    description:
      "We put the work live across the right platforms and channels.",
  },
  {
    step: "Analyze",
    description:
      "We track performance and refine the approach based on real results.",
  },
];

// TODO: replace these placeholders with Gravis's real contact details.
export const contact = {
  email: "hello@gravisagency.com",
  whatsapp: {
    displayNumber: "+91 00000 00000",
    // Digits only, with country code, no symbols — used to build the wa.me link.
    number: "910000000000",
  },
  instagram: {
    handle: "@gravis.agency",
    url: "https://instagram.com/gravis.agency",
  },
};

// Service options offered in the contact form's "Service Needed" field.
// Kept separate from services.js so the form can list "Multiple / Not sure"
// without that leaking into the Services page.
export const contactServiceOptions = [
  "Social Media Management",
  "Paid Advertising",
  "SEO",
  "Analytics & Performance",
  "Multiple services",
  "Not sure yet",
];
