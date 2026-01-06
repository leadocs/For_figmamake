import { motion } from "framer-motion";
import { Cpu, Server, Network, ChevronRight, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "../common/Button";

interface Model {
  id: string;
  name: string;
  type: string;
  params: string;
  speed: string;
  description: string;
}

const models: Model[] = [
  {
    id: "1",
    name: "Nexus-7B",
    type: "NLP",
    params: "7B",
    speed: "150ms",
    description: "适用于边缘设备的轻量级推理引擎。",
  },
  {
    id: "2",
    name: "Hyperion-X",
    type: "Multimodal",
    params: "120B",
    speed: "450ms",
    description: "最先进的视觉和语言合成引擎。",
  },
  {
    id: "3",
    name: "Codex-Prime",
    type: "Code",
    params: "34B",
    speed: "200ms",
    description: "专注于全栈架构生成的模型。",
  },
];

export const Modelverse = () => {
  const [activeModel, setActiveModel] = useState<string>(models[0].id);

  return (
    <section id="modelverse" className="py-24 relative overflow-hidden scroll-mt-24 bg-background">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-overlay opacity-[0.5]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-muted text-foreground text-xs font-mono mb-6 border border-border">
            <span>Modelverse</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Modelverse</span> 精选模型市场
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light mb-8">
            拒绝海量模型堆砌，只提供经得起企业级生产环境考验的严选精品。
          </p>

          {/* Key Stat Integrated */}
          <div className="inline-flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-sm border border-border">
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium">模型部署: <span className="font-bold text-foreground font-mono">0 配置</span></span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground border-l border-border pl-3">Efficiency</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Model List */}
          <div className="space-y-3">
            {models.map((model) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveModel(model.id)}
                className={`p-4 rounded-sm cursor-pointer transition-all duration-200 group border ${
                  activeModel === model.id
                    ? "bg-muted border-foreground/20 shadow-sm"
                    : "bg-background border-transparent hover:bg-muted/50 hover:border-border"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className={`p-1.5 rounded-sm ${
                    activeModel === model.id ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                  }`}>
                    {model.type === "NLP" || model.type === "Code" ? <Cpu size={16} /> : <Server size={16} />}
                  </div>
                  {activeModel === model.id && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-foreground"
                    />
                  )}
                </div>
                <h3 className={`text-base font-bold mb-1 font-mono ${activeModel === model.id ? "text-foreground" : "text-foreground/80"}`}>
                  {model.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <span>{model.params}</span>
                  <span className="text-border">|</span>
                  <span>{model.speed}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-sm border border-border shadow-sm p-1 overflow-hidden h-full min-h-[400px] flex flex-col"
            >
              {/* Terminal Header */}
              <div className="bg-slate-50 px-4 py-2 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="ml-4 text-xs font-mono text-slate-400">model_specs.json</div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-center relative">
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="text-xs font-mono text-blue-600 mb-2">MODEL_IDENTITY</div>
                    <h3 className="text-3xl font-bold text-slate-900 font-mono tracking-tight">{models.find(m => m.id === activeModel)?.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">ARCHITECTURE</div>
                      <div className="text-lg text-slate-800 font-mono">{models.find(m => m.id === activeModel)?.type}</div>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-1">LATENCY</div>
                      <div className="text-lg text-slate-800 font-mono">{models.find(m => m.id === activeModel)?.speed}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-500 mb-2">DESCRIPTION</div>
                    <p className="text-slate-600 leading-relaxed max-w-lg">
                      {models.find(m => m.id === activeModel)?.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" className="min-w-[140px]">
                      <Zap className="mr-2 h-4 w-4" /> 
                      Deploy
                    </Button>
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

