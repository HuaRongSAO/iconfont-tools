import { Extract } from './extract'
import { Match } from './match'
import component from './template'
import { OPT } from './interface'

export const create = async <Promise>(opt: OPT) => {
  const { iconfontUrl, dirName, fileName, path, icon, fontSize } = opt
  const ex = new Extract(path, dirName, fileName)
  const mat = new Match(icon, fontSize)
  let iconCtx = ''
  if (iconfontUrl) {
    iconCtx = await ex.getIconfontContentByDown(iconfontUrl)
  } else {
    iconCtx = await ex.getIconfontContent()
  }

  mat
    .matchesContent(iconCtx)
    .matchesIcon()
    .generateSvg()
    .generateCss()

  ex.setContent(mat.css)
  const filePath = await ex.generate()

  if (opt.component) {
    const componentPath = `${ex.targetDir}/icon`
    await component(componentPath, icon, fileName)
  }

  return filePath
}
