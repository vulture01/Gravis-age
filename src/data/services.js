// Core service offerings. Each service is used on the Home overview
// (compact) and the Services page (detailed, with `details`).
// `icon` is a lucide-react component name — see the import in components
// that consume this file.
export const services = [
  {
    id: "social-media",
    icon: "Share2",
    name: "Social Media Management",
    short: "Consistent, on-brand content that keeps your audience engaged.",
    description:
      "We plan, create and manage your social presence so it looks intentional on every platform — not an afterthought.",
    details: [
      "Content planning & posting calendars",
      "Platform-specific content design",
      "Community management & engagement",
      "Brand voice & visual consistency",
    ],
  },
  {
    id: "paid-advertising",
    icon: "Target",
    name: "Paid Advertising",
    short: "Targeted campaigns built to reach the right people, not just more people.",
    description:
      "From Meta to Google, we build and manage paid campaigns designed around your actual business goals — leads, sales or visibility.",
    details: [
      "Meta & Instagram ad campaigns",
      "Google Search & Display ads",
      "Audience targeting & retargeting",
      "Budget planning & campaign optimization",
    ],
  },
  {
    id: "seo",
    icon: "TrendingUp",
    name: "SEO",
    short: "Helping your business get found when it matters most.",
    description:
      "We improve how your website is structured and presented so search engines — and the people using them — can find you.",
    details: [
      "On-page & technical SEO",
      "Keyword & competitor research",
      "Local SEO for nearby customers",
      "Content structure recommendations",
    ],
  },
  {
    id: "analytics",
    icon: "BarChart3",
    name: "Analytics & Performance",
    short: "Clear reporting so you always know what's working.",
    description:
      "We track what matters and translate it into plain language — so decisions are based on data, not guesswork.",
    details: [
      "Performance tracking & dashboards",
      "Campaign & channel reporting",
      "Conversion & traffic analysis",
      "Ongoing optimization recommendations",
    ],
  },
];
