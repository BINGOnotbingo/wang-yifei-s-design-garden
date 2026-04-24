import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Placeholder from "../Placeholder";
import ProjectShell from "./ProjectShell";
import { Bot, Cpu, Gamepad2, ShieldCheck, Users, School, BookOpen } from "lucide-react";
import project2Overview from "@/assets/project2-overview.png";

const Project2 = () => {
  return (
    <ProjectShell
      id="project-2"
      number="02"
      title="AI-Based Multimodal Empathy Adolescent Embodied Intelligent Emotional Companion Pet"
      subtitle="Adolescent Mental Health · Multimodal Empathy"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-10 grid w-full grid-cols-2 bg-secondary md:grid-cols-4">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
          <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Research</TabsTrigger>
          <TabsTrigger value="hardware" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Hardware</TabsTrigger>
          <TabsTrigger value="ecosystem" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Ecosystem</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fade-in">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Adolescent Mental Health", "Embodied Intelligence", "Multimodal Empathy", "Emotional Companion"].map(k => (
                  <span key={k} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-gray-soft">{k}</span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Spherical AI Companion</h3>
              <p className="mt-3 text-sm text-gray-soft">
                Authors: <span className="font-bold text-primary">Yifei Wang</span>, Zhang Xuanyue, Li Tianyu, Huang Can, Liu Zhuo, Zhou Ying
              </p>
              <p className="mt-6 text-foreground leading-relaxed">
                A lightweight, ball-shaped companion that uses visual, auditory, and tactile data to recognise emotions.
                It responds with non-verbal feedback — gentle vibrations, soft lights, slow gestures — to provide private,
                low-pressure emotional support. Integrated with a gamified growth system and home-school collaboration platform,
                it helps adolescents manage anxiety and depression.
              </p>
            </div>
            <Placeholder icon={Bot} label="Product Rendering" aspect="aspect-square" />
          </div>
        </TabsContent>

        <TabsContent value="research" className="animate-fade-in">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <h4 className="mb-3 font-display text-xl font-bold text-primary">Background</h4>
              <p className="text-sm text-gray-soft leading-relaxed">
                WHO data shows rising adolescent depression rates. Traditional support lacks immediacy, privacy, and a low-pressure entry point — leaving many teens without timely care.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <h4 className="mb-3 font-display text-xl font-bold text-primary">Market Analysis</h4>
              <ul className="space-y-2 text-sm text-gray-soft">
                <li><strong className="text-foreground">LOVOT / AIBO</strong> — general purpose, expensive, no psychological design.</li>
                <li><strong className="text-foreground">Fuyu / Tamagotchi</strong> — entertainment only.</li>
                <li><strong className="text-foreground">Enabot</strong> — simple emotion recognition.</li>
                <li className="pt-2 text-primary">→ None target ages 12–18 with professional mental-health support.</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hardware" className="animate-fade-in">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <h4 className="mb-2 font-display text-lg font-bold text-primary">Prototype</h4>
                <p className="text-sm text-gray-soft">Inspired by "Xiao Zhi" — a spherical lightweight design with soft matte material. No explicit pet features, only abstract symbols and lights.</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <h4 className="mb-3 font-display text-lg font-bold text-primary">Core Modules</h4>
                <ul className="space-y-2 text-sm text-gray-soft">
                  <li>· Micro servo motor — gesture feedback</li>
                  <li>· Flexible vibration module — touch feedback</li>
                  <li>· Hidden LED strip — light feedback</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Cpu className="h-4 w-4" />
                  <h4 className="font-display text-lg font-bold">Custom Emotion Model</h4>
                </div>
                <p className="text-sm text-gray-soft">Multimodal fusion of vision (expression), audio (prosody), and touch (pressure) — developed in-house.</p>
              </div>
            </div>
            <Placeholder icon={Bot} label="Hardware Diagram" aspect="aspect-square" />
          </div>
        </TabsContent>

        <TabsContent value="ecosystem" className="animate-fade-in">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <EcoCard icon={Gamepad2} title="Gamification" body="Pet personality evolves with interaction; emotion-regulation tasks unlock new actions and lights." />
            <EcoCard icon={BookOpen} title="Virtual ↔ Real" body="Daily real-world tasks (e.g., talk to a friend) unlock in-game rewards. Anonymous peer community." />
            <EcoCard icon={Users} title="Three-terminal" body="Student app (emotion diary), parent app (trends, communication tips), school app (anonymous class heatmap)." />
            <EcoCard icon={ShieldCheck} title="Privacy First" body="Local-first storage, explicit user authorisation, minimal data principle." />
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/30 bg-card p-4 text-sm text-gray-soft">
            <School className="h-5 w-5 text-primary shrink-0" />
            Designed to scale across the home–school care network, while keeping every interaction private to the teen.
          </div>
        </TabsContent>
      </Tabs>
    </ProjectShell>
  );
};

const EcoCard = ({ icon: Icon, title, body }: { icon: any; title: string; body: string }) => (
  <div className="rounded-lg border border-primary/20 bg-card p-6 transition-all hover:border-primary hover:shadow-red">
    <Icon className="h-6 w-6 text-primary" />
    <h4 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h4>
    <p className="mt-2 text-sm text-gray-soft leading-relaxed">{body}</p>
  </div>
);

export default Project2;
