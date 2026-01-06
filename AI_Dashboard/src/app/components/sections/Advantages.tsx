import { Card } from "../common/Card";
import { motion } from "motion/react";
import { ShieldCheck, Rocket, Layers } from "lucide-react";

export const Advantages = () => {
  const advantages = [
    {
      title: "安全合规",
      desc: "物理隔离，支持合规审计，满足等保三级要求。",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "高效交付",
      desc: "基础设施免运维，开发周期缩短 50% 以上。",
      icon: <Rocket size={32} />,
    },
    {
      title: "灵活扩展",
      desc: "GPU 算力按需弹性伸缩，无缝集成现有企业系统。",
      icon: <Layers size={32} />,
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-muted text-foreground text-xs font-mono mb-6 border border-border"
        >
          <Layers size={12} />
          <span>Platform Advantages</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
        >
          企业级保障
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          源于关键业务的安全底座
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {advantages.map((adv, index) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full text-center hover:bg-muted transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-lg group">
              <div className="mx-auto w-14 h-14 rounded-sm bg-muted flex items-center justify-center text-foreground mb-6 border border-border group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-mono group-hover:text-primary transition-colors">{adv.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                {adv.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
