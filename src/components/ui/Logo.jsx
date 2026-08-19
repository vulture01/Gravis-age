import { Link } from "react-router-dom";
import logoBlack from "../../assets/gravis-logo-black.png";
import logoWhite from "../../assets/gravis-logo-white.png";

/**
 * Renders the real Gravis lockup (the uploaded logo, background removed).
 * `theme="dark"` swaps to the white version for use on navy/dark sections.
 * To replace the logo file itself, swap the two PNGs in src/assets/.
 */
export default function Logo({ theme = "light", className = "h-8 w-auto", linkTo = "/" }) {
  const src = theme === "dark" ? logoWhite : logoBlack;

  const img = (
    <img
      src={src}
      alt="Gravis Agency"
      className={`${className} select-none`}
      draggable="false"
    />
  );

  if (!linkTo) return img;

  return (
    <Link to={linkTo} aria-label="Gravis Agency — Home" className="inline-flex items-center">
      {img}
    </Link>
  );
}
