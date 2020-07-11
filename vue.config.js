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
  publicPath: process.env.NODE_ENV === 'production'
    ? '/countries/'
    : '/',
};
