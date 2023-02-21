export declare const INPUT_FILE = "iconfont.js";
export declare class Extract {
    path: string;
    dirName: string;
    targetDir: string;
    content: string;
    targetFile: string;
    constructor(path: string, dirName: string, fileName: string);
    setContent(content: string): void;
    generate(): Promise<string>;
    getIconfontContentByDown(url: string): Promise<any>;
    getIconfontContent(): Promise<any>;
    generateStyle(): Promise<string>;
    generateDir(): Promise<string>;
    clearDir(): Promise<string>;
}
