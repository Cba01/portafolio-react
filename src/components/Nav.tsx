import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { ListIcon, XIcon, SunIcon, MoonIcon } from "@phosphor-icons/react";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

const sectionIds = ["inicio", ...links.map((link) => link.href.slice(1))];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio");
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-3xl">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 py-2 pr-2 pl-5 shadow-lg shadow-black/5 ring-1 ring-foreground/10 backdrop-blur-xl">
          <a
            href="#inicio"
            className="shrink-0 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            {profile.name.split(" ")[0]}
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-x-2 -top-2 h-px rounded-full bg-primary shadow-[0_0_10px_1px_var(--color-primary)]"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <SunIcon className="size-[18px] dark:hidden" weight="bold" />
              <MoonIcon className="hidden size-[18px] dark:block" weight="bold" />
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
            >
              {open ? <XIcon className="size-5" weight="bold" /> : <ListIcon className="size-5" weight="bold" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/80 p-2 shadow-lg shadow-black/5 ring-1 ring-foreground/10 backdrop-blur-xl md:hidden">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
