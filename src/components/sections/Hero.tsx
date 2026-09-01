import { Award, FileDown, Mail, ScrollText } from "lucide-react";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-glass-border bg-glass px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Student · Athlete · Developer
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight">
              <span className="block text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-base">
              {profile.headline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#achievements" className={primaryBtn}>
                <Award className="size-4" /> View My Achievements
              </a>
              <a href="#certificates" className={ghostBtn}>
                <ScrollText className="size-4" /> View My Certificates
              </a>
              <a href="#contact" className={ghostBtn}>
                <Mail className="size-4" /> Contact Me
              </a>
              <a href={profile.resumeUrl} download className={ghostBtn}>
                <FileDown className="size-4" /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-10 font-display text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              {profile.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="float-soft">
          <ProfilePhoto />
        </Reveal>
      </div>
    </section>
  );
}
