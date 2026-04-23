import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#2563EB",
        "accent-end": "#0EA5E9",
        background: "#f0f7ff",
        card: "#ffffff",
        dark: "#0a1628",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #2563EB, #0EA5E9)",
        "gradient-dark": "linear-gradient(135deg, #0a1628, #0f2a50)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        "purple-sm": "0 4px 14px rgba(37, 99, 235, 0.15)",
        "purple-md": "0 8px 30px rgba(37, 99, 235, 0.2)",
        "purple-lg": "0 20px 60px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
