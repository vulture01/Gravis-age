import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import { contact } from "../../data/agency";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: (c) => c.email,
    href: (c) => `mailto:${c.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: (c) => c.whatsapp.displayNumber,
    href: (c) => `https://wa.me/${c.whatsapp.number}`,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: (c) => c.instagram.handle,
    href: (c) => c.instagram.url,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {channels.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href(contact)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl2 border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card-hover"
        >
          <span className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                {label}
              </span>
              <span className="block text-[15px] font-medium text-ink-900">
                {value(contact)}
              </span>
            </span>
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-ink-400 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}
