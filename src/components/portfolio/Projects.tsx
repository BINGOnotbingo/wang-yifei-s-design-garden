import ProjectCard from "./ProjectCard";
import { Gamepad2, Bot, Camera, Flower2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Focus: Information Maze",
    keywords: ["Information Overload", "Attention Training", "Educational Puzzle"],
    description: "A first-person game where you must find diary fragments while distracting video pop-ups stack on screen.",
    icon: Gamepad2,
    targetId: "project-1",
  },
  {
    number: "02",
    title: "AI-Based Multimodal Empathy Adolescent Embodied Intelligent Emotional Companion Pet",
    keywords: ["Adolescent Mental Health", "Embodied Intelligence", "Multimodal Empathy"],
    description: "A spherical wearable companion that recognises emotions through vision, voice, and touch — providing low-pressure emotional support.",
    icon: Bot,
    targetId: "project-2",
  },
  {
    number: "03",
    title: "Face-to-Meme Generator",
    keywords: ["Facial Emotion Recognition", "Vision Transformer", "Meme Generation"],
    description: "Recognises seven emotions from a face and matches each with a meme from Scott McCloud's Understanding Comics.",
    icon: Camera,
    targetId: "project-3",
  },
  {
    number: "04",
    title: "Echo Garden",
    keywords: ["Interactive Art", "Natural Echo", "Sensors", "Kinetic Sculpture"],
    description: "A tactile installation where touching plants triggers mechanical movements and nature sounds — exploring human-nature resonance.",
    icon: Flower2,
    targetId: "project-4",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Four Selected Works</span>
          <p className="mt-3 text-gray-soft">Click any card to dive into the detailed case study.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(p => <ProjectCard key={p.number} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
