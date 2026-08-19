import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/content";
import { categoryIconMap, skillIconMap, type IconComponent } from "@/data/skillIcons";
import { cn } from "@/lib/utils";
import { CardBrackets } from "@/components/CardBrackets";
import { Code2 } from "lucide-react";

const LEARNING_SUFFIX = " (aprendiendo)";

function SkillCard({ category, icon: CategoryIcon, children }: { category: string; icon: IconComponent; children: ReactNode }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <CardBrackets />

      <div className="relative z-10 flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          <CategoryIcon className="size-5" />
        </span>
        <h3 className="text-base font-medium tracking-tight">{category}</h3>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

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
                <SkillCard category={group.category} icon={CategoryIcon}>
                    {group.skills.map((skill) => {
                      const entry = skillIconMap[skill];
                      const SkillIcon = entry?.icon;
                      const isLearning = skill.endsWith(LEARNING_SUFFIX);
                      const label = isLearning ? skill.slice(0, -LEARNING_SUFFIX.length) : skill;

                      return (
                        <span
                          key={skill}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-colors hover:border-primary/60 hover:text-primary",
                            isLearning
                              ? "border-dashed border-border/70 bg-transparent text-muted-foreground"
                              : "border-border bg-background",
                          )}
                        >
                          {SkillIcon && (
                            <span
                              className={cn(
                                "flex size-4 shrink-0 items-center justify-center",
                                entry.needsDarkChip && "rounded-full bg-neutral-900 p-0.5",
                                isLearning && "opacity-70",
                              )}
                            >
                              <SkillIcon className="size-full" color={entry.color} />
                            </span>
                          )}
                          {label}
                          {isLearning && <span className="text-[11px] text-muted-foreground/70">· aprendiendo</span>}
                        </span>
                      );
                    })}
                </SkillCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
