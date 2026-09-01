import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative size-20">
          <span className="ring-orbit absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent" />
          <span className="absolute inset-3 rounded-full border border-glass-border" />
          <span className="absolute inset-0 grid place-items-center font-display text-sm font-bold tracking-[0.2em] text-gradient">
            MCR
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Loading</p>
      </div>
    </div>
  );
}
