import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/content";

export function Projects() {
  const mainProjects = projects.filter((project) => !project.compact);
  const secondaryProjects = projects.filter((project) => project.compact);

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Proyectos</h2>
        <p className="mt-3 max-w-[55ch] text-muted-foreground">
          Una selección de productos que construí de principio a fin, con foco en producto real y código mantenible.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {mainProjects.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.05}
            className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
          >
            <ProjectCard project={project} wide={index === 0} className="h-full" />
          </Reveal>
        ))}
      </div>

      {secondaryProjects.length > 0 && (
        <div className="mt-12">
          <Reveal>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Otros proyectos
            </h3>
          </Reveal>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} compact />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
