import { ArrowSquareOutIcon, GithubLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/content";
import { cn } from "@/lib/utils";
import { CardBrackets } from "@/components/CardBrackets";

type ProjectCardProps = {
  project: Project;
  className?: string;
  wide?: boolean;
  /** Renderiza una versión reducida de la card (para proyectos secundarios como juegos). */
  compact?: boolean;
};

export function ProjectCard({ project, className, wide, compact }: ProjectCardProps) {
  const hasLinks = project.repoUrl || project.demoUrl || project.youtubeUrl;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
        compact && "flex-row items-center",
        className,
      )}
    >
      <CardBrackets />

      <div
        className={cn(
          "relative z-10 overflow-hidden",
          compact ? "aspect-square w-28 shrink-0 sm:w-36" : wide ? "aspect-video" : "aspect-[4/3]",
        )}
      >
        <img
          src={project.image}
          alt={project.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className={cn("relative z-10 flex flex-1 flex-col gap-3", compact ? "gap-1.5 p-4" : "p-6")}>
        <h3 className={cn("font-medium tracking-tight", compact ? "text-sm" : "text-lg")}>
          {project.title}
        </h3>
        {!compact && <p className="max-w-[52ch] text-sm text-muted-foreground">{project.description}</p>}

        <div className={cn("flex flex-wrap gap-2", compact ? "mt-0" : "mt-1")}>
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {hasLinks && (
          <div className={cn("flex items-center gap-5", compact ? "mt-1" : "mt-auto pt-4")}>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubLogoIcon className="size-4" weight="bold" />
                Código
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowSquareOutIcon className="size-4" weight="bold" />
                Demo
              </a>
            )}
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <YoutubeLogoIcon className="size-4" weight="bold" />
                Video
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
