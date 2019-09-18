import utils from './utils'
import * as sysPath from 'path'

const jsTemplate = `
Component({
    externalClasses: ['custom-class'],
    properties: {
        icon: {
            type: String,
            value: '',
        },
        size: {
            type: Number,
            value: 32,
        },
    },
})
`

const jsonTemplate = `
{
    "component": true
}
`

const wxmlTemplate = (icon: string = 'tool-icon') => {
  return `
<cover-view class="${icon} ${icon}-{{icon}}" style="width: {{ size }}rpx;height:width: {{ size }}rpx;"></cover-view>
`
}

export const generateJs = async (path: string) => {
  const jsPath = `${path}/icon.js`
  const mkJs = await utils.mkFile(jsPath, jsTemplate)
  if (!mkJs) throw new Error(`对不起，创建${jsPath}失败`)
  return jsPath
}

export const generateJson = async (path: string) => {
  const jsonPath = `${path}/icon.json`
  const mkJs = await utils.mkFile(jsonPath, jsonTemplate)
  if (!mkJs) throw new Error(`对不起，创建${jsonPath}失败`)
  return jsonPath
}

export const generateWxml = async (path: string, icon: string = 'tool-icon') => {
  const wxmlPath = `${path}/icon.wxml`
  const mkJs = await utils.mkFile(wxmlPath, wxmlTemplate(icon))
  if (!mkJs) throw new Error(`对不起，创建${wxmlPath}失败`)
  return wxmlPath
}

export const generateWxss = async (path: string, fileName: string) => {
  const from = sysPath.resolve(path, `../${fileName}`)
  const wxssPath = `${path}/icon.wxss`
  await utils.copy(from, wxssPath)
  return wxssPath
}

export const component = async (path: string, icon: string, fileName: string) => {
  await utils.rmdir(path)
  await utils.mkdir(path)
  const files = await Promise.all([
    generateJs(path),
    generateJson(path),
    generateWxml(path, icon),
    generateWxss(path, fileName),
  ])
  return files
}
export default component
