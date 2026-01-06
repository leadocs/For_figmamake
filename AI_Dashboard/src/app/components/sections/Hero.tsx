import { Button } from "../common/Button";
import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Abstract Artistic Background - Swiss Style Geometric Forms */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Noise Texture Filter */}
        <svg className="hidden">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        
        {/* Large Architectural Circle - Rotating Background (Removed) */}

        
        {/* Dynamic Gradient Blob - "The Soul" */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 via-blue-600/10 to-transparent blur-[100px] rounded-full mix-blend-screen" 
        />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ filter: 'url(#noiseFilter)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Typography / Editorial Layout - Left Aligned */}
          <div className="lg:col-span-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 mb-8 pl-1"
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Rational Precision V2.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold tracking-tighter mb-8 -ml-1 flex flex-col items-start"
            >
              {/* Background Layer: Smaller, Muted, Slight Blur for Depth */}
              <span className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4 blur-[0.5px] translate-z-0">
                即用，
              </span>
              
              {/* Foreground Layer: Large, Vibrant, Sharp */}
              <span className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] py-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground/80 drop-shadow-sm">
                即刻拥有
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light border-l-2 border-border pl-6"
            >
              Modelverse + Sandbox
              <br />
              <span className="text-sm md:text-base text-muted-foreground/80 mt-2 block">
                无需自建算力 · 100% 隔离 · 合规 AI 开发环境
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <Button variant="primary" className="px-8 py-6 text-lg h-14 group rounded-none border-l-4 border-white/20">
                <Terminal className="mr-2" size={20} />
                体验 Modelverse
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="secondary" className="px-8 py-6 text-lg h-14 rounded-none border-b-2 border-primary/20 hover:border-primary transition-colors">
                试用 Sandbox
              </Button>
            </motion.div>
          </div>

          {/* Abstract Visual / "The Art" - Right Side */}
          <div className="hidden lg:block lg:col-span-4 relative h-[600px] perspective-[1000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
               {/* 3D Atom/Solar System Composition - Floating Free */}
               <div className="relative w-[600px] h-[600px] flex items-center justify-center transform-style-3d">
                 
                 {/* Background Galaxy Rings - 2D Plane, Rotating */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(-50px)' }}>
                   {/* Outer Ring */}
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-dashed border-slate-900/10"
                   />
                   {/* Middle Ring */}
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                     className="absolute w-[600px] h-[600px] rounded-full border-[1px] border-slate-900/10"
                   />
                   {/* Inner Ring Gradient */}
                   <div className="absolute w-[400px] h-[400px] rounded-full bg-slate-100/30 blur-3xl" />
                 </div>

                 {/* Central Core - The "Sun" */}
                 <motion.div
                    animate={{ scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-20 w-40 h-40 rounded-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10"
                 >
                    {/* Glossy Highlight */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
                    <span className="text-5xl font-mono font-bold tracking-tighter text-white drop-shadow-md z-10">AI</span>
                 </motion.div>

                 {/* Orbit System */}
                 <div className="absolute inset-0 transform-style-3d z-30">
                    
                    {/* Orbit 1: Large - Tilted X: 60, Y: -10 */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] rounded-full border-[1px] border-slate-900/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(60deg) rotateY(-10deg)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        <div 
                          className="absolute top-0 left-1/2 w-4 h-4 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] -translate-x-1/2 -translate-y-1/2" 
                          style={{ transform: 'rotateY(10deg) rotateX(-60deg)' }}
                        >
                           {/* Dot Highlight */}
                           <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/30 rounded-full" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Orbit 2: Medium - Tilted X: 50, Y: 60 */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[440px] h-[440px] -ml-[220px] -mt-[220px] rounded-full border-[1px] border-slate-900/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(50deg) rotateY(60deg)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
                      >
                         <div 
                           className="absolute bottom-0 left-1/2 w-3 h-3 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] -translate-x-1/2 translate-y-1/2" 
                           style={{ transform: 'rotateY(-60deg) rotateX(-50deg)' }}
                         >
                            {/* Dot Highlight */}
                            <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/30 rounded-full" />
                         </div>
                      </motion.div>
                    </div>

                    {/* Orbit 3: Small - Tilted X: 50, Y: -60 */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[380px] h-[380px] -ml-[190px] -mt-[190px] rounded-full border-[1px] border-slate-900/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(50deg) rotateY(-60deg)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                      >
                         <div 
                           className="absolute top-1/2 right-0 w-2 h-2 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] translate-x-1/2 -translate-y-1/2" 
                           style={{ transform: 'rotateY(60deg) rotateX(-50deg)' }}
                         >
                            {/* Dot Highlight */}
                            <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/30 rounded-full" />
                         </div>
                      </motion.div>
                    </div>

                 </div>


               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
