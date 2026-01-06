import { Button } from "../common/Button";
import { motion } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Modelverse", id: "modelverse" },
    { label: "Sandbox", id: "sandbox" },
    { label: "体验中心", id: "solutions" },
    { label: "文档", id: "docs" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                <Terminal size={16} />
              </div>
              <span className="font-mono tracking-tight text-lg">AI Dashboard</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium font-mono uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              登录控制台
            </a>
            <Button variant="primary" className="py-2 px-4 text-sm h-10">
              免费试用
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <a href="#" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                登录控制台
              </a>
              <div className="px-3 py-2">
                <Button variant="primary" className="w-full">
                  免费试用
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
