export declare const getState: <Promise_1>(path: string) => Promise<unknown>
export declare const exitDir: <Promise_1>(path: string) => Promise<unknown>
export declare const mkdir: <Promise_1>(path: string) => Promise<unknown>
export declare const rmdir: <Promise_1>(path: string) => Promise<unknown>
export declare const mkFile: <Promise_1>(path: string, content: string) => Promise<unknown>
export declare const readFile: <Promise_1>(path: string) => Promise<unknown>
export declare const copy: <Promise_1>(from: string, to: string) => Promise<unknown>
declare const _default: {
  getState: <Promise_1>(path: string) => Promise<unknown>
  exitDir: <Promise_2>(path: string) => Promise<unknown>
  mkdir: <Promise_3>(path: string) => Promise<unknown>
  rmdir: <Promise_4>(path: string) => Promise<unknown>
  mkFile: <Promise_5>(path: string, content: string) => Promise<unknown>
  readFile: <Promise_6>(path: string) => Promise<unknown>
  copy: <Promise_7>(from: string, to: string) => Promise<unknown>
}
export default _default
