import React from "react";
import { cn } from "../../../lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm shadow-none",
      secondary: "border border-border bg-background hover:bg-muted text-foreground rounded-sm",
      ghost: "text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          "px-6 py-3 font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-sm",
          variants[variant],
          className
        )}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
