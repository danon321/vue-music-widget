module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/base/_reset.scss";
          @import "@/scss/abstracts/_variables.scss";
          @import "@/scss/components/_buttons.scss";
        `
      }
    }
  }
}
