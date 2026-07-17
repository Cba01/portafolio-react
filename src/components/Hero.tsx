import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon, FileArrowDownIcon, MapPinIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/content";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-[100dvh] max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      <div
        className="absolute inset-x-0 top-1/2 -z-10 h-[28rem] -translate-y-1/2 bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <Reveal className="flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex size-1.5">
            <motion.span
              className="absolute inline-flex size-full rounded-full bg-primary"
              animate={reduce ? undefined : { scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          Disponible para nuevas oportunidades
        </div>

        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {profile.name}
        </p>

        <p className="mt-2 text-sm font-medium text-primary">{profile.role}</p>

        <h1 className="mt-3 max-w-[22ch] text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-[55ch] text-lg text-muted-foreground">{profile.subtext}</p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" />
          {profile.location}
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
