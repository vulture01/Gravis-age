/**
 * The four-point diamond mark echoed from the negative space in the
 * Gravis wordmark's "V". Reused throughout the site as a small signature
 * accent — eyebrow bullets, process markers, card hovers, dividers —
 * so the brand mark shows up in more than just the header logo.
 */
export default function DiamondMark({ className = "w-3 h-3", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.6 6.6 12 0 12C6.6 12 12 17.4 12 24C12 17.4 17.4 12 24 12C17.4 12 12 6.6 12 0Z"
        fill={color}
      />
    </svg>
  );
}
