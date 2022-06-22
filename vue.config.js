const bootstrapSassAbstractsImports = require("vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
      scss: {
        additionalData: [
          ...bootstrapSassAbstractsImports,
          '@import "@/assets/scss/helpers/_global.scss";',
        ].join(";\n"),
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/mini-games/" : "/",
});
