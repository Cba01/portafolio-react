import { Reveal } from "@/components/Reveal";
import { profile, experience } from "@/data/content";

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Sobre mí</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal delay={0.05} className="space-y-5">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-border border-t border-border">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between py-4">
                <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                <dd className="font-mono text-sm text-primary">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-muted-foreground">Experiencia</h3>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <div key={item.role}>
                  <p className="text-sm font-medium text-foreground">
                    {item.role} <span className="text-muted-foreground">· {item.duration}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
