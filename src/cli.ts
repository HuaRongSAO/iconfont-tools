#!/usr/bin/env node
import chalk from 'chalk'
import inquirer from 'inquirer'
import semver from 'semver'
import { create } from './index'
import { OPT } from './interface'

import { generatePath } from './utils'

const DEFAULT_OPTION: OPT = {
  iconfontUrl: '',
  path: process.cwd(),
  dirName: 'iconfont-weapp',
  fileName: 'iconfont-weapp-icon',
  icon: 't-icon',
  fontSize: '16px',
  component: true,
}

const checkVersion = () => {
  if (semver.satisfies(process.version, '9.x')) {
    console.log(chalk.red(`您当前的 Node 版本：${process.version}.\n` + `请提升您的 Node 版本： 10.x 以上`))
    return false
  }
  return true
}

const inquirerHandler = async () => {
  let path = process.cwd()
  let iconfontUrl = ''
  const paramsForm = process.argv[2]
  const paramsFormUrl = process.argv[3]
  const paramsTo = process.argv[4]
  const paramsToPath = process.argv[5]

  if (['--from'].includes(paramsForm)) {
    if (!paramsFormUrl) {
      throw new Error('--from 参数不能为空')
    }
    iconfontUrl = paramsFormUrl
  }

  if (['--to'].includes(paramsTo)) {
    if (!paramsToPath) {
      throw new Error('--to 参数不能为空')
    }
    path = await generatePath(paramsToPath)
  }

  const { dirName } = await inquirer.prompt({
    type: 'input',
    name: 'dirName',
    message: '设置输出文件夹名称：',
    default: DEFAULT_OPTION.dirName,
  })
  const { fileName } = await inquirer.prompt({
    type: 'input',
    name: 'fileName',
    message: '设置输出文件css文件名称：',
    default: DEFAULT_OPTION.fileName,
  })
  const { icon } = await inquirer.prompt({
    type: 'input',
    name: 'icon',
    message: '设置css文件的prefix：',
    default: DEFAULT_OPTION.icon,
  })
  const { fontSize } = await inquirer.prompt({
    type: 'input',
    name: 'fontSize',
    message: '设置字体的大小：',
    default: DEFAULT_OPTION.fontSize,
  })
  const { component } = await inquirer.prompt({
    type: 'input',
    name: 'component',
    message: '是否生产小程序原生组件：',
    default: DEFAULT_OPTION.component,
  })

  return {
    iconfontUrl,
    path,
    dirName,
    fileName,
    fontSize,
    icon,
    component,
  }
}
const main = async () => {
  const vers = checkVersion()
  if (!vers) {
    return
  }
  const opt: OPT = await inquirerHandler()
  create(opt)
}

main()
