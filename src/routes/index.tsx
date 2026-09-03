import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { BackToTop } from "@/components/BackToTop";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Hackathons } from "@/components/sections/Hackathons";
import { Certificates } from "@/components/sections/Certificates";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const title = "Mithun C R — National Wrestler & Developer Portfolio";
const description =
  "Portfolio of Mithun C R: national-level wrestler, student developer and technology enthusiast building websites, applications and AI/ML projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Hackathons />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mithun C R",
            jobTitle: "Student, Developer and National-level Wrestler",
            description,
          }),
        }}
      />
    </>
  );
}
