import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Placeholder from "../Placeholder";
import ProjectShell from "./ProjectShell";
import { Cpu, Sun, Moon, Hand, Sprout, Network } from "lucide-react";
import echoOverview from "@/assets/echo-overview.png";
import echoStructure from "@/assets/echo-structure.jpg";

const Project4 = () => {
  return (
    <ProjectShell
      id="project-4"
      number="04"
      title="Echo Garden"
      subtitle="Interactive Hardware Installation · Human × Nature Resonance"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-10 grid w-full grid-cols-2 bg-secondary md:grid-cols-4">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
          <TabsTrigger value="structure" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Structure</TabsTrigger>
          <TabsTrigger value="effects" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Effects</TabsTrigger>
          <TabsTrigger value="philosophy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Philosophy</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fade-in">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-lg border border-primary/20">
            <img src={echoOverview} alt="Echo Garden installation hero shot" className="h-full w-full object-cover" />
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="flex flex-wrap gap-2">
                {["Interactive Art", "Natural Echo", "Sensors", "Kinetic Sculpture"].map(k => (
                  <span key={k} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-gray-soft">{k}</span>
                ))}
              </div>
            </div>
            <p className="text-foreground leading-relaxed md:col-span-2">
              Echo Garden is a sound-and-touch interactive installation. When visitors approach or touch the plants,
              humidity sensors trigger servo motors that open artificial flowers and sway grass blades, while playing
              sampled nature sounds — wind, birds, water. It explores the emotional resonance between humans and the
              non-living natural world.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="structure" className="animate-fade-in">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="aspect-square w-full overflow-hidden rounded-lg border border-primary/20">
              <img src={echoStructure} alt="Echo Garden exploded structure view" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <h4 className="mb-2 font-display text-lg font-bold text-primary">Internal Hardware</h4>
                <ul className="space-y-1 text-sm text-gray-soft">
                  <li>· Motors — drive flowers</li>
                  <li>· Servos — control leaf angles</li>
                  <li>· Humidity sensors — detect touch & proximity</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-card p-6">
                <h4 className="mb-2 font-display text-lg font-bold text-primary">Artistic Layer</h4>
                <ul className="space-y-1 text-sm text-gray-soft">
                  <li>· Super-light clay — stems and leaves</li>
                  <li>· Grass powder — ground cover</li>
                  <li>· Modular flower bricks — interchangeable, each colour produces a different sound</li>
                </ul>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-secondary p-4 text-sm text-gray-soft">
                <Cpu className="h-5 w-5 text-primary shrink-0" />
                Arduino control board · multi-channel sensor input · pre-recorded sound library.
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="effects" className="animate-fade-in">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <Placeholder icon={Sun} label="Daytime View" aspect="aspect-[4/3]" />
              <p className="text-sm text-gray-soft text-center">Daytime · soft natural light reveals organic textures.</p>
            </div>
            <div className="space-y-3">
              <Placeholder icon={Moon} label="Night View" aspect="aspect-[4/3]" />
              <p className="text-sm text-gray-soft text-center">Night · built-in LED strips bloom from inside the flowers.</p>
            </div>
            <div className="space-y-3">
              <Placeholder icon={Hand} label="Interaction Close-up" aspect="aspect-[4/3]" />
              <p className="text-sm text-gray-soft text-center">Touch · the flower opens in response to a hand.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="philosophy" className="animate-fade-in">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <Sprout className="h-6 w-6 text-primary" />
              <h4 className="mt-4 font-display text-xl font-bold text-foreground">Philosophy</h4>
              <p className="mt-3 text-sm text-gray-soft leading-relaxed">
                Echo Garden reflects on urban alienation from nature. Every interaction creates an "echo" —
                the garden remembers and responds. Low-tech construction with natural materials creates warmth,
                resisting the cold sheen of typical digital installations.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <Network className="h-6 w-6 text-primary" />
              <h4 className="mt-4 font-display text-xl font-bold text-foreground">Future Plans</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-soft">
                <li>· Multiple garden units forming an "echo network"</li>
                <li>· AI that adapts behaviour based on interaction frequency</li>
                <li>· Educational version for children's nature classes</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </ProjectShell>
  );
};

export default Project4;
