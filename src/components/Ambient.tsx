export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 -left-48 size-[34rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-1/3 -right-40 size-[30rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-1/4 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}
