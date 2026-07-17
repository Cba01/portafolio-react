import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skills</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <h3 className="text-sm font-medium text-muted-foreground">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="font-mono text-xs font-normal transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
