import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Placeholder from "../Placeholder";
import ProjectShell from "./ProjectShell";
import { Smile, Frown, Angry, Meh, Camera, Sparkles, AlertCircle } from "lucide-react";
import project3Overview from "@/assets/project3-overview.png";
import memeAngry from "@/assets/meme-angry.jpg";
import memeHappy from "@/assets/meme-happy.jpg";

const memeImages: Record<string, string> = {
  angry: memeAngry,
  happy: memeHappy,
};

const emotions = [
  { id: "angry", label: "Angry", icon: Angry, meme: "Furrowed brow, sharp lines radiating outward" },
  { id: "disgust", label: "Disgust", icon: Frown, meme: "Wrinkled nose, downturned mouth" },
  { id: "fear", label: "Fear", icon: Frown, meme: "Wide eyes, raised eyebrows, open mouth" },
  { id: "happy", label: "Happy", icon: Smile, meme: "Crescent eyes, broad upturned smile" },
  { id: "sad", label: "Sad", icon: Frown, meme: "Drooping eyes, single tear, downward mouth" },
  { id: "surprise", label: "Surprise", icon: Meh, meme: "Round eyes, raised brows, O-shaped mouth" },
  { id: "neutral", label: "Neutral", icon: Meh, meme: "Flat line mouth, soft eyes, no expression" },
];

const Project3 = () => {
  const [selected, setSelected] = useState(emotions[3]);

  return (
    <ProjectShell
      id="project-3"
      number="03"
      title="Face-to-Meme Generator"
      subtitle="Vision Transformer · Real-time Emotion → Comic Faces"
    >
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-10 grid w-full grid-cols-2 bg-secondary md:grid-cols-4">
          <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
          <TabsTrigger value="model" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Model</TabsTrigger>
          <TabsTrigger value="mapping" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mapping</TabsTrigger>
          <TabsTrigger value="future" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Future</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fade-in">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/20 bg-secondary">
              <img src={project3Overview} alt="Face-to-Meme generator overview — neural face visualization" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Facial Emotion Recognition", "Vision Transformer", "Meme Generation"].map(k => (
                  <span key={k} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-gray-soft">{k}</span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Face-to-Meme</h3>
              <p className="mt-6 text-foreground leading-relaxed">
                A real-time system that uses a fine-tuned Vision Transformer (ViT) to classify seven emotions —
                <span className="text-primary"> angry, disgust, fear, happy, sad, surprise, neutral</span> — from a face image or webcam feed.
                It instantly matches each emotion with a corresponding meme from Scott McCloud's
                <em> Understanding Comics</em>. Click on any emotion word to reveal its meme.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="model" className="animate-fade-in">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">Model</span>
              <h4 className="mt-2 font-display text-xl font-bold text-foreground">mo-thecreator/vit-Facial-Expression-Recognition</h4>
              <p className="mt-4 text-sm text-gray-soft leading-relaxed">
                Vision Transformer fine-tuned for facial emotion recognition. Trained on FER2013, MMI, and AffectNet datasets — combining classical and modern affective-computing benchmarks.
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 bg-card p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-primary">Seven Classes</span>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {emotions.map(e => (
                  <div key={e.id} className="flex items-center gap-2 rounded border border-primary/20 px-3 py-2 text-sm text-foreground">
                    <e.icon className="h-4 w-4 text-primary" />
                    {e.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mapping" className="animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm text-gray-soft">Click any emotion to see its corresponding McCloud meme face:</p>
              <div className="flex flex-wrap gap-3">
                {emotions.map(e => (
                  <button
                    key={e.id}
                    onClick={() => setSelected(e)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                      selected.id === e.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary/30 text-foreground hover:border-primary"
                    }`}
                  >
                    <e.icon className="h-4 w-4" />
                    {e.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary/30 bg-card p-6 animate-scale-in" key={selected.id}>
              {memeImages[selected.id] ? (
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-primary/20 bg-secondary flex items-center justify-center p-4">
                  <img src={memeImages[selected.id]} alt={`${selected.label} — McCloud meme face`} className="h-full w-full object-contain" loading="lazy" />
                </div>
              ) : (
                <Placeholder icon={selected.icon} label={`${selected.label} — McCloud Face`} aspect="aspect-square" />
              )}
              <h4 className="mt-4 font-display text-2xl font-bold text-primary">{selected.label}</h4>
              <p className="mt-2 text-sm italic text-gray-soft">"{selected.meme}"</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="future" className="animate-fade-in">
          <div className="grid gap-6 md:grid-cols-3">
            <FutureCard icon={Sparkles} title="Current Applications" body="Social chat assistance, emotion visualisation, educational psychology classroom." />
            <FutureCard icon={Camera} title="Future Extensions" body="Real-time webcam AR overlay, user-uploaded custom meme libraries, multimodal recognition (voice + face)." />
            <FutureCard icon={AlertCircle} title="Technical Challenges" body="Lighting variation and occlusion — addressed via data augmentation and model quantisation." />
          </div>
        </TabsContent>
      </Tabs>
    </ProjectShell>
  );
};

const FutureCard = ({ icon: Icon, title, body }: { icon: any; title: string; body: string }) => (
  <div className="rounded-lg border border-primary/20 bg-card p-6 transition-all hover:border-primary hover:shadow-red">
    <Icon className="h-6 w-6 text-primary" />
    <h4 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h4>
    <p className="mt-2 text-sm text-gray-soft leading-relaxed">{body}</p>
  </div>
);

export default Project3;
