import { motion } from "motion/react";
import { Terminal, Code, Play, Box, Layers, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "../common/Button";

export const Sandbox = () => {
  return (
    <section id="sandbox" className="py-24 relative overflow-hidden scroll-mt-24 bg-background">
      {/* Background Gradients - Subtle */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-muted text-foreground text-xs font-mono mb-6 border border-border">
              <Terminal size={12} />
              <span>Agent Sandbox</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              AI Agent <span className="text-foreground">生产级运行环境</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light">
              安全隔离 · 毫秒启动 · 企业级成本优势
            </p>

             {/* Key Stat Integrated */}
            <div className="mb-10 inline-flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-sm border border-border">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-sm font-medium">金融级数据隔离: <span className="font-bold text-foreground font-mono">100%</span></span>
               <span className="text-[10px] uppercase tracking-wider text-muted-foreground border-l border-border pl-3">Security</span>
            </div>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: Code, title: "微虚拟机级安全隔离", desc: "基于 Micro-VM 虚拟化技术，实现硬件级隔离。资源占用仅为传统方案的 1/10，兼顾安全性与轻量化。" },
                { icon: Layers, title: "毫秒级极速启动", desc: "采用先进的快照技术，支持高并发 Agent 调度，启动时间压缩至毫秒级。" },
                { icon: Box, title: "开箱即用的 Agent 环境", desc: "内置执行环境与 GUI 桌面，30秒内即可创建并运行 AI Agent。" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 p-2 rounded-sm bg-muted text-foreground h-fit border border-border">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" className="rounded-sm border-foreground/20 hover:border-foreground/50">
              <Play className="mr-2 h-4 w-4" /> 进入 Sandbox
            </Button>
          </motion.div>

          {/* Right Visual (Interactive Code Editor Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            
            <div className="rounded-sm border border-border overflow-hidden relative bg-white shadow-sm">
              {/* Window Controls */}
              <div className="h-9 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="ml-4 text-xs font-mono text-slate-400">sandbox_env.py</div>
              </div>

              {/* Code Area */}
              <div className="p-6 font-mono text-sm relative z-10 min-h-[300px]">
                {/* Fluid Gradient Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                  {/* Animated Gradient Blobs */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-[100px]"
                  />
                  <motion.div 
                    animate={{ 
                      x: [0, -50, 0],
                      y: [0, 50, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]"
                  />
                  <motion.div 
                    animate={{ 
                      x: [0, 30, 0],
                      y: [0, -30, 0],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[90px]"
                  />
                </div>
                
                <div className="space-y-2 relative z-20">
                  <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">01</span>
                    <div className="text-slate-800">
                      <span className="text-purple-600">import</span> <span className="text-slate-900">torch</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">02</span>
                    <div className="text-slate-800">
                      <span className="text-purple-600">from</span> <span className="text-slate-900">transformers</span> <span className="text-purple-600">import</span> <span className="text-slate-900">AutoModel</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">03</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">04</span>
                    <div className="text-slate-800">
                      <span className="text-slate-400 italic"># 初始化神经矩阵计算环境</span>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">05</span>
                    <div className="text-slate-800">
                      <span className="text-blue-600">def</span> <span className="text-yellow-600">init_sandbox</span><span className="text-slate-500">():</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">06</span>
                    <div className="pl-4 text-slate-800">
                      <span className="text-purple-600">return</span> <span className="text-green-600">"Environment Ready"</span>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">07</span>
                  </div>
                   <div className="flex gap-4">
                    <span className="text-slate-300 select-none w-6 text-right">08</span>
                    <div>
                      <span className="text-slate-400 animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

