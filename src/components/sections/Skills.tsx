import { Reveal, SectionHeading } from "@/components/Reveal";
import { skills, type Skill } from "@/data/portfolio";

const levelDots: Record<Skill["level"], number> = {
  Advanced: 3,
  Proficient: 2,
  Growing: 1,
};

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="Honest capability levels — Advanced, Proficient or Growing — instead of invented percentages."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) * 90}>
              <div className="glass glass-hover h-full rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{skill.name}</h3>
                  <span className="rounded-full border border-glass-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{skill.note}</p>
                <div
                  className="mt-4 flex gap-1.5"
                  role="img"
                  aria-label={`${skill.name}: ${skill.level}`}
                >
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 flex-1 rounded-full ${
                        dot < levelDots[skill.level] ? "bg-gradient-accent" : "bg-secondary"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
