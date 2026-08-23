import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionEyebrow from "../ui/SectionEyebrow";
import DiamondMark from "../ui/DiamondMark";
import Reveal from "../ui/Reveal";
import { agency } from "../../data/agency";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Soft electric-blue glow — light & premium, not dark/futuristic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-lime-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[18%] hidden sm:block"
      >
        <DiamondMark className="h-16 w-16 animate-spin-slow" color="#C9D7FF" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow>Digital Marketing Agency</SectionEyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl md:text-7xl">
              Grow your <span className="text-lime-500">brand.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-600">
              {agency.positioning}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" size="lg">
                Grow your brand
              </Button>
              <Button to="/work" size="lg" variant="outline" icon={false}>
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
