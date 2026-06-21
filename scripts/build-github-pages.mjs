import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const packageJson = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'))
const repoName = packageJson.name

const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const env = Object.fromEntries(
  Object.entries(process.env).filter(([, value]) => typeof value === 'string')
)

const child = spawn(command, ['run', 'build'], {
  cwd: root,
  env: {
    ...env,
    VITEPRESS_BASE: `/${repoName}/`
  },
  shell: true,
  stdio: 'inherit'
})

child.on('exit', (code) => {
  process.exit(code ?? 1)
})
