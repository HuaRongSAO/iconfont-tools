import fs from 'fs'
import { Match } from '../match'
const target_path: string = '/home/chr/github/iconfont-tools/asset/font_hiytajitqeu/iconfont.js'

test('Match', () => {
  const ex = new Match()
  const content: string = fs.readFileSync(target_path, 'utf-8') || ''
  ex.setContent(content)
    .matchesIcon()
    .generateSvg()
    .generateCss()
  expect(ex.icons.length).toBe(5)
})
