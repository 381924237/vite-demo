import { defineConfig, UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import commonConfig from './vite.common'

export default defineConfig({
  ...commonConfig,
  mode: 'development',
  plugins: [...(commonConfig as UserConfig).plugins, reactRefresh()],
  server: {
    port: 7777,
    open: true,
    force: true,
  },
  build: {
    sourcemap: true,
  },
})
