# Figma Make 落地页风格提示词 (Style Prompt)

此提示词专为生成面向**开发者、极客及高端技术管理者**的 AI 基础设施平台落地页设计。

## 设计理念 (Design Philosophy)

基于目标用户画像（30-45岁男性，高知，Geek，Apple用户，偏好海外风格），设计风格定调为 **"Silicon Valley Dark SaaS"**。

*   **核心参考 (60%)**: [Novita.ai](https://novita.ai/) - 采用其深色极客风、代码优先的展示方式，以及霓虹/渐变色作为强调。
*   **结构参考 (30%)**: [Volcengine Ark](https://www.volcengine.com/product/ark) - 借鉴其清晰的 B2B 信任感布局和栅格系统。
*   **细节参考 (10%)**: [Aliyun Bailian](https://bailian.console.aliyun.com/) - 在数据展示和控制台组件上保持专业密度。

---

## 复制以下 Prompt 投喂给 Figma Make

### 🎨 Visual Style & Theme
**Theme:** Premium Developer-First AI Infrastructure SaaS. Dark Mode.
**Vibe:** Professional, Futuristic, Geeky, "Apple-esque" precision, High-performance.
**Color Palette:**
-   **Background:** Deep Obsidian Black (#0A0A0A) or Midnight Blue (#050510).
-   **Primary Accent:** Electric Purple (#7C3AED) blending into Cyber Blue (#00A3FF) - mimicking GPU/AI glowing effects.
-   **Text:** High legibility San Francisco/Inter font. Headings in crisp white (#FFFFFF), body text in cool gray (#94A3B8).
-   **Code Blocks:** Monospace font (JetBrains Mono or Fira Code), syntax highlighting background (#1E1E1E).

### 📐 Layout & Composition
-   **Grid System:** 12-column grid, generous margins, "Bento Box" style feature cards.
-   **Hero Section:** Center-aligned heavy typography with a "Glassmorphism" terminal/IDE window floating in 3D perspective.
-   **Spacing:** Loose, airy spacing (80px-120px gaps) to convey luxury and focus.
-   **Border Radius:** Smooth corners (12px-16px), mimicking modern macOS app windows.

### 🧩 UI Components
1.  **Navbar:** Glass effect (backdrop-blur), sticky top, minimal links, glowing "Start Building" button.
2.  **Hero IDE:** A realistic code editor window showing Python code, with glowing syntax highlighting.
3.  **Feature Cards:** Dark grey cards with subtle white borders (1px stroke with low opacity), hover effects showing inner glow.
4.  **Model Registry Table:** Clean data table with "Tag" pills (e.g., 'SOTA', 'Reasoning'), performance scores in colored rings.
5.  **Icons:** Thin-stroke SVG icons or abstract 3D geometric shapes (spheres, cubes) representing AI models.

### 🖼️ Imagery & Graphics
-   **No Stock Photos:** Avoid generic "people shaking hands" or "robots".
-   **Abstract Tech:** Use abstract wave lines, particle networks, or glowing nodes to represent Neural Networks and GPU clusters.
-   **Gradients:** Subtle mesh gradients in the background to add depth without clutter.

### 📝 Prompt for AI Generation
> "Design a high-converting landing page for a Developer-first AI Infrastructure platform called 'RunC AI'. The style should be 'Dark Modern SaaS', similar to Vercel or Novita.ai.
>
> **Hero Section:** Large bold headline 'Production-Ready AI Stack', subheadline focused on GPU and Security. Centerpiece is a floating 3D glass-effect Terminal window showing Python code execution.
>
> **Features Section:** Use a Bento Grid layout. Dark cards with subtle borders. Icons should be minimal and tech-focused.
>
> **Model Section:** A clean list/grid of AI models (DeepSeek, Qwen) showing performance scores. Looks like a high-end dashboard.
>
> **Visual Style:** Dark background (#050505), Neon Purple/Blue gradients for accents. Font: Inter. Buttons: Pill-shaped, glowing.
>
> **Target Audience:** Senior Developers and Tech Leads who love Apple design aesthetics. Clean, precise, expensive-looking."

---

## 针对各板块的详细设计建议 (中文补充)

1.  **首屏 (Hero)**:
    *   **视觉重心**: 必须是一个精致的**代码编辑器(IDE)窗口**或者**命令行(Terminal)**截图。这是吸引 Developer 的关键。窗口要有 macOS 风格的红绿灯圆点，背景要有高斯模糊。
    *   **背景**: 深邃的黑，配合极光般的紫色/蓝色光晕，暗示 GPU 的强大算力。

2.  **模型市场 (Modelverse)**:
    *   **卡片设计**: 参考 App Store 的卡片风格，但内容是硬核的模型参数。每个模型卡片上要高亮 "SOTA" 或评分标签。

3.  **Sandbox 架构**:
    *   **示意图**: 使用简单的线框图或等轴测图 (Isometric) 来表现 "MicroVM" 的隔离感。每一个 Sandbox 像是一个独立的浮岛。

4.  **字体排印**:
    *   标题使用无衬线字体 (Sans-serif)，字重偏大 (Bold/Black)。
    *   正文保持良好的行高 (1.6+)。
    *   所有代码相关内容严格使用等宽字体 (Monospace)。
