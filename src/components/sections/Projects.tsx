import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Websites, apps and AI/ML work"
          description="Add each project in src/data/portfolio.ts with its image, stack and links."
        />

        {projects.length === 0 ? (
          <Reveal className="mx-auto mt-14 max-w-xl">
            <div className="glass rounded-2xl border-dashed p-10 text-center">
              <p className="font-display text-lg font-semibold">No projects added yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Each project card supports an image, title, description, technologies, a GitHub
                button and a Live Demo button.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 90}>
                <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-glass-border px-2.5 py-1 text-[11px] text-primary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex gap-2 pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-glass-border px-4 py-2 text-xs font-semibold hover:border-primary/50 hover:text-primary"
                      >
                        <Github className="size-4" /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-xs font-semibold text-primary-foreground"
                      >
                        <ExternalLink className="size-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
