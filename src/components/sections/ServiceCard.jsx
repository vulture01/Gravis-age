import { Icon } from "../ui/Icon";
import DiamondMark from "../ui/DiamondMark";

/**
 * `detailed` renders the full description + bullet list (Services page).
 * Without it, it renders the compact overview version (Home page).
 */
export default function ServiceCard({ service, detailed = false }) {
  return (
    <div className="group relative rounded-xl2 border border-line bg-white p-8 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover hover:border-lime-200">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-50 text-lime-700 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-white">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-ink-900">{service.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
        {detailed ? service.description : service.short}
      </p>

      {detailed && service.details?.length > 0 && (
        <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
          {service.details.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
              <DiamondMark className="mt-1 h-2.5 w-2.5 shrink-0" color="#B6FF00" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
