// Professional background configurations with unique names
// All gradients positioned at top or bottom for cleaner look

export const backgrounds = [
    // === GRID PATTERNS ===
    {
        name: "Minimal Grid",
        component: "bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Midnight Grid",
        component: "bg-[#0a0a0a] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "dark",
        category: "grid"
    },
    {
        name: "Fine Lines",
        component: "bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Blueprint",
        component: "bg-[#0f1729] bg-[linear-gradient(to_right,#1e3a8a33_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a33_1px,transparent_1px)] bg-[size:40px_40px]",
        theme: "dark",
        category: "grid"
    },
    {
        name: "Subtle Mesh",
        component: "bg-[#fafafa] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Azure Grid",
        component: "bg-[#f8fafc] bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:32px_32px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Emerald Lines",
        component: "bg-[#f0fdf4] bg-[linear-gradient(to_right,#22c55e15_1px,transparent_1px),linear-gradient(to_bottom,#22c55e15_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "grid"
    },

    // === DOT PATTERNS ===
    {
        name: "Dotted Canvas",
        component: "bg-white bg-[radial-gradient(#00000015_1px,transparent_1px)] bg-[size:16px_16px]",
        theme: "light",
        category: "dots"
    },
    {
        name: "Starfield",
        component: "bg-black bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "dark",
        category: "dots"
    },
    {
        name: "Dense Dots",
        component: "bg-[#f8f9fa] bg-[radial-gradient(circle,#00000010_1px,transparent_1px)] bg-[size:12px_12px]",
        theme: "light",
        category: "dots"
    },
    {
        name: "Sparse Stars",
        component: "bg-[#111111] bg-[radial-gradient(circle,#ffffff08_1.5px,transparent_1.5px)] bg-[size:32px_32px]",
        theme: "dark",
        category: "dots"
    },
    {
        name: "Paper Dots",
        component: "bg-[#ffffff] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "dots"
    },
    {
        name: "Violet Dots",
        component: "bg-[#faf5ff] bg-[radial-gradient(#a855f720_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "light",
        category: "dots"
    },

    // === SUBTLE 2-COLOR GRADIENTS (TOP/BOTTOM ONLY) ===
    {
        name: "Morning Mist",
        component: "bg-[radial-gradient(ellipse_at_top,#f0f9ff_0%,#ffffff_70%)]",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Twilight Fade",
        component: "bg-[radial-gradient(ellipse_at_bottom,#1e293b_0%,#0f172a_100%)]",
        theme: "dark",
        category: "gradient"
    },
    {
        name: "Cloud Nine",
        component: "bg-[linear-gradient(to_bottom,#f9fafb_0%,#ffffff_100%)]",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Slate Horizon",
        component: "bg-[linear-gradient(to_bottom,#1e293b_0%,#0f172a_100%)]",
        theme: "dark",
        category: "gradient"
    },
    {
        name: "Pearl White",
        component: "bg-[radial-gradient(ellipse_at_top,#f3f4f6_0%,#ffffff_60%)]",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Obsidian",
        component: "bg-[radial-gradient(ellipse_at_bottom,#18181b_0%,#000000_100%)]",
        theme: "dark",
        category: "gradient"
    },
    {
        name: "Frost",
        component: "bg-[linear-gradient(to_bottom,#f8fafc_0%,#e2e8f0_100%)]",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Charcoal Fade",
        component: "bg-[linear-gradient(to_bottom,#171717_0%,#0a0a0a_100%)]",
        theme: "dark",
        category: "gradient"
    },
    {
        name: "Silver Mist",
        component: "bg-[radial-gradient(ellipse_at_top,#e5e7eb_0%,#ffffff_80%)]",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Deep Ocean",
        component: "bg-[radial-gradient(ellipse_at_bottom,#0c4a6e_0%,#082f49_100%)]",
        theme: "dark",
        category: "gradient"
    },

    // === GLOW EFFECTS (2-COLOR, TOP/BOTTOM) ===
    {
        name: "Azure Glow",
        component: "bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,#ffffff_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Violet Aura",
        component: "bg-[radial-gradient(ellipse_at_top,#ede9fe_0%,#ffffff_60%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Emerald Haze",
        component: "bg-[radial-gradient(ellipse_at_bottom,#d1fae5_0%,#ffffff_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Rose Tint",
        component: "bg-[radial-gradient(ellipse_at_top,#fce7f3_0%,#ffffff_60%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Amber Warmth",
        component: "bg-[radial-gradient(ellipse_at_top,#fef3c7_0%,#ffffff_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Cyan Shimmer",
        component: "bg-[radial-gradient(ellipse_at_bottom,#cffafe_0%,#ffffff_60%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Indigo Mist",
        component: "bg-[radial-gradient(ellipse_at_top,#e0e7ff_0%,#ffffff_70%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Peach Glow",
        component: "bg-[radial-gradient(ellipse_at_top,#fed7aa_0%,#ffffff_60%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Mint Breeze",
        component: "bg-[radial-gradient(ellipse_at_bottom,#d1fae5_0%,#ffffff_55%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Lavender Dream",
        component: "bg-[radial-gradient(ellipse_at_top,#f3e8ff_0%,#ffffff_65%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Moonlight",
        component: "bg-[radial-gradient(ellipse_at_top,#1e40af15_0%,transparent_50%)] bg-[#0a0a0a]",
        theme: "dark",
        category: "glow"
    },
    {
        name: "Purple Haze",
        component: "bg-[radial-gradient(ellipse_at_bottom,#7c3aed20_0%,transparent_60%)] bg-black",
        theme: "dark",
        category: "glow"
    },
    {
        name: "Crimson Shadow",
        component: "bg-[radial-gradient(ellipse_at_top,#dc262620_0%,transparent_50%)] bg-black",
        theme: "dark",
        category: "glow"
    },
    {
        name: "Teal Depths",
        component: "bg-[radial-gradient(ellipse_at_bottom,#14b8a615_0%,transparent_55%)] bg-[#0a0a0a]",
        theme: "dark",
        category: "glow"
    },

    // === DUAL GRADIENT GLOWS (TOP + BOTTOM) ===
    {
        name: "Ocean Breeze",
        component: "bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#fce7f3_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Spring Garden",
        component: "bg-[radial-gradient(ellipse_at_top,#d1fae5_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#fef3c7_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Sunset Glow",
        component: "bg-[radial-gradient(ellipse_at_top,#fed7aa_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#fce7f3_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Arctic Light",
        component: "bg-[radial-gradient(ellipse_at_top,#cffafe_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#e0e7ff_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Blossom",
        component: "bg-[radial-gradient(ellipse_at_top,#fce7f3_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#dbeafe_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "glow"
    },
    {
        name: "Cosmic Dust",
        component: "bg-[radial-gradient(ellipse_at_top,#1e40af15_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#7c3aed15_0%,transparent_50%)] bg-black",
        theme: "dark",
        category: "glow"
    },
    {
        name: "Northern Lights",
        component: "bg-[radial-gradient(ellipse_at_top,#10b98115_0%,transparent_50%),radial-gradient(ellipse_at_bottom,#6366f115_0%,transparent_50%)] bg-black",
        theme: "dark",
        category: "glow"
    },

    // === COMPOSITE PATTERNS ===
    {
        name: "Professional Grid",
        component: "bg-[linear-gradient(to_bottom,#ffffff_0%,#f9fafb_100%)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
        theme: "light",
        category: "composite"
    },
    {
        name: "Dark Dashboard",
        component: "bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,transparent_50%)] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "dark",
        category: "composite"
    },
    {
        name: "Modern Landing",
        component: "bg-black bg-[radial-gradient(ellipse_at_bottom,#18181b_0%,#000000_100%)] bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "dark",
        category: "composite"
    },
    {
        name: "Clean Canvas",
        component: "bg-[#ffffff] bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-[size:16px_16px]",
        theme: "light",
        category: "composite"
    },
    {
        name: "Azure Canvas",
        component: "bg-white bg-[radial-gradient(ellipse_at_top,#dbeafe_0%,transparent_50%)] bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "composite"
    },
    {
        name: "Violet Grid",
        component: "bg-white bg-[radial-gradient(ellipse_at_top,#ede9fe_0%,transparent_50%)] bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "composite"
    },

    // === MINIMAL SOLIDS ===
    {
        name: "Pure White",
        component: "bg-white",
        theme: "light",
        category: "solid"
    },
    {
        name: "Pure Black",
        component: "bg-black",
        theme: "dark",
        category: "solid"
    },
    {
        name: "Warm White",
        component: "bg-[#fafaf9]",
        theme: "light",
        category: "solid"
    },
    {
        name: "Cool Gray",
        component: "bg-[#f8f9fa]",
        theme: "light",
        category: "solid"
    },
    {
        name: "Charcoal",
        component: "bg-[#0f0f0f]",
        theme: "dark",
        category: "solid"
    },
    {
        name: "Slate",
        component: "bg-[#1e293b]",
        theme: "dark",
        category: "solid"
    },
];
