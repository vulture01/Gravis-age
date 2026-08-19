import {
  Share2,
  Target,
  TrendingUp,
  BarChart3,
  Search,
  Sparkles,
  Rocket,
  Compass,
} from "lucide-react";

export const iconMap = {
  Share2,
  Target,
  TrendingUp,
  BarChart3,
  Search,
  Sparkles,
  Rocket,
  Compass,
};

export function Icon({ name, className = "h-5 w-5" }) {
  const Cmp = iconMap[name] || Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
