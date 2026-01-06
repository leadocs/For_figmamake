# General guidelines

*   **Layout**: Always use Flexbox and Grid for layouts. Avoid absolute positioning unless creating specific overlays or visual effects.
*   **Responsive**: Ensure all designs are mobile-responsive by default using Tailwind's breakpoint prefixes (`md:`, `lg:`).
*   **Accessibility**: Use semantic HTML elements and appropriate ARIA attributes. Ensure sufficient color contrast.
*   **Performance**: Optimize animations with `transform` and `opacity`. Avoid layout-thrashing properties.
*   **Code Quality**: Write clean, modular, and reusable code. Prefer functional components and hooks.

--------------

# Design system guidelines

## Design Philosophy: Enterprise Black Gold (Dark Mode)
A premium, trustworthy, and high-tech design language suitable for enterprise-level AI platforms. It combines the mystery of deep space with the luxury of gold accents, creating a "Black Gold" aesthetic.

## Tech Stack
*   **Framework**: React (Next.js / Vite)
*   **Styling**: Tailwind CSS
*   **Animation**: Framer Motion
*   **Icons**: Lucide React

## Design Tokens

### Colors
*   **Background**:
    *   `bg-[#0B0C15]` (Deep Midnight) as the main canvas.
    *   `bg-[#151725]` for surface layers/cards.
*   **Accents**:
    *   **Gold (Premium)**: `text-[#D4AF37]` or `bg-[#D4AF37]`. Used for key highlights, "Pro" badges, or primary actions.
    *   **Blue (Tech)**: `text-[#3B82F6]` or `bg-[#3B82F6]`. Used for standard links, info states.
*   **Text**:
    *   Headings: `text-white` or `text-[#F1F5F9]`.
    *   Body: `text-[#94A3B8]` (Slate 400).
    *   Subtle: `text-[#475569]`.
*   **Borders**:
    *   `border-[#FFFFFF]/10` for subtle definition.
    *   `border-[#D4AF37]/30` for active or highlighted states.

### Typography
*   **Font Family**:
    *   Sans: `Inter`, `system-ui`.
    *   Mono: `JetBrains Mono` for code and technical specs.
*   **Scale**:
    *   Headings: Bold, tight tracking (`tracking-tight`).
    *   Body: Readable, good line-height (`leading-relaxed`).

### Spacing & Layout
*   **Padding**:
    *   Cards: `p-6` or `p-8`.
    *   Section: `py-20` or `py-24`.
*   **Radius**:
    *   `rounded-lg` (8px) for standard inputs/buttons.
    *   `rounded-xl` (12px) for cards.

### Effects
*   **Glassmorphism**:
    *   `bg-[#151725]/80 backdrop-blur-md`.
*   **Glows**:
    *   Subtle gold glow: `shadow-[0_0_20px_rgba(212,175,55,0.15)]`.
    *   Tech blue glow: `shadow-[0_0_20px_rgba(59,130,246,0.15)]`.

## Component Specifics

### Buttons
*   **Primary (Gold)**:
    *   `bg-gradient-to-r from-[#D4AF37] to-[#C5A065] text-black font-semibold`.
    *   Hover: Brightness 110%, Shadow spread.
*   **Secondary (Outline)**:
    *   `border border-[#FFFFFF]/20 text-white hover:bg-[#FFFFFF]/5`.

### Cards
*   **Style**: Dark surface `bg-[#151725]`, thin border `border-[#FFFFFF]/5`.
*   **Hover**: Border becomes `border-[#D4AF37]/50`, slight lift `translate-y-[-2px]`.

### Visual Elements
*   **Lines**: Use thin 1px lines `bg-[#FFFFFF]/10` to divide sections or create grids.
*   **Tags**: Small caps, `text-xs`, `tracking-wider`, `bg-[#FFFFFF]/5 px-2 py-1 rounded`.
