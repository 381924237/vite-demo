import { createServer } from 'vite'
import path from 'path'

;(async () => {
  const server = await createServer({
    configFile: path.resolve(__dirname, './config/vite.dev.ts'),
  })
  await server.listen()
})()
