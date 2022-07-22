"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeThumbnailDirectoryIfNotExist = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pathFromRoot = process.cwd() + '/public';
const makeThumbnailDirectoryIfNotExist = () => {
    if (!fs_1.default.existsSync(pathFromRoot + `/thumbinals`)) {
        fs_1.default.mkdirSync(path_1.default.join(pathFromRoot, 'thumbinals'));
    }
};
exports.makeThumbnailDirectoryIfNotExist = makeThumbnailDirectoryIfNotExist;
