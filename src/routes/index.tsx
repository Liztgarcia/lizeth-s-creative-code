import { createFileRoute } from "@tanstack/react-router";
import { CerealHero } from "@/components/CerealHero";
import { ProjectsSection } from "@/components/ProjectsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lizeth Garcia — QA & Creative Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Lizeth Garcia — QA tester, automation engineer, and creative technologist working with hardware, data, and AI.",
      },
      { property: "og:title", content: "Lizeth Garcia — QA & Creative Engineer" },
      {
        property: "og:description",
        content:
          "QA, automation, creative code, hardware, and AI experiments. Recruit me, collaborate, or just say hi.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "liz.garcia.m@proton.me";

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <CerealHero />

      <About />
      <ProjectsSection />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-5 font-mono text-xs uppercase tracking-[0.25em] text-foreground/85 backdrop-blur-sm">
      <a href="#top" className="font-semibold">L.G.</a>
      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#work" className="hover:text-accent">Work</a>
        <a href="#experience" className="hidden hover:text-accent sm:inline">Experience</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
    </nav>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-foreground/15 px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
            01 · About
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-2xl leading-snug md:text-3xl">
            Hi, I'm <span className="text-accent">Lizeth</span>. I build quality into products that think,
            test systems that learn, and find the edge cases where AI gets creative.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            I turn complex technical requirements into bulletproof test strategies, dance between manual
            validation and automation frameworks, and am known for catching bugs that shouldn't exist yet.
          </p>
          <p className="text-base leading-relaxed text-foreground/70">
            Off the clock I make creative coding sketches, solder gadgets and lamps, and prototype small
            data + AI tools. The recruiter version: QA Engineer with a soft spot for weird hardware and
            generative systems.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
            {["Manual QA", "Automation", "Playwright", "Selenium", "Python", "TypeScript", "ESP32", "p5.js", "LLM Evals"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-foreground/25 px-3 py-1 text-foreground/80"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      company: "BMM Test Labs",
      role: "QA Engineer",
      period: "Current",
      blurb:
        "The kind of QA hire teams quietly panic about losing. I own end-to-end functional, usability, regression, and cross-platform compatibility testing on products where a missed bug means real-world consequences.",
      bullets: [
        "Architect test plans and test cases that have caught issues across software, firmware, and hardware combinations others called \"edge cases that won't happen.\" They happened.",
        "Run regression and compatibility suites across multiple hardware platforms; my tracking is so tight defects rarely come back twice.",
        "Translate fuzzy product requirements into concrete, repeatable test strategies — then automate the parts that shouldn't be a human's job.",
        "Track, reproduce, and verify fixes with the development team. I write defect reports that devs actually thank me for.",
        "Keep the test documentation that becomes the team's source of truth — onboarding, audits, and post-mortems all run faster because of it.",
      ],
    },
    {
      company: "Rotoplas",
      role: "QA & Automation",
      period: "Previous",
      blurb:
        "Worked across digital products for one of LATAM's largest water-solutions companies — building QA processes from the ground up and bringing automation into teams that had been shipping on manual checks alone.",
      bullets: [
        "Designed and executed manual + automated test suites for web and internal platforms, reducing regression cycles and catching issues before they hit production.",
        "Introduced automation frameworks and CI integration, raising release confidence and freeing the team from repetitive manual runs.",
        "Partnered with developers and product to define acceptance criteria, turning ambiguous tickets into testable, shippable work.",
      ],
    },
  ];

  return (
    <section id="experience" className="border-t border-foreground/15 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
          03 · Where I've worked
        </p>
        <h2 className="mb-14 text-4xl font-semibold md:text-6xl">Experience</h2>

        <div className="space-y-12">
          {jobs.map((j) => (
            <div
              key={j.company}
              className="grid gap-6 border-t border-foreground/15 pt-10 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <h3 className="text-2xl font-semibold">{j.company}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                  {j.role} · {j.period}
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/85">{j.blurb}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/75">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Let's work together",
  )}&body=${encodeURIComponent("Hi Lizeth,\n\n")}`;

  return (
    <section id="contact" className="border-t border-foreground/15 px-6 py-28 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
          04 · Say hi
        </p>
        <h2 className="text-5xl font-semibold md:text-7xl">
          Let's build something <span className="text-accent italic">a little weird</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-foreground/75">
          Open to QA & automation roles, collaboration on creative-code or hardware projects, and
          anyone curious about testing AI systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mailto}
            className="rounded-full bg-foreground px-7 py-4 text-sm font-medium text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Email me →
          </a>
          <a
            href="https://github.com/liztgarcia"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-foreground/70 px-7 py-4 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-primary-foreground"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-foreground/70 px-7 py-4 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-primary-foreground"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/15 px-6 py-10 font-mono text-xs uppercase tracking-[0.25em] text-foreground/60 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 md:flex-row">
        <span>© {new Date().getFullYear()} Lizeth Garcia</span>
        <span>Built with care · QA approved</span>
      </div>
    </footer>
  );
}
