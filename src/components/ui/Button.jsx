import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-blue-500 text-white shadow-glow hover:bg-blue-600 hover:-translate-y-0.5",
  dark:
    "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5",
  outline:
    "bg-transparent text-ink-900 border border-ink-900/15 hover:border-blue-500 hover:text-blue-600",
  ghost: "bg-transparent text-white/90 hover:text-white",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Shared CTA button. Renders a <Link> for internal routes (`to`), a plain
 * <a> for external URLs (`href`), or a <button> when neither is given.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  ...rest
}) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-premium ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={base}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} {...rest}>
      {content}
    </button>
  );
}
