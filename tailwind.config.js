/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontSize: {
      xs: ".97rem",
      base: "1rem",
      sm: ".875rem",
      md: "1.5rem",
      lg: "1.8rem",
      xl: "2rem",
    },
    extend: {
      width: {
        23: "23ch",
      },

      lineHeight: {
        line1: "1.5rem",
        line2: "3.8rem",
      },

      borderWidth: {
        0.14: "0.17rem",
      },
      borderColor: {
        nav_border: "rgba(164, 255, 252, 0.28)",
      },
      padding: {
        0.44: "0.54rem",
      },

      height: {
        0.11: "1rem",
        "100vh": "100vh",
      },

      colors: {
        titleColor: "whiteSmoke",
        color: {
          white: "white",
          smokey: "rgba(243, 255, 245, 0.8)",
        },
        typo: "#ECF2FF",
        darkGray: "#151d41",
        borderColor: "rgb(62, 255, 220)",
        logoColor: "#ffc518",
        navBg: " linear-gradient(90deg, #050c0eb2, #2b112e46)",
        bgColor: "linear-gradient(to right, #2c5364, #203a43, #0f2027)",
        rgb: "rgba(255,255,255,0.03)",
      },
      transitionTimingFunction: {
        cube: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      },
      animation: {
        barBorder: "change 3s linear infinite alternate",
        rgbChg: "rgbChg 5s linear infinite",
        ping: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        ping2: "ping 1.5s cubic-bezier(0, 0, 0.2, 1)",
        bounce: "bounce 2s infinite",
        typing1: "typing 2s linear",
        typing2: "typing2 2s linear forwards",
        slide: "slide 1s forwards",
        slide2: "slide2 5s linear infinite alternate",
        percent: "percent  8s linear infinite alternate",
      },
      fontFamily: {
        poppins: ["Poppins", "sans - serif"],
        cursive: ['Shantell Sans', "cursive"],
      },
      keyframes: {
        percent: {
          "0%": {
            strokeDasharray: "20",
            strokeDashoffset: "0",
          },
          "80%": {
            strokeDasharray: "56",
            stroke: "green",
            strokeDashoffset: "0",
          },
        },

        ping2: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: 0,
          },
        },
        change: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        rgbChg: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(390deg)",
          },
        },
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
        typing1: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "23ch",
          },
        },
        typing2: {
          "0%": {
            width: 0,
            opacity: 0,
          },
          "100%": {
            width: "20em",
            opacity: 1,
          },
        },
        slide: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(40%)",
          },
        },
        slide2: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(10%)",
          },
        },
      },
      textShadow: {
        textNeon:
          "inset 0 0 30px rgba(0,0,0,0.5),0 0 5px #14ff39,0 0 50px #14ff39",
      },

      boxShadow: {
        neon: "inset 0 0 30px rgba(0,0,0,0.3),0 2px 0 #14ff39",
        hoverNeon:
          "inset 0 0 30px rgba(0,0,0,0.5),0 0 5px #14ff39,0 0 50px #14ff39",
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
};
