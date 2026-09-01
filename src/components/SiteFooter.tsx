import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { contact, isPlaceholder, profile } from "@/data/portfolio";

const socials = [
  { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: (v: string) => v },
  {
    icon: Instagram,
    label: "Instagram",
    value: contact.instagram,
    href: (v: string) => `https://instagram.com/${v.replace(/^@/, "")}`,
  },
  { icon: Github, label: "GitHub", value: contact.github, href: (v: string) => v },
  { icon: Mail, label: "Email", value: contact.email, href: (v: string) => `mailto:${v}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: (v: string) => `tel:${v}` },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-glass-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <p className="font-display text-lg font-bold uppercase tracking-[0.25em] text-gradient">
          {profile.name}
        </p>
        <p className="max-w-md text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {profile.tagline}
        </p>

        <ul className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => {
            const placeholder = isPlaceholder(s.value);
            return (
              <li key={s.label}>
                <a
                  href={placeholder ? "#contact" : s.href(s.value)}
                  aria-label={s.label}
                  title={placeholder ? `${s.label} — not added yet` : s.label}
                  target={placeholder || s.label === "Email" || s.label === "Phone" ? undefined : "_blank"}
                  rel="noreferrer"
                  className={`grid size-11 place-items-center rounded-full border border-glass-border transition-colors hover:border-primary/50 hover:text-primary ${
                    placeholder ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  <s.icon className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
