import Hero from "@/components/portfolio/Hero";
import Divider from "@/components/portfolio/Divider";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Project1 from "@/components/portfolio/projects/Project1";
import Project2 from "@/components/portfolio/projects/Project2";
import Project3 from "@/components/portfolio/projects/Project3";
import Project4 from "@/components/portfolio/projects/Project4";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Divider id="about-divider" title="About Me" />
      <About />
      <Divider id="works-divider" title="Selected Works" />
      <Projects />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Footer />
    </main>
  );
};

export default Index;
