# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores y tech leads en Chile evaluando candidatos para roles full stack web junior/mid. Llegan típicamente vía postulación a una vacante o LinkedIn, buscando una alternativa más completa que el CV en PDF o el perfil de LinkedIn solo.

## Product Purpose

Portafolio personal de Sebastián Chuquimia Vergara para mostrar en qué ha trabajado sin depender solo de LinkedIn o el CV en PDF, con el objetivo de conseguir oportunidades laborales como desarrollador full stack web. Éxito significa que un reclutador lo contacte (formulario o email).

## Positioning

Combina 1.5 años de experiencia profesional en Unity/XR (realidad virtual, aumentada, mixta, proyectos 3D) con una transición activa y documentada hacia desarrollo full stack web (Django + Django REST Framework, React, PostgreSQL, Docker). Esa mezcla le da una perspectiva técnica versátil que un candidato puramente web junior, o uno puramente XR, no podría ofrecer igual.

## Operating Context

Sitio estático (React + Vite), sin backend propio: el formulario de contacto usa EmailJS y requiere las variables de entorno `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY`; sin ellas el sitio funciona pero el envío del formulario falla. Todo el texto y la data (perfil, experiencia, proyectos, skills) vive centralizado en `src/data/content.ts`; los íconos y colores por tecnología en `src/data/skillIcons.tsx`. Una sección por archivo en `src/components/` (Hero, About, Projects, Skills, Contact, Footer, Nav).

## Capabilities and Constraints

- Proyectos reales con links verificables: repos en GitHub, demos en vivo (Vercel, itch.io) y videos (YouTube, Instagram) según el proyecto.
- El proyecto "TaskFlow" está explícitamente "en proceso de despliegue" — no tiene `demoUrl` todavía; no inventar un link hasta que exista.
- CV descargable real en `public/SebastianChuquimia-CV-DesarrolladorSoftware.pdf`.
- Contacto sin backend propio (EmailJS) — cualquier feature de contacto debe respetar esa restricción o documentar explícitamente un cambio de arquitectura.
- Sitio en español; el mercado objetivo principal es Chile aunque el trabajo pueda ser remoto-compatible.

## Brand Commitments

Nombre real: Sebastián Chuquimia Vergara. Logo en `public/portfolio-logo.png`, favicon en `public/favicon.svg`. Título/meta ya fijados en `index.html` ("Sebastián Chuquimia Vergara - Desarrollador Full Stack Web").

## Evidence on Hand

- Proyectos reales (`src/data/content.ts`): Holo AR (verificación BIM en AR), Tarjeta de Presentación Interactiva con IA (AR + avatar conversacional), Showroom Interactivo BTicino (Meta Quest 3), Todo List Fullstack (Django + React, desplegado), TaskFlow (Django + React, en despliegue), Zombies Survival (Unity, juego individual).
- Imágenes reales de cada proyecto en `public/projects/`.
- CV real en PDF (ver Brand Commitments).
- No hay testimonios, métricas de impacto, logos de clientes/empresas ni casos de estudio con datos — no fabricar ninguno de estos; el portafolio se sostiene solo en proyectos y evidencia verificable.

## Product Principles

1. Honestidad sobre el momento de transición: no ocultar que viene de XR/Unity — usarlo como diferenciador, no como debilidad.
2. Evidencia real por sobre relleno: solo proyectos, repos y demos verificables; nunca inventar testimonios, métricas o clientes.
3. Contacto como conversión principal: cualquier decisión de contenido o diseño debe facilitar que un reclutador llegue al formulario o al email.
4. Español y mercado chileno como base del tono y el contenido, aunque el perfil sea compatible con trabajo remoto.
5. Disponibilidad inmediata comunicada con claridad — es un dato operativo que puede cambiar y debe mantenerse actualizado en `src/data/content.ts`.
