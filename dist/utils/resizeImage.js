"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfImageExist = exports.getImage = void 0;
const fs_1 = require("./fs");
const sharp_1 = __importDefault(require("sharp"));
const fs_2 = __importDefault(require("fs"));
const pathFromRoot = process.cwd() + '/public';
const getImage = (imagename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    (0, fs_1.makeThumbnailDirectoryIfNotExist)();
    const ImagePath = pathFromRoot + `/images/${imagename}.jpg`;
    if (width && height) {
        const imagenameAfterEdit = `${imagename}-width${width}-height${height}.jpg`;
        yield (0, sharp_1.default)(ImagePath)
            .resize({ width: width, height: height })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    }
    else if (width) {
        const imagenameAfterEdit = `${imagename}-width${width}.jpg`;
        yield (0, sharp_1.default)(ImagePath)
            .resize({ width: width })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    }
    else {
        const imagenameAfterEdit = `${imagename}-height${height}.jpg`;
        yield (0, sharp_1.default)(ImagePath)
            .resize({ height: height })
            .toFile(pathFromRoot + `/thumbinals/${imagenameAfterEdit}`);
        return imagenameAfterEdit;
    }
});
exports.getImage = getImage;
const checkIfImageExist = (imagename, width, height) => {
    let imagenameFromThumbinals = ``;
    if (width && height)
        imagenameFromThumbinals = `${imagename}-width${width}-height${height}.jpg`;
    else if (width)
        imagenameFromThumbinals = `${imagename}-width${width}.jpg`;
    else
        imagenameFromThumbinals = `${imagename}-height${height}.jpg`;
    const root = pathFromRoot + `/thumbinals/${imagenameFromThumbinals}`;
    if (fs_2.default.existsSync(root)) {
        return root;
    }
};
exports.checkIfImageExist = checkIfImageExist;
