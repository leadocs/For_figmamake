# General guidelines

*   **Layout**: Always use Flexbox and Grid for layouts. Avoid absolute positioning unless creating specific overlays or visual effects.
*   **Responsive**: Ensure all designs are mobile-responsive by default using Tailwind's breakpoint prefixes (`md:`, `lg:`).
*   **Accessibility**: Use semantic HTML elements and appropriate ARIA attributes. Ensure sufficient color contrast.
*   **Performance**: Optimize animations with `transform` and `opacity`. Avoid layout-thrashing properties.
*   **Code Quality**: Write clean, modular, and reusable code. Prefer functional components and hooks.

--------------

# Design system guidelines

## Design Philosophy: Premium Developer-First (Dark Mode)
A cinematic, high-precision dark mode design featuring layered ambient lighting, glassmorphism, mouse-tracking spotlight effects, and meticulously crafted micro-interactions that feel like premium developer tooling.

## Tech Stack
*   **Framework**: React (Next.js / Vite)
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Icons**: Lucide React

## Design Tokens

### Colors
*   **Background**: Deep Obsidian Black.
    *   `bg-[#0A0A0A]` as the main canvas.
    *   `bg-[#111111]` or `bg-white/5` for surface layers/cards.
*   **Accents**: Electric Purple & Cyber Blue.
    *   Primary: `text-[#7C3AED]` (Electric Purple) to `text-[#00A3FF]` (Cyber Blue) gradients.
    *   Glows: `shadow-[0_0_30px_rgba(124,58,237,0.3)]` or `shadow-[0_0_30px_rgba(0,163,255,0.3)]`.
*   **Text**: High contrast hierarchy.
    *   Headings: `text-white` (#FFFFFF).
    *   Body: `text-slate-400` (#94A3B8).
    *   Code: `text-pink-400` or `text-cyan-400`.
*   **Borders**: Subtle, crisp boundaries.
    *   `border-white/10` for general borders.
    *   `border-white/20` for hover states.

### Typography
*   **Font Family**:
    *   Sans: `Inter`, `Geist Sans`, or system sans-serif for UI.
    *   Mono: `JetBrains Mono`, `Fira Code` for code blocks and technical data.
*   **Scale**:
    *   `text-xs` (12px): Labels, tags.
    *   `text-sm` (14px): Body text, inputs.
    *   `text-base` (16px): Standard reading size.
    *   `text-xl` to `text-4xl`: Headings with tight tracking (`tracking-tight`).

### Spacing & Layout
*   **Grid**: 4px baseline grid.
*   **Padding**: Generous whitespace to let content breathe.
    *   Cards: `p-6` or `p-8`.
    *   Sections: `py-24` or `py-32`.
*   **Radius**: Smooth, Apple-esque corners.
    *   `rounded-xl` (12px) for cards.
    *   `rounded-2xl` (16px) for large containers/windows.

### Effects
*   **Glassmorphism**:
    *   `bg-black/40 backdrop-blur-xl border border-white/10`.
*   **Shadows**:
    *   Layered shadows for depth: `shadow-2xl shadow-black/50`.
    *   Neon Glows: `shadow-[0_0_20px_rgba(124,58,237,0.5)]` for active elements.

## Component Specifics

### Buttons
*   **Primary**:
    *   Background: Gradient `bg-gradient-to-r from-[#7C3AED] to-[#00A3FF]`.
    *   Hover: Subtle brightness increase and shadow expansion.
    *   Shape: Pill-shaped `rounded-full` or slightly rounded `rounded-lg`.
*   **Secondary**:
    *   Style: `border border-white/10 hover:bg-white/5`.
    *   Text: `text-white`.

### Cards (Bento Grid)
*   **Structure**: `relative overflow-hidden bg-[#0A0A0A] border border-white/10`.
*   **Interaction**:
    *   Hover: Border color lightens to `border-white/20`.
    *   Inner Glow: Radial gradient follow mouse (if possible) or static center glow.

### Inputs / IDE Window
*   **IDE Header**: Traffic lights (Red/Yellow/Green dots), Tab bar.
*   **Editor Area**: `bg-[#050510]/80` (Darker than main bg).
*   **Syntax Highlighting**: VS Code Dark theme colors.

### Animations (Framer Motion)
*   **Springs**: Use snappy but smooth springs.
    *   `transition={{ type: "spring", stiffness: 300, damping: 30 }}`.
*   **Entrance**: Staggered fade-ins with slight Y-axis offset.
    *   `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`.
*   **3D Transforms**: Use `preserve-3d` for isometric or depth effects (as seen in SandboxArchitecture).