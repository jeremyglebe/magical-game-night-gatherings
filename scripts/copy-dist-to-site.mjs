import { cp, mkdir, rm, stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const distDir = resolve(root, '.vitepress/dist')
const siteDir = resolve(root, 'site')

try {
  const distStats = await stat(distDir)
  if (!distStats.isDirectory()) {
    throw new Error(`${distDir} is not a directory`)
  }
} catch {
  console.error('Build output not found. Run `npm run build` before copying, or use `npm run publish`.')
  process.exit(1)
}

await rm(siteDir, { force: true, recursive: true })
await mkdir(siteDir, { recursive: true })
await cp(distDir, siteDir, { recursive: true })
await writeFile(
  resolve(siteDir, '.nojekyll'),
  'This file tells GitHub Pages not to process the built site with Jekyll.\n'
)

console.log(`Copied ${distDir} to ${siteDir}`)
