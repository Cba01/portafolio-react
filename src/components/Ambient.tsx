import { useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";
import Auralis from "@/components/ui/auralis";

// Monocromático: solo tonos de --primary (index.css), del más claro al más profundo
const DARK_COLORS = ["#3b82f6", "#93c5fd", "#1e3a8a"];
const LIGHT_COLORS = ["#93c5fd", "#1d4ed8", "#1e3a8a"];

export function Ambient() {
  const reduce = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (reduce) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.14] dark:opacity-60"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.22] dark:opacity-90"
    >
      <Auralis
        height="100%"
        className="h-full w-full"
        variant={isDark ? "dark" : "light"}
        bg={isDark ? "#030303" : "#ffffff"}
        colors={isDark ? DARK_COLORS : LIGHT_COLORS}
        speed={0.35}
        grain={isDark ? 0.25 : 0.12}
      />
    </div>
  );
}
