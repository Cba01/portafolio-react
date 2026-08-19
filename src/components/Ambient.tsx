import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function Ambient() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const yBlue = useTransform(scrollY, [0, 2400], [0, 120]);
  const yViolet = useTransform(scrollY, [0, 2400], [0, -160]);
  const yCyan = useTransform(scrollY, [0, 2400], [0, 220]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-48 -left-48 size-136 rounded-full bg-primary/15 blur-3xl"
        style={{ y: reduce ? 0 : yBlue }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 size-120 rounded-full bg-accent-violet/10 blur-3xl"
        style={{ y: reduce ? 0 : yViolet }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/4 size-112 rounded-full bg-accent-cyan/10 blur-3xl"
        style={{ y: reduce ? 0 : yCyan }}
      />
    </div>
  );
}
