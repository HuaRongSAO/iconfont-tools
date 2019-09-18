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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var rimraf_1 = __importDefault(require("rimraf"));
exports.getState = function (path) {
    return new Promise(function (resolve) {
        fs_1.default.stat(path, function (err, stats) {
            if (err) {
                return resolve(false);
            }
            resolve(stats);
        });
    });
};
exports.exitDir = function (path) {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var fileStats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.getState(path)];
                case 1:
                    fileStats = _a.sent();
                    if (!fileStats) {
                        return [2 /*return*/, resolve(false)];
                    }
                    if (!fileStats.isDirectory()) {
                        resolve(false);
                    }
                    resolve(true);
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.mkdir = function (path) {
    return new Promise(function (resolve) {
        fs_1.default.mkdir(path, function (err) {
            if (err) {
                return resolve(false);
            }
            resolve(true);
        });
    });
};
exports.rmdir = function (path) {
    return new Promise(function (resolve) {
        try {
            rimraf_1.default.sync(path);
            resolve(true);
        }
        catch (error) {
            resolve(false);
        }
    });
};
exports.mkFile = function (path, content) {
    return new Promise(function (resolve) {
        try {
            fs_1.default.writeFileSync(path, content);
            resolve(true);
        }
        catch (error) {
            resolve(false);
        }
    });
};
exports.readFile = function (path) {
    return new Promise(function (resolve) {
        try {
            var content = fs_1.default.readFileSync(path, 'utf-8');
            resolve(content);
        }
        catch (error) {
            resolve(false);
        }
    });
};
exports.copy = function (from, to) {
    return new Promise(function (resolve) {
        try {
            fs_1.default.writeFileSync(to, fs_1.default.readFileSync(from));
            resolve(true);
        }
        catch (error) {
            resolve(false);
        }
    });
};
exports.default = {
    getState: exports.getState,
    exitDir: exports.exitDir,
    mkdir: exports.mkdir,
    rmdir: exports.rmdir,
    mkFile: exports.mkFile,
    readFile: exports.readFile,
    copy: exports.copy,
};
