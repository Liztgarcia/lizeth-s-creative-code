import { useEffect, useState } from "react";

const NAME = "LIZETH GARCIA";

/**
 * "Cereal letter rain" — letters fall from above and settle to spell the name.
 * Sequence designed to last ~10s before the page is fully revealed.
 */
export function CerealHero({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"falling" | "settled">("falling");

  useEffect(() => {
    // Total reveal length ~10s
    const t = setTimeout(() => {
      setPhase("settled");
      onDone?.();
    }, 9800);
    return () => clearTimeout(t);
  }, [onDone]);

  // Stagger each letter so the full rain lasts ~7s, then 2.5s breathing room
  const letters = NAME.split("");
  const totalStagger = 6.8; // seconds across all letters
  const perLetter = totalStagger / letters.length;

  return (
    <div className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6">
      {/* floating grain specks */}
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="grain"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.25 + Math.random() * 0.35,
          }}
        />
      ))}

      <p className="mb-8 font-mono text-xs uppercase tracking-[0.35em] text-foreground/70 fade-up">
        Portfolio · QA & Creative Engineering
      </p>

      <h1
        className="relative z-10 select-none text-center font-semibold leading-[0.95] text-foreground"
        style={{
          fontSize: "clamp(3rem, 11vw, 11rem)",
          letterSpacing: "-0.04em",
        }}
        aria-label="Lizeth Garcia"
      >
        {letters.map((char, i) => {
          const rotStart = (Math.random() * 60 - 30).toFixed(1);
          const rotEnd = (Math.random() * 16 - 8).toFixed(1);
          const delay = (i * perLetter + Math.random() * 0.15).toFixed(2);
          if (char === " ") return <span key={i} style={{ display: "inline-block", width: "0.4em" }} />;
          return (
            <span
              key={i}
              className="cereal-letter"
              style={
                {
                  "--rot-start": `${rotStart}deg`,
                  "--rot-end": `${rotEnd}deg`,
                  "--delay": `${delay}s`,
                } as React.CSSProperties
              }
            >
              {char}
            </span>
          );
        })}
      </h1>

      <div
        className="mt-10 max-w-2xl text-center"
        style={{
          opacity: phase === "settled" ? 1 : 0,
          transform: phase === "settled" ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
        }}
      >
        <p className="font-mono text-sm text-foreground/80">
          <span className="text-accent">Lizeth who?</span>{" "}
          Hi — this is my portfolio. Feel free to give me feedback, or a job. Or both
          <span className="cursor-blink">_</span>
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-full border border-foreground/70 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-primary-foreground"
          >
            View my work →
          </a>
          <a
            href="mailto:lizeth@example.com?subject=Hi%20Lizeth&body=Hey%20Lizeth%2C"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
