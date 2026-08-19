import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import PageHeader from "../components/sections/PageHeader";
import TeamCard from "../components/sections/TeamCard";
import Reveal from "../components/ui/Reveal";
import FinalCTA from "../components/sections/FinalCTA";
import { team } from "../data/team";

export default function Team() {
  return (
    <>
      <Seo
        title="Team"
        description="Meet the small team behind Gravis Agency and what each person focuses on."
      />
      <PageHeader
        eyebrow="Behind Gravis"
        title="Meet the team"
        subtitle="A small team, each focused on a different part of how Gravis helps businesses grow."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
