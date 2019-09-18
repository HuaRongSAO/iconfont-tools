"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var match_1 = require("../match");
var root = path_1.default.resolve('');
var target_path = root + '/asset/font_hiytajitqeu/iconfont.js';
test('Match', function () {
    var ex = new match_1.Match();
    var content = fs_1.default.readFileSync(target_path, 'utf-8') || '';
    ex.setContent(content)
        .matchesIcon()
        .generateSvg()
        .generateCss();
    expect(ex.icons.length).toBe(5);
});
