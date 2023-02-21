import { Icon, Svg } from './interface';
export declare class Match {
    content: string;
    prefixIcon: string;
    icons: Icon[];
    svgs: Svg[];
    css: string;
    constructor(prefixIcon?: string, size?: string);
    matchesContent(data: string): Match;
    matchesIcon(): Match;
    generateCss(): this;
    setContent(content: string): Match;
    svg2DataUrl(svgStr: string): string;
    generateSvg(): Match;
}
