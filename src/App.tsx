import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SearchChangedSection } from "./components/SearchChangedSection";
import { MissionSection } from "./components/MissionSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SolutionSection } from "./components/SolutionSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-white selection:text-black flex flex-col scroll-smooth">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (Home) */}
        <HeroSection />

        {/* 3. Services Section */}
        <SearchChangedSection />

        {/* 4. About Echolance Section */}
        <MissionSection />

        {/* 5. Featured Projects / Work Section */}
        <ProjectsSection />

        {/* 6. How We Work / Process Section */}
        <SolutionSection />

        {/* 7. Contact / Inquiry Form Section */}
        <CtaSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;
