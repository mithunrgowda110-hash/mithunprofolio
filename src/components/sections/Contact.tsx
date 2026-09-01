import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { contact, isPlaceholder } from "@/data/portfolio";

const items = [
  { icon: Mail, label: "Email", value: contact.email, href: (v: string) => `mailto:${v}` },
  { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: (v: string) => v },
  {
    icon: Instagram,
    label: "Instagram",
    value: contact.instagram,
    href: (v: string) => `https://instagram.com/${v.replace(/^@/, "")}`,
  },
  { icon: Phone, label: "Phone", value: contact.phone, href: (v: string) => `tel:${v}` },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to internships, collaborations and technology opportunities."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const placeholder = isPlaceholder(item.value);
            const content = (
              <div className="glass glass-hover flex h-full items-center gap-4 rounded-2xl p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p
                    className={`truncate text-sm font-semibold ${
                      placeholder ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal key={item.label} delay={i * 80}>
                {placeholder ? (
                  content
                ) : (
                  <a
                    href={item.href(item.value)}
                    target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {content}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Placeholder values stay in <code className="text-primary">src/data/portfolio.ts</code>{" "}
            until real details are added.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
