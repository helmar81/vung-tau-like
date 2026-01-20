import { ReactNode } from "react";
import {
  Utensils,
  Coffee,
  Briefcase,
  Moon,
  Sparkles
} from "lucide-react";

export const categoryIcons: Record<string, ReactNode> = {
  utensils: <Utensils size={36} strokeWidth={1.75} />,
  coffee: <Coffee size={36} strokeWidth={1.75} />,
  briefcase: <Briefcase size={36} strokeWidth={1.75} />,
  moon: <Moon size={36} strokeWidth={1.75} />,
  spa: <Sparkles size={36} strokeWidth={1.75} />
};
