export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranade: "var(--font-ranade)",
        sans: "var(--font-sans)", // keep your Geist or body font
      },
    },
  },
};
