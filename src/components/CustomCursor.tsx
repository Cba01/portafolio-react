import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], summary, [data-cursor-hover]";
const TEXT_SELECTOR = "input, textarea, [contenteditable='true']";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [overText, setOverText] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", enabled);
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setOverText(!!target?.closest(TEXT_SELECTOR));
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const trackedX = reduce ? x : springX;
  const trackedY = reduce ? y : springY;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden="true">
      <motion.div
        className="fixed top-0 left-0 size-1.5 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: overText ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        className="fixed top-0 left-0"
        style={{ x: trackedX, y: trackedY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: overText ? 0 : 1,
          scale: hovering ? 1.7 : 1,
          rotate: hovering ? 45 : 0,
        }}
        transition={{ duration: reduce ? 0.05 : 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          d="M1 7.5V1H7.5"
          stroke={hovering ? "var(--accent-violet)" : "var(--primary)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 1H25V7.5"
          stroke={hovering ? "var(--accent-violet)" : "var(--primary)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 18.5V25H18.5"
          stroke={hovering ? "var(--accent-cyan)" : "var(--primary)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 25H1V18.5"
          stroke={hovering ? "var(--accent-cyan)" : "var(--primary)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}
