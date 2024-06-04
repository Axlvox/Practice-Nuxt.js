import { vueI18nConfigs } from "#build/i18n.options.mjs";

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
  modules: [
    "nuxt-phosphor-icons",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
    "@nuxtjs/i18n",
      {
      vueI18n: "./i18n"
      }
    ],
    "@nuxt/ui"
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },

});

//Initial Commit