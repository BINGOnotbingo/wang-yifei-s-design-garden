import { ReactNode } from "react";

interface ProjectShellProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const ProjectShell = ({ id, number, title, subtitle, children }: ProjectShellProps) => {
  return (
    <section id={id} className="border-t border-primary/20 bg-background py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Project · {number}</span>
            <span className="h-px flex-1 bg-primary/30" />
          </div>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
          <p className="mt-2 text-gray-soft">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ProjectShell;
