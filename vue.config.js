module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '~normalize.css';
          @import "@/utils/colors.scss";
        `,
      },
    },
  },
};
