export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tighter">
              AI <span className="text-primary">Dashboard</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              企业级 AI 基础设施构建者
            </p>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Modelverse</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Sandbox</li>
              <li className="hover:text-primary cursor-pointer transition-colors">定价</li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">资源</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">文档中心</li>
              <li className="hover:text-primary cursor-pointer transition-colors">API 参考</li>
              <li className="hover:text-primary cursor-pointer transition-colors">社区</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">公司</h3>
             <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">关于我们</li>
              <li className="hover:text-primary cursor-pointer transition-colors">联系我们</li>
              <li className="hover:text-primary cursor-pointer transition-colors">加入我们</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 AI Dashboard Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

