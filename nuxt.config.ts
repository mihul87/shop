// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: [
      '@nuxtjs/tailwindcss',
      [
        '@pinia/nuxt',
        {
          autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            // automatically imports `defineStore` as `definePiniaStore`
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
          ],
        },
      ]
    ],
    runtimeConfig: {
      // The private keys which are only available server-side
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      // Keys within public are also exposed client-side
      public: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      }
    }      
})
