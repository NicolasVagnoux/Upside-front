module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      backgroundImage: {
        carnivor: "url('./assets/carnivor.jpg')",
        herbivor: "url('./assets/herbivor.jpg.webp')",
        aquatic:
          "url('https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-header-non-dinos2.jpg')",
      },
      fontFamily: {
        text: "'Helvetica'",
        title: "'Lato', 'sans-serif'",
        bigtitle: "'Corben', cursive;",
      },
      keyframes: {
        leftSlideIn: {
          "0%": { transform: "translate(-50vw, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        topSlideIn: {
          "0%": { transform: "translate(0px, -150vh)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        rightSlideIn: {
          "0%": { transform: "translate(40vw, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        leftSlideIn: "leftSlideIn 1s linear",
        topSlideIn: "topSlideIn 1.5s linear",
        rightSlideIn: "rightSlideIn 2s linear",
        opacity: "opacity 2s linear",
      },
    },
  },
};
