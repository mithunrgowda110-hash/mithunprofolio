import { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { certificates, type Certificate } from "@/data/portfolio";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Certificates"
          title="Verified certificates"
          description="Only certificates I upload appear here — nothing is auto-generated."
        />

        {certificates.length === 0 ? (
          <Reveal className="mx-auto mt-14 max-w-xl">
            <div className="glass rounded-2xl border-dashed p-10 text-center">
              <p className="font-display text-lg font-semibold">No certificates added yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Add image files to <code className="text-primary">public/certificates/</code> and
                list them in <code className="text-primary">src/data/portfolio.ts</code> to fill
                this gallery.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <Reveal key={cert.title} delay={(i % 3) * 90}>
                <article className="glass glass-hover h-full overflow-hidden rounded-2xl">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-widest text-accent">
                      {cert.date}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActive(cert)}
                      className="mt-4 inline-flex items-center gap-2 rounded-full border border-glass-border px-4 py-2 text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Eye className="size-4" /> View Certificate
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} certificate`}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[90] grid place-items-center bg-background/85 p-5 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[88vh] w-full max-w-3xl overflow-auto rounded-3xl p-4"
          >
            <div className="flex items-start justify-between gap-4 px-2 pb-3">
              <div>
                <h3 className="font-display text-lg font-semibold">{active.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {active.issuer} · {active.date}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close certificate"
                onClick={() => setActive(null)}
                className="rounded-full border border-glass-border p-2 hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>
            <img
              src={active.image}
              alt={`${active.title} certificate, full size`}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
