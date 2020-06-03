#!/usr/bin/env node
'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var chalk_1 = __importDefault(require('chalk'))
var inquirer_1 = __importDefault(require('inquirer'))
var semver_1 = __importDefault(require('semver'))
var index_1 = require('./index')
var utils_1 = require('./utils')
var DEFAULT_OPTION = {
  iconfontUrl: '',
  path: process.cwd(),
  dirName: 'iconfont-weapp',
  fileName: 'iconfont-weapp-icon',
  icon: 't-icon',
  fontSize: '16px',
  component: true,
}
var checkVersion = function() {
  if (semver_1.default.satisfies(process.version, '9.x')) {
    console.log(
      chalk_1.default.red(
        '\u60A8\u5F53\u524D\u7684 Node \u7248\u672C\uFF1A' +
          process.version +
          '.\n' +
          '\u8BF7\u63D0\u5347\u60A8\u7684 Node \u7248\u672C\uFF1A 10.x \u4EE5\u4E0A',
      ),
    )
    return false
  }
  return true
}
var inquirerHandler = function() {
  return __awaiter(void 0, void 0, void 0, function() {
    var path,
      iconfontUrl,
      paramsForm,
      paramsFormUrl,
      paramsTo,
      paramsToPath,
      dirName,
      fileName,
      icon,
      fontSize,
      component
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          path = process.cwd()
          iconfontUrl = ''
          paramsForm = process.argv[2]
          paramsFormUrl = process.argv[3]
          paramsTo = process.argv[4]
          paramsToPath = process.argv[5]
          if (['--from'].includes(paramsForm)) {
            if (!paramsFormUrl) {
              throw new Error('--from 参数不能为空')
            }
            iconfontUrl = paramsFormUrl
          }
          if (!['--to'].includes(paramsTo)) return [3 /*break*/, 2]
          if (!paramsToPath) {
            throw new Error('--to 参数不能为空')
          }
          return [4 /*yield*/, utils_1.generatePath(paramsToPath)]
        case 1:
          path = _a.sent()
          _a.label = 2
        case 2:
          return [
            4 /*yield*/,
            inquirer_1.default.prompt({
              type: 'input',
              name: 'dirName',
              message: '设置输出文件夹名称：',
              default: DEFAULT_OPTION.dirName,
            }),
          ]
        case 3:
          dirName = _a.sent().dirName
          return [
            4 /*yield*/,
            inquirer_1.default.prompt({
              type: 'input',
              name: 'fileName',
              message: '设置输出文件css文件名称：',
              default: DEFAULT_OPTION.fileName,
            }),
          ]
        case 4:
          fileName = _a.sent().fileName
          return [
            4 /*yield*/,
            inquirer_1.default.prompt({
              type: 'input',
              name: 'icon',
              message: '设置css文件的prefix：',
              default: DEFAULT_OPTION.icon,
            }),
          ]
        case 5:
          icon = _a.sent().icon
          return [
            4 /*yield*/,
            inquirer_1.default.prompt({
              type: 'input',
              name: 'fontSize',
              message: '设置字体的大小：',
              default: DEFAULT_OPTION.fontSize,
            }),
          ]
        case 6:
          fontSize = _a.sent().fontSize
          return [
            4 /*yield*/,
            inquirer_1.default.prompt({
              type: 'input',
              name: 'component',
              message: '是否生产小程序原生组件：',
              default: DEFAULT_OPTION.component,
            }),
          ]
        case 7:
          component = _a.sent().component
          return [
            2 /*return*/,
            {
              iconfontUrl: iconfontUrl,
              path: path,
              dirName: dirName,
              fileName: fileName,
              fontSize: fontSize,
              icon: icon,
              component: component,
            },
          ]
      }
    })
  })
}
var main = function() {
  return __awaiter(void 0, void 0, void 0, function() {
    var vers, opt
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          vers = checkVersion()
          if (!vers) {
            return [2 /*return*/]
          }
          return [4 /*yield*/, inquirerHandler()]
        case 1:
          opt = _a.sent()
          index_1.create(opt)
          return [2 /*return*/]
      }
    })
  })
}
main()
