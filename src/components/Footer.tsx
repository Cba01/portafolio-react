import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</p>
        <p>Hecho con React, Tailwind y Motion.</p>
      </div>
    </footer>
  );
}
