import fs from 'fs'
import path from 'path'
import { Match } from '../match'

const root = path.resolve('')
const target_path: string = root + '/asset/font_hiytajitqeu/iconfont.js'

test('Match', () => {
  const ex = new Match()
  const content: string = fs.readFileSync(target_path, 'utf-8') || ''
  ex.setContent(content)
    .matchesIcon()
    .generateSvg()
    .generateCss()
  expect(ex.icons.length).toBe(5)
})
