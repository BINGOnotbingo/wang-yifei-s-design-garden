import { ChevronDown } from "lucide-react";

interface DividerProps {
  id: string;
  title: string;
}

const Divider = ({ id, title }: DividerProps) => {
  return (
    <section
      id={id}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(355_78%_56%/0.08),transparent_60%)]" />

      <div className="relative z-10 text-center">
        <div className="mx-auto mb-8 h-px w-24 bg-primary animate-line-grow" />
        <h2 className="font-display text-6xl font-bold tracking-tight text-primary md:text-8xl lg:text-9xl animate-fade-in-slow">
          {title}
        </h2>
        <div className="mx-auto mt-8 h-px w-24 bg-primary animate-line-grow" />

        <div className="mt-16 flex flex-col items-center gap-2 text-gray-soft animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
          <span className="font-mono text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-down" />
        </div>
      </div>
    </section>
  );
};

export default Divider;
