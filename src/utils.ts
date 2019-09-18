import fs from 'fs'
import rimraf from 'rimraf'

export const getState = <Promise>(path: string) => {
  return new Promise(resolve => {
    fs.stat(path, (err, stats) => {
      if (err) {
        return resolve(false)
      }
      resolve(stats)
    })
  })
}
export const exitDir = <Promise>(path: string) => {
  return new Promise(async resolve => {
    const fileStats: any = await getState(path)
    if (!fileStats) {
      return resolve(false)
    }
    if (!fileStats.isDirectory()) {
      resolve(false)
    }
    resolve(true)
  })
}
export const mkdir = <Promise>(path: string) => {
  return new Promise(resolve => {
    fs.mkdir(path, err => {
      if (err) {
        return resolve(false)
      }
      resolve(true)
    })
  })
}

export const rmdir = <Promise>(path: string) => {
  return new Promise(resolve => {
    try {
      rimraf.sync(path)
      resolve(true)
    } catch (error) {
      resolve(false)
    }
  })
}
export const mkFile = <Promise>(path: string, content: string) => {
  return new Promise(resolve => {
    try {
      fs.writeFileSync(path, content)
      resolve(true)
    } catch (error) {
      resolve(false)
    }
  })
}
export const readFile = <Promise>(path: string) => {
  return new Promise(resolve => {
    try {
      const content = fs.readFileSync(path, 'utf-8')
      resolve(content)
    } catch (error) {
      resolve(false)
    }
  })
}
export const copy = <Promise>(from: string, to: string) => {
  return new Promise(resolve => {
    try {
      fs.writeFileSync(to, fs.readFileSync(from))
      resolve(true)
    } catch (error) {
      resolve(false)
    }
  })
}
export default {
  getState,
  exitDir,
  mkdir,
  rmdir,
  mkFile,
  readFile,
  copy,
}
