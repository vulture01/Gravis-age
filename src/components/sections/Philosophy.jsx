import Container from "../ui/Container";
import DiamondMark from "../ui/DiamondMark";
import Reveal from "../ui/Reveal";
import { agency } from "../../data/agency";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-lime-500/10 blur-[110px]"
      />
      <Container className="relative text-center">
        <Reveal>
          <DiamondMark className="mx-auto h-8 w-8" color="#B6FF00" />
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-3xl text-2xl font-display font-semibold leading-snug text-white sm:text-4xl">
            {agency.philosophy}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
