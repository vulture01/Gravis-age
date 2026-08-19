import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import PageHeader from "../components/sections/PageHeader";
import ProjectCard from "../components/sections/ProjectCard";
import DiamondMark from "../components/ui/DiamondMark";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { projects, workFocusAreas } from "../data/projects";

export default function Work() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <Seo
        title="Work"
        description="Gravis Agency is a young agency currently building its client portfolio. See the kind of work we're taking on."
      />
      <PageHeader
        eyebrow="Our Work"
        title={hasProjects ? "Selected work" : "Building our portfolio"}
        subtitle={
          hasProjects
            ? "A look at the brands we've worked with."
            : "Gravis is a young agency. This page will grow into a portfolio of real client work — here's what we're building toward in the meantime."
        }
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          {hasProjects ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={i * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <>
              <Reveal>
                <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl2 border border-line bg-mist p-10 text-center sm:p-16">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
                  />
                  <DiamondMark className="mx-auto h-9 w-9" color="#2E5BFF" />
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
                    No case studies here yet — and we'd rather show you nothing than
                    something invented. As soon as a project is live, it'll be featured
                    on this page in full.
                  </p>
                </div>
              </Reveal>

              <div className="mx-auto mt-16 max-w-4xl">
                <Reveal>
                  <h2 className="text-center text-2xl font-bold sm:text-3xl">
                    The kind of work we're taking on
                  </h2>
                </Reveal>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {workFocusAreas.map((area, i) => (
                    <Reveal
                      key={area.title}
                      delay={i * 100}
                      className="rounded-xl2 border border-line bg-white p-7 shadow-soft"
                    >
                      <DiamondMark className="h-5 w-5" color="#2E5BFF" />
                      <h3 className="mt-4 text-lg font-semibold text-ink-900">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {area.description}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={120}>
                <div className="mt-14 flex justify-center">
                  <Button to="/contact">Become a founding client</Button>
                </div>
              </Reveal>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
