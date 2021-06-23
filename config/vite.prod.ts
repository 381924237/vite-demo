import { defineConfig, UserConfig } from 'vite'
import commonConfig from './vite.common'
import { babel } from '@rollup/plugin-babel'
import { resolveAppPath } from './utils'

export default defineConfig({
  ...commonConfig,
  plugins: [...(commonConfig as UserConfig).plugins],
  mode: 'production',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].chunk.js',
        sourcemap: 'hidden',
      },
      plugins: [
        babel({
          babelHelpers: 'bundled',
          include: resolveAppPath('src'),
        }),
      ],
    },
  },
})
