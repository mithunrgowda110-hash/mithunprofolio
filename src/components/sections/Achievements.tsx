import { Reveal, SectionHeading } from "@/components/Reveal";
import { achievements, isPlaceholder } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones on and off the mat"
          description="Exact medals, competition names, dates and awards can be filled in at any time."
        />

        <ol className="relative mt-14 space-y-5 border-l border-glass-border pl-6 sm:pl-10">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <li className="relative">
                <span className="absolute -left-[2.1rem] top-6 grid size-8 place-items-center rounded-full border border-glass-border bg-background text-base sm:-left-[3.35rem]">
                  {item.icon}
                </span>
                <div className="glass glass-hover rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  <p
                    className={`mt-3 text-xs ${
                      isPlaceholder(item.meta)
                        ? "rounded-lg border border-dashed border-glass-border px-3 py-2 text-muted-foreground"
                        : "font-semibold text-accent"
                    }`}
                  >
                    {item.meta}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
