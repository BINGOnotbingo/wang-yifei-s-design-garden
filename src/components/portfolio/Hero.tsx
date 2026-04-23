import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6"
    >
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
