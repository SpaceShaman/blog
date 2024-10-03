// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  content: {
    sources: {
      posts: {
        driver: "github",
        repo: "SpaceShaman/blog-posts",
        branch: "master",
        token: process.env.GITHUB_TOKEN,
      },
    },
  },
});
