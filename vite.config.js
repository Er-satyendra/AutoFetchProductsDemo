import react from '@vitejs/plugin-react'

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      }
    },
    {}
  )

  return {
    plugins: [react(), svgr()],
    base: env.VITE_ROUTER_BASE_PATH,
    resolve: {
      alias: [
        { find: '@products', replacement: path.resolve(__dirname, 'src') },
      ],
    },
    server: {
      port: env.VITE_PORT,
    },
    define: envWithProcessPrefix,
  }
})
