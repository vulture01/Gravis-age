/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      // Gravis electric lime
      lime: {
        50: "#F4FFD6",
        100: "#E8FFAD",
        200: "#D4FF66",
        400: "#C4FF33",
        500: "#B6FF00",
        600: "#8FCA00",
        700: "#5F8500",
      },

      // Dark Gravis theme
      navy: {
        800: "#0A0A0A",
        700: "#151515",
        900: "#000000",
      },

      // Original blue palette
      // Kept for now so any remaining old components do not break.
      blue: {
        50: "#F5F8FF",
        100: "#E8EEFF",
        200: "#C9D7FF",
        400: "#5B7FFF",
        500: "#2E5BFF",
        600: "#2148E6",
        700: "#1937B3",
      },

      // Typography colors
      ink: {
        900: "#0A0A0C",
        700: "#23252B",
        600: "#4B4F58",
        400: "#8A8D95",
      },

      paper: "#FFFFFF",
      mist: "#0A0A0A",
      line: "#222222",

      // Typography
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        feature: ["Space Grotesk", "system-ui", "sans-serif"],
      },

      maxWidth: {
        content: "1280px",
      },

      boxShadow: {
        soft:
          "0 2px 10px rgba(10, 12, 30, 0.04), 0 1px 2px rgba(10, 12, 30, 0.03)",
        card:
          "0 8px 30px rgba(11, 18, 51, 0.07)",
        "card-hover":
          "0 16px 44px rgba(11, 18, 51, 0.12)",
        glow:
          "0 0 0 1px rgba(46, 91, 255, 0.08), 0 20px 60px rgba(46, 91, 255, 0.18)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },

      animation: {
        "fade-up":
          "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":
          "fade-in 0.6s ease forwards",
        "spin-slow":
          "spin-slow 14s linear infinite",
        marquee:
          "marquee 26s linear infinite",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },

  plugins: [],
};