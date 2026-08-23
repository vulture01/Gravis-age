import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import Reveal from "../ui/Reveal";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-lime-500/10 blur-[100px]"
      />
      <Container className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
