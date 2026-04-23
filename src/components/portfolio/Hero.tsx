import { ArrowDown, Zap, ZapOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Glitch = {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  life: number;
  maxLife: number;
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [glitchOn, setGlitchOn] = useState(true);
  const glitchOnRef = useRef(true);

  useEffect(() => {
    glitchOnRef.current = glitchOn;
  }, [glitchOn]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    const glitches: Glitch[] = [];
    // palette uses design tokens (red primary + white)
    const colors = [
      "rgba(230, 57, 70, 0.85)",   // red
      "rgba(230, 57, 70, 0.35)",
      "rgba(255, 255, 255, 0.85)", // white
      "rgba(255, 255, 255, 0.25)",
      "rgba(230, 57, 70, 0.6)",
    ];

    const spawn = (count = 1) => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      for (let i = 0; i < count; i++) {
        const isThin = Math.random() < 0.4;
        glitches.push({
          x: Math.random() * w,
          y: Math.random() * h,
          w: isThin ? Math.random() * 200 + 40 : Math.random() * 120 + 20,
          h: isThin ? Math.random() * 4 + 1 : Math.random() * 40 + 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 0,
          maxLife: Math.random() * 28 + 8,
        });
      }
    };

    let raf = 0;
    let frame = 0;
    const tick = () => {
      frame++;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      if (glitchOnRef.current) {
        // burst spawning to mimic circuit interference
        if (frame % 6 === 0 && Math.random() < 0.7) spawn(Math.floor(Math.random() * 3) + 1);
        if (frame % 90 === 0) spawn(Math.floor(Math.random() * 6) + 4); // periodic burst

        for (let i = glitches.length - 1; i >= 0; i--) {
          const g = glitches[i];
          g.life++;
          const t = g.life / g.maxLife;
          const alpha = Math.max(0, 1 - t);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = g.color;
          ctx.fillRect(g.x, g.y, g.w, g.h);
          // occasional offset slice for digital tear
          if (Math.random() < 0.08) {
            ctx.fillRect(g.x + (Math.random() * 10 - 5), g.y, g.w, 1);
          }
          if (g.life >= g.maxLife) glitches.splice(i, 1);
        }
        ctx.globalAlpha = 1;
      } else {
        glitches.length = 0;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6"
    >
      {/* Glitch canvas overlay */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 mix-blend-screen"
      />

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setGlitchOn((v) => !v)}
        aria-label={glitchOn ? "Disable glitch effect" : "Enable glitch effect"}
        className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-background/60 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {glitchOn ? <Zap className="h-4 w-4" /> : <ZapOff className="h-4 w-4" />}
      </button>

      {/* Decorative animated red line */}
      <div className="absolute left-0 top-1/2 hidden h-px bg-primary md:block animate-line-grow" style={{ maxWidth: "20%" }} />
      <div className="absolute right-0 top-1/3 hidden h-px bg-primary md:block animate-line-grow" style={{ maxWidth: "15%" }} />


      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-soft">
            Portfolio · 2025
          </span>
        </div>

        <h1
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Wang Yifei
          <span className="block text-primary">— Game & Interaction Designer</span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-soft md:text-xl animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Crafting meaningful experiences at the intersection of play, empathy, and technology.
        </p>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          <Button
            size="lg"
            variant="hero"
            onClick={() => document.getElementById("works-divider")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="ghostRed"
            onClick={() => document.getElementById("about-divider")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-down">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
