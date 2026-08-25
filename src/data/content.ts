export const profile = {
  name: "Sebastián Chuquimia Vergara",
  role: "Ingeniero en Informática - Desarrollador Full Stack Web",
  email: "seba.j.os@hotmail.com",
  headline: "Full stack web, con raíces en VR y AR.",
  /** Se resalta en mono los términos de stack para que se escaneen primero. */
  subtextParts: [
    { text: "Construyo con " },
    { text: "Django, React y TypeScript", emphasis: true },
    { text: ". Antes, 1.5 años en Unity creando experiencias " },
    { text: "VR y AR", emphasis: true },
    { text: " — misma base técnica, aplicada a un nuevo stack." },
  ],
  /** Primer párrafo se destaca como lead; los términos de stack en el segundo se resaltan en mono, igual que en el subtext del Hero. */
  bio: [
    [
      {
        text: "Soy Ingeniero en Informática con experiencia en desarrollo de software, actualmente enfocado en desarrollo web full stack. Cuento con 1.5 años de experiencia profesional en Unity (C#), desarrollando experiencias interactivas en realidad virtual, realidad aumentada, realidad mixta y proyectos 3D.",
      },
    ],
    [
      { text: "Actualmente estoy transicionando hacia el desarrollo web, con foco en " },
      { text: "Django y Django REST Framework", emphasis: true },
      { text: " para el backend, y " },
      { text: "React con TypeScript", emphasis: true },
      { text: " para el frontend, junto con " },
      { text: "PostgreSQL, Tailwind CSS y Docker", emphasis: true },
      { text: ". Durante mis estudios desplegué un proyecto en " },
      { text: "AWS EC2", emphasis: true },
      { text: ", y sigo profundizando mis conocimientos en despliegue en la nube." },
    ],
    [
      {
        text: "Me apasiona la tecnología en general y disfruto aprender nuevas herramientas y adaptarme a distintos stacks. Busco oportunidades como desarrollador web full stack, aplicando mi base sólida en programación y mi experiencia previa en proyectos interactivos para aportar una perspectiva técnica versátil.",
      },
    ],
  ],
  facts: [
    { label: "Formación", value: "Ing. en Informática" },
    { label: "Enfoque actual", value: "Full Stack Web" },
    { label: "Disponibilidad", value: "Inmediata" },
  ],
  socials: {
    github: "https://github.com/Cba01",
    linkedin: "https://www.linkedin.com/in/sebastian-chuquimia-vergara-834aab151/",
    email: "mailto:seba.j.os@hotmail.com",
  },
  resumeUrl: "/SebastianChuquimia-CV-DesarrolladorSoftware.pdf",
};

export type ExperienceItem = {
  role: string;
  duration: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Desarrollador Unity (C#)",
    duration: "1.5 años",
    description:
      "Desarrollo de experiencias con realidad virtual, realidad aumentada, realidad mixta y proyectos 3D.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  repoUrl?: string;
  demoUrl?: string;
  youtubeUrl?: string;
  /** Proyectos secundarios (ej. juegos) que se muestran en tamaño reducido para no opacar el resto. */
  compact?: boolean;
};

export const projects: Project[] = [
  {
    slug: "holo-ar",
    title: "Holo AR - Verificación de obra con BIM en AR",
    description:
      "Aplicación de realidad aumentada desarrollada en Unity con AR Foundation que utiliza marcadores de imagen para alinear modelos BIM sobre la estructura física de una obra en tiempo real, permitiendo verificar avances de construcción y detectar desviaciones respecto al diseño original.",
    stack: ["Unity", "AR Foundation", "C#"],
    image: "/projects/holo-ar.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=TioN4Z1AHs8",
  },
  {
    slug: "tarjeta-ia-ar",
    title: "Tarjeta de Presentación Interactiva con IA (AR + Avatar Conversacional)",
    description:
      "Aplicación de realidad aumentada individual desarrollada en Unity con AR Foundation: al escanear una tarjeta de presentación se despliega un avatar 3D con voz clonada (ElevenLabs) y una base de conocimiento personalizada, capaz de conversar por micrófono en tiempo real usando IA conversacional (Convai).",
    stack: ["Unity", "AR Foundation", "C#", "Convai"],
    image: "/projects/tarjeta-ia.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=uRHKBqcGnTU",
  },
  {
    slug: "showroom-bticino",
    title: "Showroom Interactivo en Realidad Mixta para BTicino",
    description:
      "Proyecto colaborativo desarrollado en Unity para Meta Quest 3: una experiencia de realidad mixta tipo showroom sobre una casa en miniatura, que permite explorar y demostrar productos de BTicino.",
    stack: ["Unity", "C#", "Mixed Reality", "Meta Quest 3"],
    image: "/projects/bticino.jpg",
    youtubeUrl: "https://www.instagram.com/p/DI6jv3ixIu5/"
  },
  {
    slug: "todo-list-fullstack",
    title: "Todo List Fullstack",
    description:
      "Aplicación de gestión de tareas fullstack con arquitectura desacoplada: API REST construida con Django REST Framework, frontend en React con Tailwind CSS, autenticación mediante JWT y base de datos PostgreSQL. Desplegado en producción (Vercel + Render).",
    stack: ["Django", "React", "Tailwind CSS", "JWT", "PostgreSQL"],
    image: "/projects/todoapp.jpg",
    repoUrl: "https://github.com/Cba01/todolist-fullstack",
    demoUrl: "https://todolist-fullstack-mu.vercel.app/"
  },
  {
    slug: "taskflow",
    title: "TaskFlow - Mini Jira Fullstack",
    description:
      "Réplica funcional de un sistema de gestión de proyectos estilo Jira, desarrollada con Django REST Framework, React, Tailwind CSS y PostgreSQL. Incluye roles y permisos de usuario, asignación de tareas, comentarios/actividad, filtros avanzados y notificaciones.",
    stack: ["Django", "React", "Tailwind CSS", "JWT", "PostgreSQL"],
    image: "/projects/taskflow.jpg",
    repoUrl: "https://github.com/Cba01/taskflow-django",
  },
  {
    slug: "zombies-survival",
    title: "Zombies Survival - Réplica del modo Zombies de Call of Duty",
    description:
      "Juego desarrollado individualmente en Unity, réplica del popular modo \"Zombies\", con oleadas de dificultad progresiva, sistema de economía in-game, compra de armas y perks distribuidos en el mapa, e IA de enemigos con pathfinding mediante NavMesh.",
    stack: ["Unity 3D", "C#"],
    image: "/projects/cod-zombies.jpg",
    repoUrl: "https://github.com/Cba01/Cod-Zombies-Remake",
    demoUrl: "https://friper.itch.io/totally-not-cod-zombies",
    compact: true,
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Django", "Django REST Framework", "Python", "C#", ".NET"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Bases de datos y DevOps",
    skills: ["PostgreSQL", "Docker", "Git", "AWS EC2 (aprendiendo)"],
  },
  {
    category: "Unity y XR",
    skills: ["Unity", "C#", "VR", "AR", "MR", "3D"],
  },
];
