import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/content";
import { categoryIconMap, skillIconMap } from "@/data/skillIcons";
import { cn } from "@/lib/utils";
import { Code2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skills</h2>
          <p className="mt-3 max-w-[55ch] text-muted-foreground">
            Herramientas y tecnologías con las que construyo, de backend a experiencias inmersivas.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const CategoryIcon = categoryIconMap[group.category] ?? Code2;

            return (
              <Reveal key={group.category} delay={i * 0.05} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <CategoryIcon className="size-5" />
                    </span>
                    <h3 className="text-base font-medium tracking-tight">{group.category}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => {
                      const entry = skillIconMap[skill];
                      const SkillIcon = entry?.icon;

                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs font-medium transition-colors hover:border-primary/60 hover:text-primary"
                        >
                          {SkillIcon && (
                            <span
                              className={cn(
                                "flex size-4 shrink-0 items-center justify-center",
                                entry.needsDarkChip && "rounded-full bg-neutral-900 p-0.5",
                              )}
                            >
                              <SkillIcon className="size-full" color={entry.color} />
                            </span>
                          )}
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
