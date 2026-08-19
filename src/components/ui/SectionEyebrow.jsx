import DiamondMark from "./DiamondMark";

export default function SectionEyebrow({ children, light = false }) {
  return (
    <span
      className={`eyebrow ${light ? "text-blue-200" : "text-blue-600"}`}
    >
      <DiamondMark className="h-3 w-3" color={light ? "#C9D7FF" : "#2E5BFF"} />
      {children}
    </span>
  );
}
