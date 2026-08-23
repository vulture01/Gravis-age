import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import DiamondMark from "../ui/DiamondMark";
import Reveal from "../ui/Reveal";
import { process } from "../../data/agency";

export default function ProcessSteps() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="process-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>How We Work</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="process-heading" className="mt-5 text-3xl font-bold sm:text-4xl">
              A clear process, from day one
            </h2>
          </Reveal>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-line" aria-hidden="true" />
          <ol className="relative grid grid-cols-5 gap-6">
            {process.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 110} className="text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-lime-200 bg-navy-800 text-lime-700 shadow-soft">
                  <DiamondMark className="h-4 w-4" color="#B6FF00" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="relative mt-14 space-y-10 lg:hidden">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          {process.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 90} className="relative flex gap-5 pl-0">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-200 bg-navy-800 text-lime-700 shadow-soft">
                <DiamondMark className="h-4 w-4" color="#B6FF00" />
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Step 0{i + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
