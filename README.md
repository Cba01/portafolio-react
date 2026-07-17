# Portafolio personal

Código de mi portafolio. Lo armé para tener un lugar propio donde mostrar en qué he trabajado, en vez de depender solo de LinkedIn o el CV en PDF.

Vengo de 1.5 años haciendo Unity (VR/AR/MR), y ahora estoy en transición hacia desarrollo web full stack, así que el sitio mezcla ambas cosas: proyectos de realidad aumentada/mixta junto con apps fullstack hechas con Django + React.

## Stack

- React 19 + TypeScript, con Vite
- Tailwind CSS v4
- Motion para las animaciones de scroll
- Base UI / shadcn para los componentes de UI
- EmailJS para que el formulario de contacto mande correo sin backend propio

## Correrlo en local

```bash
npm install
npm run dev
```

El formulario de contacto necesita credenciales de EmailJS para funcionar. Copia `.env.example` a `.env` y completa:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sin eso el sitio funciona igual, solo falla el envío del formulario.

## Dónde está cada cosa

- `src/components/` — una sección por archivo (Hero, About, Projects, Skills, Contact, etc.)
- `src/data/content.ts` — todo el texto y la data: perfil, experiencia, proyectos, skills. Es lo primero que toco cuando actualizo algo.
- `src/data/skillIcons.tsx` — qué ícono y color le corresponde a cada tecnología en la sección de Skills.
- `src/components/ui/` — componentes base (botón, card, badge, etc.)

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (corre `tsc -b` y luego `vite build`)
- `npm run preview` — sirve el build para probarlo local
- `npm run lint` — oxlint
