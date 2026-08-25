import type { ComponentType } from "react";
import {
  SiDjango,
  SiPython,
  SiSharp,
  SiDotnet,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiUnity,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Server, Code2, Database, Glasses, Scan, Combine, Box } from "lucide-react";

export type IconComponent = ComponentType<{ className?: string; color?: string }>;

export type SkillIcon = {
  icon: IconComponent;
  color: string;
  /** El logo es blanco y necesita un chip oscuro para tener contraste en tema claro. */
  needsDarkChip?: boolean;
};

export const skillIconMap: Record<string, SkillIcon> = {
  Django: { icon: SiDjango, color: "#092E20" },
  "Django REST Framework": { icon: SiDjango, color: "#092E20" },
  Python: { icon: SiPython, color: "#3776AB" },
  "C#": { icon: SiSharp, color: "#99CC00" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F03C2E" },
  "AWS EC2 (aprendiendo)": { icon: FaAws, color: "#FF9900" },
  Unity: { icon: SiUnity, color: "#FFFFFF", needsDarkChip: true },
  VR: { icon: Glasses, color: "#3b82f6" },
  AR: { icon: Scan, color: "#3b82f6" },
  MR: { icon: Combine, color: "#3b82f6" },
  "3D": { icon: Box, color: "#3b82f6" },
};

export const categoryIconMap: Record<string, IconComponent> = {
  Backend: Server,
  Frontend: Code2,
  "Bases de datos y DevOps": Database,
  "Unity y XR": Glasses,
};
