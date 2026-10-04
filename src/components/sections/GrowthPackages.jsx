import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const packages = [
  {
    name: "Foundation",
    description: "For brands ready to build a stronger digital presence.",
    features: [
      "8–10 Reels / month",
      "4 Static / Carousel posts",
      "8–12 Stories",
      "Content strategy & monthly planning",
      "Professional editing",
      "Instagram optimization",
      "Monthly performance report",
    ],
    bestFor: "Businesses starting to take content seriously.",
  },
  {
    name: "Growth",
    description:
      "For brands looking to grow their presence and generate consistent attention.",
    features: [
      "12–16 Reels / month",
      "6–8 Static / Carousel posts",
      "12–16 Stories",
      "1 Professional Shoot Day / month",
      "Content strategy & creative direction",
      "Advanced video editing",
      "Instagram management",
      "Growth & distribution strategy",
      "Monthly analytics & strategy call",
    ],
    bestFor: "Growing brands, founders & businesses ready to scale.",
    featured: true,
  },
  {
    name: "Signature",
    description: "A complete content & growth system built around your brand.",
    features: [
      "16–20+ Reels / month",
      "Premium content production",
      "2 Shoot Days / month",
      "Founder-led & brand storytelling",
      "Creative direction",
      "Content strategy",
      "Instagram management",
      "Paid advertising strategy",
      "Creator / collaboration strategy",
      "Advanced analytics & optimization",
      "Priority creative support",
    ],
    bestFor: "Founders and established brands looking for serious growth.",
  },
];

export default function GrowthPackages() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="growth-packages-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-500">
              Growth Packages
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="growth-packages-heading"
              className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
            >
              Build. Position. Grow.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              We build content systems that make brands look sharper, reach more
              people, and turn attention into business.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 90}>
              <article
                className={`group relative flex h-full flex-col rounded-xl2 border p-7 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover sm:p-8 ${
                  pkg.featured
                    ? "border-lime-500/60 bg-navy-700"
                    : "border-line bg-navy-800"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute right-6 top-6 rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-400">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      pkg.featured ? "bg-lime-500" : "bg-white/30"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {pkg.name}
                  </p>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {pkg.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {pkg.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-line pt-7">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-700"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-line pt-7 text-sm leading-relaxed text-gray-400">
                  <span className="font-semibold text-white">Best for:</span>{" "}
                  {pkg.bestFor}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-6 rounded-xl2 border border-line bg-navy-800 p-7 shadow-soft sm:p-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-500">
                  Custom
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Built around your goals.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                  Not every brand needs the same system. For larger campaigns,
                  personal brands, product launches, performance marketing, or
                  ongoing production, we build a custom Gravis system around your
                  objectives.
                </p>
              </div>

              <Button to="/contact" variant="primary" size="lg" className="shrink-0">
                Let’s build something that moves.
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
