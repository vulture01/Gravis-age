import DiamondMark from "./DiamondMark";

export default function SectionEyebrow({ children, light = false }) {
  return (
    <span
      className={`eyebrow ${light ? "text-lime-200" : "text-lime-700"}`}
    >
      <DiamondMark className="h-3 w-3" color={light ? "#C9D7FF" : "#B6FF00"} />
      {children}
    </span>
  );
}
