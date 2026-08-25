import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRightIcon, FileArrowDownIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/content";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -z-10 size-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
        style={{ y: reduce ? 0 : glowY }}
        aria-hidden="true"
      />

      <motion.svg
        viewBox="0 0 200 120"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-auto w-184 max-w-[92vw] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ y: reduce ? 0 : glowY }}
      >
        <path d="M6 36V6H36" stroke="var(--accent-violet)" strokeWidth="1" strokeLinecap="round" />
        <path d="M164 6H194V36" stroke="var(--accent-violet)" strokeWidth="1" strokeLinecap="round" />
        <path d="M194 84V114H164" stroke="var(--accent-cyan)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 114H6V84" stroke="var(--accent-cyan)" strokeWidth="1" strokeLinecap="round" />
      </motion.svg>

      <Reveal className="flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex size-1.5">
            <motion.span
              className="absolute inline-flex size-full rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-cyan))]"
              animate={reduce ? undefined : { scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative inline-flex size-1.5 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent-cyan))]" />
          </span>
          Disponible para nuevas oportunidades
        </div>

        <p className="text-sm font-medium text-primary">{profile.role}</p>

        <h1 className="mt-3 max-w-[22ch] text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-[55ch] text-lg text-muted-foreground">
          {profile.subtextParts.map((part, index) => (
            <span
              key={index}
              className={part.emphasis ? "font-mono font-medium text-foreground" : undefined}
            >
              {part.text}
            </span>
          ))}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            nativeButton={false}
            className="shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
            render={
              <a href="#proyectos">
                Ver proyectos
                <ArrowRightIcon className="size-4" weight="bold" />
              </a>
            }
          />
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={
              <a href={profile.resumeUrl} download>
                Descargar CV
                <FileArrowDownIcon className="size-4" weight="bold" />
              </a>
            }
          />
        </div>
      </Reveal>
    </section>
  );
}
