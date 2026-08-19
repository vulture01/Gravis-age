import Seo from "../components/ui/Seo";
import Container from "../components/ui/Container";
import PageHeader from "../components/sections/PageHeader";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import Reveal from "../components/ui/Reveal";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Gravis Agency by email, WhatsApp or Instagram, or send us a message directly."
      />
      <PageHeader
        eyebrow="Let's Talk"
        title="Tell us about your business"
        subtitle="Reach out directly, or send us a message and we'll get back to you."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Reveal>
                <SectionEyebrow>Reach Us Directly</SectionEyebrow>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-6">
                  <ContactInfo />
                </div>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <div className="rounded-xl2 border border-line bg-white p-7 shadow-soft sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
