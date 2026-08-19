import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import DiamondMark from "../ui/DiamondMark";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function WorkPreview() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="work-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Our Work</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="work-heading" className="mt-5 text-3xl font-bold sm:text-4xl">
              Building our portfolio, one brand at a time
            </h2>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl2 border border-line bg-mist p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
            />
            <DiamondMark className="mx-auto h-9 w-9" color="#2E5BFF" />
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-700">
              Gravis is a young agency, currently building its client portfolio.
              Every project on this site will be real work, for a real business —
              nothing invented.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/work" variant="outline">
                See how we work
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
