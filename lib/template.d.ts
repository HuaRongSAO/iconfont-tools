export declare const generateJs: (path: string) => Promise<string>;
export declare const generateJson: (path: string) => Promise<string>;
export declare const generateWxml: (path: string, icon?: string) => Promise<string>;
export declare const generateWxss: (path: string, fileName: string) => Promise<string>;
export declare const component: (path: string, icon: string, fileName: string) => Promise<[string, string, string, string]>;
export default component;
