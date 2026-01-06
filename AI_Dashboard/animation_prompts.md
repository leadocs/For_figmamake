# Animation Prompts

## 1. Hero Section
*   **Entrance**:
    *   Title & Subtitle: Fade in up (`y: 20 -> 0`, `opacity: 0 -> 1`) with staggered delay (0.1s, 0.2s).
    *   Buttons: Scale up slightly (`scale: 0.9 -> 1`) and fade in.
*   **Background**:
    *   Slow, continuous movement of abstract particles or grid lines to suggest "flow" and "activity".
*   **Micro-interactions**:
    *   Buttons hover: `scale: 1.05`, glow intensity increases.

## 2. Modelverse (Cards)
*   **Scroll Reveal**:
    *   Cards stagger in as the user scrolls down (`viewport: { once: true }`).
*   **Hover Effect**:
    *   Card lifts (`y: -5px`).
    *   Border color transitions to Gold (`#D4AF37`).
    *   Internal elements (like an icon or badge) might pulse slightly.

## 3. Sandbox (Split Layout)
*   **Visual Representation (Right Side)**:
    *   An illustration of the "MicroVM" or "Box".
    *   **Animation**: The box pieces assemble or a "shield" effect scans across it to represent security.
*   **Text (Left Side)**:
    *   Fade in from left.

## 4. Platform Advantages
*   **Icons**:
    *   Draw-in animation for SVG paths (stroke-dasharray) or simple fade-in pop.
*   **Cards**:
    *   Standard fade-up stagger.

## General
*   **Smooth Scroll**: Enable smooth scrolling for anchor links.
*   **Transition**: All hover transitions should be `duration-300` and `ease-in-out`.
