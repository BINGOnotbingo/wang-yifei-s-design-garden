import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Placeholder from "../Placeholder";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import overview1 from "@/assets/project1-overview-1.png";
import overview2 from "@/assets/project1-overview-2.png";
import overview3 from "@/assets/project1-overview-3.png";
import diaryOpening from "@/assets/project1-diary-opening.png";
import {
  Gamepad2,
  Brain,
  Heart,
  AlertTriangle,
  Activity,
  Map as MapIcon,
  Code2,
  X,
  Bell,
} from "lucide-react";
import ProjectShell from "./ProjectShell";

const diaryFragments: Record<string, { title: string; text: string }> = {
  opening: { title: "Opening Cutscene", text: "I started this diary because I'm drowning." },
  living: { title: "Living Room", text: "Screen time 13 hours. Scrolled while my daughter asked for attention." },
  baby: { title: "Baby Room", text: "She cried. I didn't hear. I hate myself." },
  laundry: { title: "Laundry Room", text: "The washing machine finished an hour ago. I forgot." },
  bedroom: { title: "Bedroom", text: "3 AM. Still answering work emails. The phone won't stop." },
  study: { title: "Study", text: "I turned off all notifications. Finally heard my child laugh." },
};

const points = [
  { id: "opening", x: 50, y: 10, label: "Opening" },
  { id: "living", x: 25, y: 35, label: "Living Room" },
  { id: "baby", x: 75, y: 35, label: "Baby Room" },
  { id: "laundry", x: 15, y: 70, label: "Laundry" },
  { id: "bedroom", x: 50, y: 75, label: "Bedroom" },
  { id: "study", x: 85, y: 70, label: "Study" },
];

const connections = [
  ["opening", "living"], ["opening", "baby"], ["living", "laundry"],
  ["living", "bedroom"], ["baby", "study"], ["baby", "bedroom"],
  ["bedroom", "study"], ["bedroom", "laundry"],
];

