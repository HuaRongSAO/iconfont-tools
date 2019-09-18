import { Extract } from './extract'
import { Match } from './match'
import component from './template'
export interface OPT {
  path: string
  dirName: string
  fileName: string
  icon: string
  fontSize: string
  component: boolean
}

export const create = async <Promise>(opt: OPT) => {
  const { dirName, fileName, path, icon, fontSize } = opt
  const ex = new Extract(path, dirName, fileName)
  const mat = new Match(icon, fontSize)

  const iconCtx = await ex.getIconfontContent()

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
