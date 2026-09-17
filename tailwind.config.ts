import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#F45B20", hover: "#D94712", soft: "#FFF0E8", muted: "#FFE4D6" },
        surface: {
          DEFAULT: "#fbf9f5", base: "#FAF9F6", card: "#FFFFFF", subtle: "#F4F1EC",
          border: "#EAE5DE", borderLight: "#F0EBE3", bright: "#fbf9f5", dim: "#dbdad6",
          container: "#f0eeea", "container-high": "#eae8e4", "container-highest": "#e4e2de",
          "container-low": "#f5f3ef", "container-lowest": "#ffffff", variant: "#e4e2de"
        },
        ink: { primary: "#171717", secondary: "#68645F", muted: "#9E9A93" },
        positive: { DEFAULT: "#258A5B", soft: "#EAF6F0", text: "#176541" },
        primary: { DEFAULT: "#a93800", fixed: "#ffdbcf", "fixed-dim": "#ffb59b", container: "#ff5f15" },
        "primary-fixed": "#ffdbcf", "primary-fixed-dim": "#ffb59b", "primary-container": "#ff5f15",
        secondary: { DEFAULT: "#545f73", fixed: "#d8e3fb", "fixed-dim": "#bcc7de", container: "#d5e0f8" },
        "secondary-fixed": "#d8e3fb", "secondary-container": "#d5e0f8",
        tertiary: { DEFAULT: "#924b25", fixed: "#ffdbcb", "fixed-dim": "#ffb692", container: "#d27f54" },
        "tertiary-fixed": "#ffdbcb", "tertiary-container": "#d27f54",
        error: { DEFAULT: "#ba1a1a", container: "#ffdad6" },
        "error-container": "#ffdad6", outline: "#8f7066", "outline-variant": "#e3bfb2",
        "on-surface": "#1b1c1a", "on-surface-variant": "#5b4138", "on-primary": "#ffffff",
        "on-primary-fixed": "#380d00", "on-primary-fixed-variant": "#812900",
        "on-secondary-fixed": "#111c2d", "on-tertiary-fixed": "#341100", "on-error-container": "#93000a"
      },
      spacing: {
        "space-xs": "0.25rem", "space-sm": "0.5rem", "space-md": "1rem", "space-lg": "1.5rem",
        "space-xl": "2.5rem", "space-2xl": "4rem", "margin": "3rem", "margin-mobile": "1.25rem"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"], "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "sans-serif"], "title-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"], "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"], "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"], "display-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"], "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-lg": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-md": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        "title-md": ["16px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.04em", fontWeight: "700" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-sm": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }]
      },
      boxShadow: {
        "subtle-card": "0 20px 40px -15px rgba(23,23,23,.05)",
        "float-card": "0 24px 48px -12px rgba(23,23,23,.12)",
        btn: "0 10px 25px -5px rgba(244,91,32,.35)"
      }
    }
  },
  plugins: [],
};

export default config;
