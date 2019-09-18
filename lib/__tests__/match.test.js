"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var match_1 = require("../match");
var target_path = '/home/chr/github/iconfont-tools/asset/font_hiytajitqeu/iconfont.js';
test('Match', function () {
    var ex = new match_1.Match();
    var content = fs_1.default.readFileSync(target_path, 'utf-8') || '';
    ex.setContent(content)
        .matchesIcon()
        .generateSvg()
        .generateCss();
    expect(ex.icons.length).toBe(5);
});
