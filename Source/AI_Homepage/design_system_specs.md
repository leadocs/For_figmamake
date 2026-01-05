# RunC AI Design System & Brand Identity (BI) Specifications

此文档定义了 **RunC AI** 的核心设计语言，旨在确保 Figma Make 生成内容的一致性与专业度。
**核心风格关键词:** `Dark Mode`, `Developer-First`, `Precision`, `Neon Accents`.

---

## 1. 字体系统 (Typography System)

### 字体家族 (Font Families)
*   **Primary Font (UI & Headings):** `Inter` (Google Fonts) 或 `SF Pro Display` (Apple System).
    *   *替代方案:* `Roboto` (若需更通用的 Android 风格), `Plus Jakarta Sans` (更现代几何感).
*   **Monospace Font (Code & Data):** `JetBrains Mono` (首选) 或 `Fira Code`.
    *   *应用场景:* 代码块、API 参数、终端窗口、数字数据展示。

### 字号阶梯 (Type Scale) - 基于 4px 基数
| Role | Size (px) | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display XL** | 64px | 1.1 (72px) | Bold (700) | -0.02em |
| **Display L** | 48px | 1.1 (56px) | Bold (700) | -0.02em |
| **H1** | 32px | 1.2 (40px) | SemiBold (600) | -0.01em |
| **H2** | 24px | 1.3 (32px) | SemiBold (600) | -0.01em |
| **H3** | 20px | 1.4 (28px) | Medium (500) | Normal |
| **Body Large** | 18px | 1.6 (28px) | Regular (400) | Normal |
| **Body Base** | 16px | 1.6 (26px) | Regular (400) | Normal |
| **Caption/Small**| 14px | 1.5 (20px) | Regular (400) | 0.01em |
| **Tiny/Label** | 12px | 1.5 (18px) | Medium (500) | 0.02em |

---

## 2. 色彩系统 (Color System)

### 基础背景色 (Backgrounds)
*   **Bg-Default:** `#050505` (近乎纯黑，用于页面底色)
*   **Bg-Surface:** `#0A0A0A` (用于卡片、侧边栏)
*   **Bg-Elevated:** `#141414` (用于悬浮层、弹窗)
*   **Bg-Terminal:** `#0D1117` (GitHub Dark Dimmed 风格，用于代码窗口)

### 品牌色 (Brand Accents)
*   **Primary Purple:** `#7C3AED` (Violet-600) - 用于主按钮、关键强调。
*   **Secondary Blue:** `#00A3FF` (Cyan-500) - 用于渐变融合、科技感点缀。
*   **Gradient (Brand):** `Linear Gradient (135deg, #7C3AED 0%, #00A3FF 100%)`

### 文字颜色 (Text Colors)
*   **Text-Primary:** `#FFFFFF` (100% White) - 标题
*   **Text-Secondary:** `#A1A1AA` (Zinc-400) - 正文
*   **Text-Tertiary:** `#52525B` (Zinc-600) - 辅助信息、占位符
*   **Text-Code:** `#E2E8F0` (Slate-200)

### 语义色 (Semantic Colors)
*   **Success:** `#10B981` (Emerald-500) - 运行成功、系统正常
*   **Warning:** `#F59E0B` (Amber-500) - 延迟警告
*   **Error:** `#EF4444` (Red-500) - 编译错误

---

## 3. 布局与间距 (Layout & Spacing)

### 栅格系统 (Grid)
*   **Container Width:** Max 1200px (Desktop)
*   **Columns:** 12 Columns
*   **Gutter:** 24px
*   **Margin:** Auto (Center aligned)

### 间距系统 (Spacing Scale)
*   `xs`: 4px
*   `sm`: 8px
*   `md`: 16px
*   `lg`: 24px
*   `xl`: 32px
*   `2xl`: 48px
*   `3xl`: 64px
*   `4xl`: 96px (用于板块间距)

---

## 4. 组件样式规范 (Component Styles)

### 按钮 (Buttons)
*   **Primary Button:**
    *   Bg: Brand Gradient or Solid Primary Purple
    *   Text: White, Medium Weight
    *   Radius: `999px` (Pill shape) or `8px` (Rounded) - *建议统一使用 Pill shape 以增加现代感*
    *   Effect: `Drop Shadow (0px 0px 12px rgba(124, 58, 237, 0.4))` (Neon Glow)
*   **Secondary Button:**
    *   Bg: Transparent
    *   Border: 1px Solid `#3F3F46` (Zinc-700)
    *   Text: White
    *   Hover: Bg `#18181B`

### 卡片 (Cards)
*   **Background:** `#0A0A0A`
*   **Border:** 1px Solid `rgba(255, 255, 255, 0.08)`
*   **Radius:** `12px` or `16px`
*   **Hover Effect:** Border color changes to `rgba(255, 255, 255, 0.2)` + Inner Glow.

### 玻璃拟态 (Glassmorphism)
*   用于 Sticky Navbar 和 悬浮窗口。
*   **Bg:** `rgba(10, 10, 10, 0.7)`
*   **Blur:** `Backdrop Filter: Blur(12px)`
*   **Border:** `1px Solid rgba(255, 255, 255, 0.05)`

---

## 5. 提示词示例 (Prompt Injection)

在 Figma Make 中使用时，可附加以下指令以强制应用规范：

> "Use the 'RunC Design System':
> Font: Inter (Headings) & JetBrains Mono (Code).
> Background: #050505.
> Primary Color: #7C3AED with neon glow effects.
> Cards: Dark surface #0A0A0A with 1px subtle border.
> Spacing: Airy, minimal, with 96px gap between sections.
> Buttons: Pill-shaped with gradients."
