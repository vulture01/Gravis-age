import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const variants = {
  // Main Gravis CTA
  // Dark text on lime gives much better contrast.
  primary:
    "bg-lime-500 text-navy-900 shadow-glow hover:bg-lime-400 hover:-translate-y-0.5",

  // Dark button
  dark:
    "bg-navy-800 text-white border border-line hover:bg-navy-700 hover:-translate-y-0.5",

  // Outline button
  outline:
    "bg-transparent text-white border border-white/20 hover:border-lime-500 hover:text-lime-500",

  // Minimal button
  ghost:
    "bg-transparent text-gray-300 hover:text-white",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Shared CTA button.
 *
 * Renders:
 * - <Link> for internal routes (`to`)
 * - <a> for external URLs (`href`)
 * - <button> when neither is provided
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
    <button
      type={type}
      onClick={onClick}
      className={base}
      {...rest}
    >
      {content}
    </button>
  );
}