import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 40%, var(--background) 82%), linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="mx-auto w-full max-w-3xl px-6 sm:space-y-1">
          <Hero />
          <SkillSection />
          <ProjectSection />
          <Stats />
        </main>
      </div>
    </div>
  );
};

export default App;
