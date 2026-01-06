import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Modelverse } from "./components/sections/Modelverse";
import { Sandbox } from "./components/sections/Sandbox";
import { Advantages } from "./components/sections/Advantages";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden relative">
      {/* Global Noise Overlay - Artistic Texture */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Modelverse />
          <Sandbox />
          <Advantages />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
