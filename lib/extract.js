"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __importDefault(require("./utils"));
exports.INPUT_FILE = 'iconfont.js';
var Extract = /** @class */ (function () {
    function Extract(path, dirName, fileName) {
        this.path = path;
        this.content = '';
        this.dirName = dirName;
        this.targetDir = path + "/" + dirName;
        this.targetFile = path + "/" + dirName + "/" + fileName;
    }
    Extract.prototype.setContent = function (content) {
        this.content = content;
    };
    Extract.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var target;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateDir()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.generateStyle()];
                    case 2:
                        target = _a.sent();
                        return [2 /*return*/, target];
                }
            });
        });
    };
    Extract.prototype.getIconfontContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var target, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = this.path + "/" + exports.INPUT_FILE;
                        return [4 /*yield*/, utils_1.default.readFile(target)];
                    case 1:
                        content = _a.sent();
                        if (content === false)
                            throw new Error("\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u76EE\u5F55\u4E0B\u4E0D\u5B58\u5728 iconfont.js \u6587\u4EF6\uFF1A" + target);
                        return [2 /*return*/, content];
                }
            });
        });
    };
    Extract.prototype.generateStyle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mkState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utils_1.default.mkFile(this.targetFile, this.content)];
                    case 1:
                        mkState = _a.sent();
                        if (!mkState)
                            throw new Error("\u5BF9\u4E0D\u8D77,\u751F\u6210\u6587\u4EF6\uFF1A" + this.targetFile + " \u5931\u8D25");
                        return [2 /*return*/, this.targetFile];
                }
            });
        });
    };
    Extract.prototype.generateDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targetDir, mk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetDir = this.targetDir;
                        return [4 /*yield*/, this.clearDir()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, utils_1.default.mkdir(targetDir)];
                    case 2:
                        mk = _a.sent();
                        if (!mk)
                            throw new Error("\u521B\u5EFA\u6587\u4EF6\u5939\uFF1A" + targetDir + " \u5931\u8D25");
                        return [2 /*return*/, targetDir];
                }
            });
        });
    };
    Extract.prototype.clearDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targetDir, exit, delState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        targetDir = this.targetDir;
                        return [4 /*yield*/, utils_1.default.exitDir(targetDir)];
                    case 1:
                        exit = _a.sent();
                        if (!exit) return [3 /*break*/, 3];
                        return [4 /*yield*/, utils_1.default.rmdir(targetDir)];
                    case 2:
                        delState = _a.sent();
                        if (!delState)
                            throw new Error("\u5220\u9664\u6587\u4EF6\u5939:" + targetDir + " \u5931\u8D25");
                        _a.label = 3;
                    case 3: return [2 /*return*/, targetDir];
                }
            });
        });
    };
    return Extract;
}());
exports.Extract = Extract;
