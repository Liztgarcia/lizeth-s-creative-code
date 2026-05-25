import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-foreground/15 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-foreground/60">
              02 · Explore
            </p>
            <h2 className="text-4xl font-semibold md:text-6xl">Selected projects</h2>
          </div>
          <p className="max-w-md text-foreground/75">
            QA work pays the rent. The rest — creative code, hardware, and AI experiments — keeps the brain weird.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-card transition hover:border-accent"
            >
              {p.media && (
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {p.mediaType === "video" ? (
                    <video
                      src={p.media}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={p.media}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  {p.tags && (
                    <div className="flex flex-wrap gap-1 text-[11px] text-foreground/60">
                      {p.tags.map((t) => (
                        <span key={t}>· {t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-semibold leading-tight">{p.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{p.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    View project ↗
                  </a>
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-xs text-foreground/70 hover:text-foreground"
                    >
                      &lt;code/&gt; ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
