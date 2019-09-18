import fs from 'fs'
import path from 'path'
import { create } from './../index'
import utils from './../utils'

const root = path.resolve('')
const TARGET_PATH: string = root + '/asset/font_hiytajitqeu'

const DEFAULT_OPTION = {
  path: TARGET_PATH,
  dirName: 'iconfont-weapp',
  fileName: 'iconfont-weapp.css',
  icon: 't-icon',
  fontSize: '16px',
  component: true,
}

test('create', async () => {
  const target = await create(DEFAULT_OPTION)
  const fileStats = fs.statSync(target)
  expect(fileStats.isDirectory()).toBe(false)
})

test('create remove', async () => {
  const target = `${TARGET_PATH}/${DEFAULT_OPTION.dirName}`
  await utils.rmdir(target)
  let exit = true
  try {
    fs.statSync(target)
  } catch (error) {
    exit = false
  }
  expect(exit).toBe(false)
})
