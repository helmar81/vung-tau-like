import { ReactNode } from "react";
import {
  Utensils,
  Coffee,
  Briefcase,
  Moon,
  Sparkles,
  Bed,
  HelpCircle
} from "lucide-react";

export const categoryIcons: Record<string, ReactNode> = {
  // Mapping by 'icon' name (as used in your CATEGORIES array)
  utensils: <Utensils size={36} strokeWidth={1.75} />,
  coffee: <Coffee size={36} strokeWidth={1.75} />,
  briefcase: <Briefcase size={36} strokeWidth={1.75} />,
  moon: <Moon size={36} strokeWidth={1.75} />,
  spa: <Sparkles size={36} strokeWidth={1.75} />,
  bed: <Bed size={36} strokeWidth={1.75} />,
  
  // Safety Fallback
  default: <HelpCircle size={36} strokeWidth={1.75} />
};