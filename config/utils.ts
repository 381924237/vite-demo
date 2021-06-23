import fs from 'fs'
import path from 'path'

const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = (relativePath: string) => path.resolve(appDirectory, relativePath)

export { resolveAppPath }
