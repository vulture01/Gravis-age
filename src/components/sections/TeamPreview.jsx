import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import TeamCard from "./TeamCard";
import { team } from "../../data/team";

export default function TeamPreview() {
  return (
    <section className="py-24 sm:py-28" aria-labelledby="team-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Behind Gravis</SectionEyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="team-heading" className="mt-5 text-3xl font-bold sm:text-4xl">
              A small team, fully invested
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={i * 100}>
              <TeamCard member={member} compact />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex justify-center">
            <Button to="/team" variant="outline">
              Meet the full team
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
