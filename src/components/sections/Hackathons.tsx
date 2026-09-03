import { Calendar, MapPin, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { hackathons, isPlaceholder } from "@/data/portfolio";

export function Hackathons() {
  return (
    <section id="hackathons" className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Hackathons"
          title="Build. Learn. Compete."
          description="Hackathons I have participated in — names, dates and details are editable."
        />

        <ol className="relative mt-14 space-y-5 border-l border-glass-border pl-6 sm:pl-10">
          {hackathons.map((item, i) => {
            const placeholderName = isPlaceholder(item.name);
            const placeholderDate = isPlaceholder(item.date);
            const placeholderResult = isPlaceholder(item.result ?? "");

            return (
              <Reveal key={`${item.name}-${i}`} delay={i * 70}>
                <li className="relative">
                  <span className="absolute -left-[2.1rem] top-6 grid size-8 place-items-center rounded-full border border-glass-border bg-background text-base sm:-left-[3.35rem]">
                    💻
                  </span>
                  <div className="glass glass-hover rounded-2xl p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span
                        className={`inline-flex items-center gap-1.5 ${
                          placeholderDate ? "text-muted-foreground" : "text-primary"
                        }`}
                      >
                        <Calendar className="size-3.5" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {item.mode}
                      </span>
                    </div>

                    <h3
                      className={`mt-3 font-display text-lg font-semibold ${
                        placeholderName ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>

                    {item.result ? (
                      <p
                        className={`mt-3 inline-flex items-center gap-1.5 text-xs ${
                          placeholderResult
                            ? "rounded-lg border border-dashed border-glass-border px-3 py-2 text-muted-foreground"
                            : "font-semibold text-accent"
                        }`}
                      >
                        <Trophy className="size-3.5" />
                        {item.result}
                      </p>
                    ) : null}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
