/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        // =========================================================
        // GRAVIS LIME
        // Bright accent used for buttons, highlights and accents
        // =========================================================
        lime: {
          50: "#F3F9D9",
          100: "#E8F5B8",
          200: "#D8EE8A",
          400: "#B6FF00",
          500: "#B6FF00",
          600: "#8FCA00",
          700: "#6B9600",
        },

        // =========================================================
        // DARK GRAVIS THEME
        // =========================================================
        navy: {
          900: "#000000",
          800: "#0A0A0A",
          700: "#151515",
          600: "#1C1C1C",
        },

        // =========================================================
        // GRAY
        // IMPORTANT:
        // A lot of the existing components use text-gray-* directly.
        // These values make those components readable on dark backgrounds.
        // =========================================================
        gray: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#B8C0CC",
          500: "#9CA3AF",
          600: "#7C8594",
          700: "#596170",
          800: "#343A45",
          900: "#1A1D22",
        },

        // =========================================================
        // BLUE
        // Kept for components that still use the old blue palette.
        // =========================================================
        blue: {
          50: "#F5F8FF",
          100: "#E8EEFF",
          200: "#C9D7FF",
          400: "#5B7FFF",
          500: "#2E5BFF",
          600: "#2148E6",
          700: "#1937B3",
        },

        // =========================================================
        // GRAVIS TYPOGRAPHY COLORS
        // Designed specifically for the dark theme.
        // =========================================================
        ink: {
          900: "#FFFFFF",
          700: "#D1D5DB",
          600: "#B8C0CC",
          400: "#8F98A6",
        },

        // =========================================================
        // SURFACES
        // =========================================================
        paper: "#FFFFFF",
        mist: "#111111",
        line: "#2A2A2A",
      },

      // =========================================================
      // TYPOGRAPHY
      // =========================================================
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        feature: ["Space Grotesk", "system-ui", "sans-serif"],
      },

      maxWidth: {
        content: "1280px",
      },

      // =========================================================
      // SHADOWS
      // =========================================================
      boxShadow: {
        soft:
          "0 2px 10px rgba(0, 0, 0, 0.20), 0 1px 2px rgba(0, 0, 0, 0.15)",

        card:
          "0 8px 30px rgba(0, 0, 0, 0.25)",

        "card-hover":
          "0 16px 44px rgba(0, 0, 0, 0.35)",

        glow:
          "0 0 0 1px rgba(182, 255, 0, 0.08), 0 20px 60px rgba(182, 255, 0, 0.12)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      // =========================================================
      // ANIMATIONS
      // =========================================================
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