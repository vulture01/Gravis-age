import { Link } from "react-router-dom";

export default function Logo({
  className = "h-8 w-auto",
  linkTo = "/",
}) {
  const img = (
    <img
      src="/gravis-wordmark-white.png"
      alt="Gravis"
      className={`${className} select-none`}
      draggable="false"
    />
  );

  if (!linkTo) return img;

  return (
    <Link
      to={linkTo}
      aria-label="Gravis — Home"
      className="inline-flex items-center"
    >
      {img}
    </Link>
  );
}