import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="text-muted-foreground">
          ¿Buscas sumar a alguien con esta base?{" "}
          <a
            href={profile.socials.email}
            className="font-medium text-primary transition-colors hover:text-accent-violet"
          >
            Escríbeme
          </a>
          .
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={profile.socials.email} aria-label="Email" className="transition-colors hover:text-primary">
            <EnvelopeSimpleIcon className="size-5" weight="bold" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <GithubLogoIcon className="size-5" weight="bold" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <LinkedinLogoIcon className="size-5" weight="bold" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con React, Tailwind y Motion.</p>
        </div>
      </div>
    </footer>
  );
}
