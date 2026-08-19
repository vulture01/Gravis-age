import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import Reveal from "../ui/Reveal";
import ServiceCard from "./ServiceCard";
import Button from "../ui/Button";
import { services } from "../../data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="services-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>What We Do</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="services-heading" className="mt-5 text-3xl font-bold sm:text-4xl">
              Everything your brand needs to grow online
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Button to="/services" variant="outline">
              Explore all services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
