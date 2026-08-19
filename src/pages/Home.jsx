import Seo from "../components/ui/Seo";
import Hero from "../components/sections/Hero";
import ServicesOverview from "../components/sections/ServicesOverview";
import Philosophy from "../components/sections/Philosophy";
import ProcessSteps from "../components/sections/ProcessSteps";
import WorkPreview from "../components/sections/WorkPreview";
import TeamPreview from "../components/sections/TeamPreview";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Seo
        title="Grow your brand"
        description="Gravis Agency helps businesses build a stronger digital presence, reach the right audience, and grow through strategic digital marketing."
      />
      <Hero />
      <ServicesOverview />
      <Philosophy />
      <ProcessSteps />
      <WorkPreview />
      <TeamPreview />
      <FinalCTA />
    </>
  );
}
