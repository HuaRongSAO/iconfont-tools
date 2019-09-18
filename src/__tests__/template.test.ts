import fs from 'fs'
import component from './../template'
import utils from './../utils'
const testPath = '/home/chr/github/iconfont-tools/asset/font_hiytajitqeu/icon'

test('component create', async () => {
  const files = await component(testPath, 't-icon', 'iconfont-weapp.css')
  expect(files.length).toBe(4)
})

test('create remove', async () => {
  await utils.rmdir(testPath)
  let exit = true
  try {
    fs.statSync(testPath)
  } catch (error) {
    exit = false
  }
  expect(exit).toBe(false)
})
