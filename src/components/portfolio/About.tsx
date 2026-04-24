import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, User, Mail, Calendar, Heart, GraduationCap, Trophy } from "lucide-react";

const honors = [
  "Academic Excellence Scholarship",
  "Volunteer Public Welfare Excellence Scholarship",
  "Second Prize · Future Disaster Regulation Competition",
  "Bronze Award · China International College Students' Innovation Competition",
  "Three Social Practice Gold Awards",
  "One Social Practice Silver Award",
];

const About = () => {
  return (
    <section id="about" className="bg-background py-24 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="bio" className="w-full">
          <TabsList className="mx-auto mb-12 grid h-auto w-full max-w-md grid-cols-2 bg-secondary p-1">
            <TabsTrigger value="bio" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <User className="mr-2 h-4 w-4" /> Bio & Interests
            </TabsTrigger>
            <TabsTrigger value="honors" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Trophy className="mr-2 h-4 w-4" /> Honors & Awards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bio" className="mt-0 animate-fade-in">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="font-display text-4xl font-bold text-primary md:text-5xl">
                  Yifei Wang
                  <span className="block font-body text-base font-normal text-gray-soft mt-2">王艺菲 · Female</span>
                </h3>

                <div className="space-y-4 text-foreground">
                  <InfoRow icon={<Calendar className="h-4 w-4" />} label="Date of Birth" value="July 27, 2006" />
                  <InfoRow icon={<GraduationCap className="h-4 w-4" />} label="Major" value="Textile and Fashion Design, Tsinghua University" />
                  <InfoRow icon={<Heart className="h-4 w-4" />} label="Interests" value="Game Design · Embodied Artificial Intelligence" />
                  <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value="wang-yf24@mails.tsinghua.edu.cn" />
                </div>
              </div>

              <div className="rounded-lg border border-primary/30 bg-card p-8 shadow-card">
                <div className="mb-4 h-px w-12 bg-primary" />
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  Growing up, I was fascinated by how digital experiences could evoke real emotions.
                  I believe technology should feel{" "}
                  <span className="font-semibold">warm, not cold</span>. Through game design
                  and embodied AI, I strive to create experiences that comfort, challenge, and connect people.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="honors" className="mt-0 animate-fade-in">
            <div className="grid gap-4 md:grid-cols-2">
              {honors.map((honor, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 rounded-lg border border-primary/20 bg-card p-6 transition-all hover:border-primary hover:shadow-red"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                  <p className="pt-2 text-foreground">{honor}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3 border-b border-primary/10 pb-3">
    <span className="mt-1 text-primary">{icon}</span>
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-gray-soft">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  </div>
);

export default About;
