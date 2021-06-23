import { defineConfig } from 'vite'
import { resolveAppPath } from './utils'
import PostcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [new PostcssPresetEnv()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/func.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolveAppPath('src'),
    },
  },
})
