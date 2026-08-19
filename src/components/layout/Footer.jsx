import { Mail, MessageCircle } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import DiamondMark from "../ui/DiamondMark";
import { navLinks } from "../../data/navigation";
import { agency, contact } from "../../data/agency";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${contact.whatsapp.number}`;

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo theme="dark" className="h-8 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {agency.positioning}
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-blue-200">
              <DiamondMark className="h-3 w-3" color="#5B7FFF" />
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-blue-200">
              <DiamondMark className="h-3 w-3" color="#5B7FFF" />
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {contact.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {year} Gravis Agency. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <DiamondMark className="h-2.5 w-2.5" color="#5B7FFF" />
            Grow your brand.
          </p>
        </div>
      </Container>
    </footer>
  );
}
