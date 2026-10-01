import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        // Clean corporate palette: white surfaces, slate text, one confident blue.
        bg: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-2": "#F6F8FB",
        border: "#E2E8F0",
        primary: {
          DEFAULT: "#1F4FD8",
          dim: "#173DAA",
        },
        accent: "#0E7490",
        text: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          faint: "#64748B",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        // Deliberately subtle: almost a solid colour.
        "brand-gradient": "linear-gradient(135deg, #1F4FD8 0%, #1740B5 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #F6F8FB 0%, #EEF3FF 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.05)",
        "card-hover": "0 10px 30px -12px rgba(15,23,42,0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
