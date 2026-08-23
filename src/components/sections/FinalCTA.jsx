import Container from "../ui/Container";
import Button from "../ui/Button";
import DiamondMark from "../ui/DiamondMark";
import Reveal from "../ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-700" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-navy-900/20 blur-3xl"
      />

      <Container className="relative text-center">
        <Reveal>
          <DiamondMark className="mx-auto h-8 w-8 animate-spin-slow" color="#FFFFFF" />
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ready to grow your brand?
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/85">
            Let's talk about where your business is now, and where digital marketing can take it.
          </p>
        </Reveal>
        <Reveal delay={230}>
          <div className="mt-9 flex justify-center">
            <Button to="/contact" variant="dark" size="lg">
              Grow your brand
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
