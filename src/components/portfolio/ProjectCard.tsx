import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  number: string;
  title: string;
  keywords: string[];
  description: string;
  icon: LucideIcon;
  targetId: string;
}

const ProjectCard = ({ number, title, keywords, description, icon: Icon, targetId }: ProjectCardProps) => {
  const scrollTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-primary/40 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-red"
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Project / {number}
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-primary/30 px-3 py-1 text-xs text-gray-soft"
            >
              {kw}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-soft">{description}</p>

        <Button onClick={scrollTo} variant="ghostRed" className="mt-8 w-full justify-between">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
