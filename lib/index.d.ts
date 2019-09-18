export interface OPT {
    path: string;
    dirName: string;
    fileName: string;
    icon: string;
    fontSize: string;
    component: boolean;
}
export declare const create: <Promise_1>(opt: OPT) => Promise<string>;
