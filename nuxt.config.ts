// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-vitest/'
  },
  modules: [
    '@nuxt/test-utils/module'
  ]
})
