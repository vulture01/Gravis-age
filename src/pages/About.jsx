import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import PageHeader from "../components/sections/PageHeader";
import DiamondMark from "../components/ui/DiamondMark";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import FinalCTA from "../components/sections/FinalCTA";
import { agency } from "../data/agency";

const values = [
  {
    title: "Strategy first",
    description:
      "Every piece of work starts with a plan grounded in your business goals — not a trend, and not a guess.",
  },
  {
    title: "Creativity second",
    description:
      "Once the strategy is clear, creative work exists to serve it — content and campaigns that are on-brand and on-purpose.",
  },
  {
    title: "Results always",
    description:
      "Everything we do is measured against real outcomes for your business, not vanity numbers.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Gravis is a young, energetic digital marketing agency built on a simple philosophy: strategy first, creativity second, results always."
      />
      <PageHeader
        eyebrow="About Gravis"
        title="A young agency, built with intent"
        subtitle="Gravis exists to help local and established businesses build a stronger digital presence — with strategy behind every decision."
      />

      <section className="pb-24 sm:pb-28">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-700">
              {agency.name} is a digital marketing agency focused on helping businesses
              reach the right audience and grow online — through social media
              management, paid advertising, SEO and analytics. We work with local
              businesses building their first real digital presence, and established
              businesses looking to sharpen theirs.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              We're a small, energetic team, and we treat every client relationship
              with the same level of attention: understand the business first, build a
              strategy around it, and let the creative work and the results follow.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <SectionEyebrow>Our Philosophy</SectionEyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{agency.philosophy}</h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 100}
                className="rounded-xl2 border border-line bg-navy-800 p-7 shadow-soft"
              >
                <DiamondMark className="h-5 w-5" color="#B6FF00" />
                <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">The people behind Gravis</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              Three people, three areas of focus, one growth plan for every client.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex justify-center">
              <Button to="/team" variant="outline">
                Meet the team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
