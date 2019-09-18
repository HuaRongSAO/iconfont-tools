export declare const getState: <Promise_1>(path: string) => Promise<{}>;
export declare const exitDir: <Promise_1>(path: string) => Promise<{}>;
export declare const mkdir: <Promise_1>(path: string) => Promise<{}>;
export declare const rmdir: <Promise_1>(path: string) => Promise<{}>;
export declare const mkFile: <Promise_1>(path: string, content: string) => Promise<{}>;
export declare const readFile: <Promise_1>(path: string) => Promise<{}>;
export declare const copy: <Promise_1>(from: string, to: string) => Promise<{}>;
declare const _default: {
    getState: <Promise_1>(path: string) => Promise<{}>;
    exitDir: <Promise_1>(path: string) => Promise<{}>;
    mkdir: <Promise_1>(path: string) => Promise<{}>;
    rmdir: <Promise_1>(path: string) => Promise<{}>;
    mkFile: <Promise_1>(path: string, content: string) => Promise<{}>;
    readFile: <Promise_1>(path: string) => Promise<{}>;
    copy: <Promise_1>(from: string, to: string) => Promise<{}>;
};
export default _default;
