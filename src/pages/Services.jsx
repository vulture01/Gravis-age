import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import PageHeader from "../components/sections/PageHeader";
import ServiceCard from "../components/sections/ServiceCard";
import Reveal from "../components/ui/Reveal";
import Philosophy from "../components/sections/Philosophy";
import FinalCTA from "../components/sections/FinalCTA";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Social media management, paid advertising, SEO and analytics — the core services Gravis Agency uses to grow your digital presence."
      />
      <PageHeader
        eyebrow="What We Do"
        title="Services built to move the needle"
        subtitle="Four core capabilities, used together or on their own — depending on what your business actually needs right now."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 90}>
                <ServiceCard service={service} detailed />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Philosophy />
      <FinalCTA />
    </>
  );
}
