/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // mode: "jit",

  theme: {
    backgroundImage: {
      "support-img":
        "url('https://raw.githubusercontent.com/fireclint/cloud-app-react/main/src/assets/support.jpg')",
    },
    screens: {
      sm: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { max: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }

      min_sm: "640px",
      // => @media (min-width: 640px) { ... }

      min_md: "768px",
      // => @media (min-width: 768px) { ... }

      min_lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      min_xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      min_2xl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
