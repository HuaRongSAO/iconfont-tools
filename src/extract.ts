import utils from './utils'
export const INPUT_FILE = 'iconfont.js'

export class Extract {
  path: string
  dirName: string
  targetDir: string
  content: string
  targetFile: string

  constructor(path: string, dirName: string, fileName: string) {
    this.path = path
    this.content = ''
    this.dirName = dirName
    this.targetDir = `${path}/${dirName}`
    this.targetFile = `${path}/${dirName}/${fileName}`
  }

  setContent(content: string) {
    this.content = content
  }
  async generate() {
    await this.generateDir()
    const target = await this.generateStyle()
    return target
  }
  async getIconfontContent() {
    const target = `${this.path}/${INPUT_FILE}`
    const content: any = await utils.readFile(target)
    if (content === false) {
      throw new Error(`对不起，当前目录下不存在 iconfont.js 文件：${target}`)
    }
    return content
  }

  async generateStyle() {
    const mkState = await utils.mkFile(this.targetFile, this.content)
    if (!mkState) throw new Error(`对不起,生成文件：${this.targetFile} 失败`)
    return this.targetFile
  }

  async generateDir() {
    const { targetDir } = this
    await this.clearDir()
    const mk = await utils.mkdir(targetDir)
    if (!mk) {
      throw new Error(`创建文件夹：${targetDir} 失败`)
    }
    return targetDir
  }

  async clearDir() {
    const { targetDir } = this
    const exit = await utils.exitDir(targetDir)
    if (exit) {
      const delState = await utils.rmdir(targetDir)
      if (!delState) {
        throw new Error(`删除文件夹:${targetDir} 失败`)
      }
    }
    return targetDir
  }
}