const Project1 = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ProjectShell
      id="project-1"
      number="01"
      title="Focus: Information Maze"
      subtitle="Serious Game · Information Overload · Attention Training"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-10 grid w-full grid-cols-2 bg-secondary md:grid-cols-4">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
          <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Research</TabsTrigger>
          <TabsTrigger value="mechanics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mechanics</TabsTrigger>
          <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Tech</TabsTrigger>
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="animate-fade-in">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Information Overload", "Attention Training", "First-Person Puzzle"].map(k => (
                  <span key={k} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-gray-soft">{k}</span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Focus: Information Maze</h3>
              <p className="mt-3 text-sm text-gray-soft">
                Authors: <span className="font-bold text-primary">Yifei Wang</span>
              </p>
              <p className="mt-6 text-foreground leading-relaxed">
                You are an investigator entering a house where a victim collapsed from information overload. A 5-minute countdown starts.
                Every 60 seconds, a video pop-up appears and never disappears – they stack and eventually cover the screen.
                Find five diary fragments to reveal the victim's mental breakdown and learn how to protect your own attention.
              </p>
            </div>
            <OverviewCarousel />
          </div>
        </TabsContent>

        {/* RESEARCH */}
        <TabsContent value="research" className="animate-fade-in">
          <h3 className="mb-8 font-display text-2xl font-bold text-primary">Information Overload Crisis</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ResearchCard icon={Activity} title="Current Data" body="Average person receives as much information in one day as a 15th-century person did in a lifetime. Task-switching every 40 seconds." />
            <ResearchCard icon={Brain} title="Physiological Impact" body="Chronic multitasking overloads the prefrontal cortex, raises cortisol → stress and burnout." />
            <ResearchCard icon={Heart} title="Psychological Harm" body="Fragmented attention, memory decline, decision fatigue, 'information fatigue syndrome'." />
            <ResearchCard icon={AlertTriangle} title="Real-World Cases" body="Rise of 'digital detox' movements and growing workplace mental-health crises." />
          </div>
        </TabsContent>

        {/* MECHANICS */}
        <TabsContent value="mechanics" className="animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <MapIcon className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider">Top-down Floorplan · Click any room</span>
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-md border border-primary/30 bg-secondary">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                  {connections.map(([a, b], i) => {
                    const pa = points.find(p => p.id === a)!;
                    const pb = points.find(p => p.id === b)!;
                    return (
                      <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                        stroke="hsl(355 78% 56% / 0.4)" strokeWidth="0.4" strokeDasharray="1 1" />
                    );
                  })}
                </svg>
                {points.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <span className="absolute inset-0 -m-2 rounded-full bg-primary/30 blur-md transition-all group-hover:bg-primary/60" />
                    <span className="relative block h-3 w-3 rounded-full bg-primary ring-2 ring-background transition-transform group-hover:scale-150 animate-pulse-dot" />
                    <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-background/80 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-soft">
                <strong className="text-foreground">Controls:</strong> WASD + mouse · Top-center countdown · Each fragment adds +15s · Touch glowing diary pages.
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-card p-6">
              {active ? (
                <div className="animate-fade-in">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary">Diary Fragment</span>
                    <button onClick={() => setActive(null)} className="text-gray-soft hover:text-primary">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {diaryVideos[active] ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/20 bg-secondary">
                      <video
                        key={active}
                        src={diaryVideos[active]}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  ) : (
                    <Placeholder icon={Gamepad2} label="Diary Page Screenshot" aspect="aspect-[4/3]" />
                  )}
                  <h4 className="mt-4 font-display text-xl font-bold text-primary">{diaryFragments[active].title}</h4>
                  <p className="mt-2 italic text-foreground">"{diaryFragments[active].text}"</p>
                </div>
              ) : (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                  <MapIcon className="h-10 w-10 text-primary/50" />
                  <p className="mt-4 text-gray-soft">Click a glowing point on the floorplan to read a diary fragment.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* TECH */}
        <TabsContent value="tech" className="animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Bell className="h-4 w-4" />
                  <h4 className="font-display text-lg font-bold">Distraction System</h4>
                </div>
                <p className="text-sm text-gray-soft">
                  Five different video pop-ups (ads, news alerts, social media). Each appears every 60 seconds, never disappears, and stacks randomly.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <h4 className="mb-3 font-display text-lg font-bold text-primary">Performance</h4>
                <ul className="space-y-2 text-sm text-gray-soft">
                  <li>· Prefab instantiation</li>
                  <li>· Object pooling</li>
                  <li>· Max 5 pop-ups for stable framerate</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Code2 className="h-4 w-4" />
                <h4 className="font-display text-lg font-bold">Independent Video Looping</h4>
              </div>
              <p className="mb-4 text-sm text-gray-soft">Each pop-up gets its own dynamically created RenderTexture to prevent video frame mixing.</p>
              <pre className="overflow-x-auto rounded-md border border-primary/20 bg-background p-4 font-mono text-xs text-foreground">
{`// C#
RenderTexture rt = new RenderTexture(640, 360, 0);
videoPlayer.targetTexture = rt;
rawImage.texture = rt;`}
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </ProjectShell>
  );
};

const OverviewCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true }));
  const slides = [
    { src: overview1, label: "Dining Room Scene" },
    { src: overview2, label: "Living Room Scene" },
    { src: overview3, label: "Bedroom Scene" },
  ];
  return (
    <Carousel
      opts={{ loop: true, align: "start", direction: "ltr" }}
      plugins={[autoplay.current]}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((s, i) => (
          <CarouselItem key={i}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/20 bg-secondary">
              <img src={s.src} alt={s.label} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const ResearchCard = ({ icon: Icon, title, body }: { icon: any; title: string; body: string }) => (
  <div className="rounded-lg border border-primary/20 bg-card p-6 transition-all hover:border-primary hover:shadow-red">
    <Icon className="h-6 w-6 text-primary" />
    <h4 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h4>
    <p className="mt-2 text-sm text-gray-soft leading-relaxed">{body}</p>
  </div>
);

export default Project1;
