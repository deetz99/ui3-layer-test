// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint'
  ],

  css: [
    join(currentDir, './app/assets/css/main.css'),
  ],

  alias: {
    '#main': join(currentDir, './app/assets/css/main.css'),
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-03-12'
})
