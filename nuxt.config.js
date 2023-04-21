export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "AV100.PRO - поиск и проверка автомобилей с пробегом",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "./assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome.js",
    "~/plugins/persistedstate.js",
    "~/plugins/directives",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/composition-api/module", "@pinia/nuxt"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@pinia/nuxt", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl: process.env.BASE_URL,
  },
};
