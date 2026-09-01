import { Brain, Dumbbell, Repeat, Users } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { about } from "@/data/portfolio";

const traits = [
  { icon: Dumbbell, title: "Discipline", text: "Daily training built a habit of consistency." },
  { icon: Users, title: "Teamwork & Leadership", text: "Competing and training with a squad." },
  { icon: Repeat, title: "Consistency", text: "Steady progress over quick shortcuts." },
  { icon: Brain, title: "Problem Solving", text: "Break it down, drill it, solve it." },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="About Me"
          title="Discipline from the mat, creativity from technology"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-3xl p-7 sm:p-9">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {traits.map((trait, i) => (
              <Reveal key={trait.title} delay={i * 90}>
                <div className="glass glass-hover h-full rounded-2xl p-5">
                  <trait.icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-base font-semibold">{trait.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{trait.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
