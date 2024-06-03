// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css"
  },
  app: {
    baseURL: process.env.BASE_URL
  },
  css: ["@/assets/css/main.css"],
  modules: ["nuxt-phosphor-icons", "@pinia/nuxt"],
  pinia: {
    storesDirs: ['./stores/**']
  }

});

//Initial Commit