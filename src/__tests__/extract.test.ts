import fs from 'fs'
import { Extract } from '../extract'

const path = '/home/chr/github/iconfont-tools/asset/font_hiytajitqeu'
const dirName = 'iconfont-weapp'
const fileName = 'iconfont.css'
const ext = new Extract(path, dirName, fileName)

test('Extract mkdir', async () => {
  await ext.generateDir()
  const fgt = fs.statSync(`${path}/iconfont-weapp`)
  expect(fgt.isDirectory()).toBe(true)
})

test('Extract css', async () => {
  ext.setContent('hello world')
  const targetCss = await ext.generate()
  const fgt = fs.readFileSync(targetCss, 'utf-8')
  expect(fgt).toBe('hello world')
})

test('Extract clearDir', async () => {
  const delDir = await ext.clearDir()
  let exit = true
  try {
    fs.statSync(delDir)
  } catch (error) {
    exit = false
  }
  expect(exit).toBe(false)
})
