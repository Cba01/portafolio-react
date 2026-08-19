const CORNERS = [
  { path: "M1 7.5V1H7.5", position: "top-2 left-2", color: "var(--accent-violet)" },
  { path: "M18.5 1H25V7.5", position: "top-2 right-2", color: "var(--accent-violet)" },
  { path: "M25 18.5V25H18.5", position: "right-2 bottom-2", color: "var(--accent-cyan)" },
  { path: "M7.5 25H1V18.5", position: "bottom-2 left-2", color: "var(--accent-cyan)" },
] as const;

/** Corner reticle that appears on hover, reusing CustomCursor's exact glyph to tie card interaction to the site's cursor identity. */
export function CardBrackets() {
  return (
    <>
      {CORNERS.map((corner) => (
        <svg
          key={corner.position}
          aria-hidden="true"
          viewBox="0 0 26 26"
          fill="none"
          className={`pointer-events-none absolute ${corner.position} z-20 size-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          style={{ filter: "drop-shadow(0 0 2px rgb(0 0 0 / 0.45))" }}
        >
          <path d={corner.path} stroke={corner.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </>
  );
}
