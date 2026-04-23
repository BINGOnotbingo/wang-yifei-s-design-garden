import { LucideIcon } from "lucide-react";

interface PlaceholderProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  aspect?: string;
}

const Placeholder = ({ icon: Icon, label, className = "", aspect = "aspect-video" }: PlaceholderProps) => {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-secondary ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,hsl(355_78%_56%/0.08)_50%,transparent_52%)] bg-[length:20px_20px]" />
      <div className="relative flex flex-col items-center gap-3 text-gray-soft">
        <Icon className="h-12 w-12 text-primary/60" />
        <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
};

export default Placeholder;
