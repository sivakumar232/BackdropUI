// Professional background configurations inspired by popular websites
// Stripe, Vercel, Linear, GitHub, Notion, Apple, etc.

export const backgrounds = [
    // === GRID PATTERNS (Stripe, Linear Style) ===
    {
        name: "Stripe Grid",
        component: "bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Linear Dark Grid",
        component: "bg-[#0a0a0a] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "dark",
        category: "grid"
    },
    {
        name: "Fine Grid",
        component: "bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Blueprint Grid",
        component: "bg-[#0f1729] bg-[linear-gradient(to_right,#1e3a8a33_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a33_1px,transparent_1px)] bg-[size:40px_40px]",
        theme: "dark",
        category: "grid"
    },
    {
        name: "Subtle Grid",
        component: "bg-[#fafafa] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]",
        theme: "light",
        category: "grid"
    },

    // === DOT PATTERNS (GitHub, Vercel Style) ===
    {
        name: "GitHub Dots",
        component: "bg-white bg-[radial-gradient(#00000015_1px,transparent_1px)] bg-[size:16px_16px]",
        theme: "light",
        category: "dots"
    },
    {
        name: "Vercel Dots",
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
        name: "Sparse Dots Dark",
        component: "bg-[#111111] bg-[radial-gradient(circle,#ffffff08_1.5px,transparent_1.5px)] bg-[size:32px_32px]",
        theme: "dark",
        category: "dots"
    },
    {
        name: "Notion Dots",
        component: "bg-[#ffffff] bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "dots"
    },

    // === SUBTLE GRADIENTS (Apple, Microsoft Style) ===
    {
        name: "Apple Mesh",
        component: "bg-[radial-gradient(at_top_left,#f3f4f6_0%,#ffffff_50%)] bg-white",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Microsoft Azure",
        component: "bg-[radial-gradient(ellipse_at_top,#0078d420,transparent_50%),radial-gradient(ellipse_at_bottom,#00000008,transparent_50%)] bg-white",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Soft Glow",
        component: "bg-[radial-gradient(circle_at_top_right,#dbeafe_0%,transparent_50%),radial-gradient(circle_at_bottom_left,#fce7f3_0%,transparent_50%)] bg-white",
        theme: "light",
        category: "gradient"
    },
    {
        name: "Dark Gradient",
        component: "bg-[radial-gradient(ellipse_at_top,#1e293b_0%,#0f172a_100%)]",
        theme: "dark",
        category: "gradient"
    },
    {
        name: "Neutral Fade",
        component: "bg-[linear-gradient(to_bottom,#f9fafb_0%,#ffffff_100%)]",
        theme: "light",
        category: "gradient"
    },

    // === NOISE TEXTURES (Modern Depth) ===
    {
        name: "Paper Texture",
        component: "bg-[#fefefe] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]",
        theme: "light",
        category: "texture"
    },
    {
        name: "Dark Noise",
        component: "bg-[#0a0a0a] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]",
        theme: "dark",
        category: "texture"
    },

    // === COMBINED PATTERNS (Professional Composites) ===
    {
        name: "Stripe Hero",
        component: "bg-[linear-gradient(to_bottom,#ffffff_0%,#f9fafb_100%)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]",
        theme: "light",
        category: "composite"
    },
    {
        name: "Linear Dashboard",
        component: "bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,transparent_50%)] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "dark",
        category: "composite"
    },
    {
        name: "Vercel Landing",
        component: "bg-black bg-[radial-gradient(ellipse_at_center,#18181b_0%,#000000_100%)] bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "dark",
        category: "composite"
    },
    {
        name: "GitHub Clean",
        component: "bg-[#ffffff] bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-[size:16px_16px]",
        theme: "light",
        category: "composite"
    },

    // === MINIMAL SOLIDS (Clean Backgrounds) ===
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

    // === ACCENT PATTERNS (Subtle Brand Colors) ===
    {
        name: "Blue Accent Grid",
        component: "bg-[#f8fafc] bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:32px_32px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Purple Accent Dots",
        component: "bg-[#faf5ff] bg-[radial-gradient(#a855f720_1px,transparent_1px)] bg-[size:20px_20px]",
        theme: "light",
        category: "dots"
    },
    {
        name: "Green Accent Grid",
        component: "bg-[#f0fdf4] bg-[linear-gradient(to_right,#22c55e15_1px,transparent_1px),linear-gradient(to_bottom,#22c55e15_1px,transparent_1px)] bg-[size:24px_24px]",
        theme: "light",
        category: "grid"
    },
    {
        name: "Orange Glow",
        component: "bg-[radial-gradient(ellipse_at_top,#fff7ed_0%,#ffffff_50%)] bg-white",
        theme: "light",
        category: "gradient"
    },
];
