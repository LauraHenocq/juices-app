import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: process.env.API_URL || 'http://localhost:4000'
        }
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @import "@/assets/scss/_variables.scss"; 
          `
                }
            }
        },
        plugins: [
            eslintPlugin(),
            stylelintPlugin()
        ]
    }
})
