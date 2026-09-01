import { useState } from "react";
import { profile } from "@/data/portfolio";

/**
 * Shows the passport photo at public/images/profile.jpg.
 * Until that file exists, a neutral monogram placeholder is shown instead —
 * no generated or stand-in face is used.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-fit">
      <span className="ring-orbit absolute -inset-4 rounded-full border border-dashed border-primary/30" />
      <span className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
      <div className="glass relative size-56 overflow-hidden rounded-full p-1.5 sm:size-72">
        <div className="size-full overflow-hidden rounded-full bg-secondary">
          {failed ? (
            <div className="flex size-full flex-col items-center justify-center gap-2 text-center">
              <span className="font-display text-4xl font-bold text-gradient">MCR</span>
              <span className="px-6 text-[10px] uppercase tracking-widest text-muted-foreground">
                Add photo at public/images/profile.jpg
              </span>
            </div>
          ) : (
            <img
              src={profile.photo}
              alt="Portrait of Mithun C R"
              width={288}
              height={288}
              onError={() => setFailed(true)}
              className="size-full object-cover object-center"
            />
          )}
        </div>
      </div>
    </div>
  );
}
