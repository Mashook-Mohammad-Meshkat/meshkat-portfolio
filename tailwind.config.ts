import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b100e",
        panel: "#111a16",
        line: "#25332c",
        lime: "#b7f36b",
        muted: "#9aa89f"
      },
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] }
    },
  },
  plugins: [],
};
export default config;
